// User management stuff
// Handles auth with Google/GitHub + wallet connections
// 
// Privacy note: we don't store names, emails or any PII
// Just the OAuth IDs for login and optional wallet addresses
// Everything is linked to a random UUID

const pool = require('../pool.connexion.sql');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

class UserManager {
    
    // Find user by github id
    static async findByGithubId(githubId) {
        const [rows] = await pool.query('SELECT * FROM users WHERE github_id = ?', [githubId]);
        return rows[0] || null;
    }

    // Find user by google id
    static async findByGoogleId(googleId) {
        const [rows] = await pool.query('SELECT * FROM users WHERE google_id = ?', [googleId]);
        return rows[0] || null;
    }

    // Get user by UUID
    static async findByUuid(uuid) {
        const [rows] = await pool.query('SELECT * FROM users WHERE uuid = ?', [uuid]);
        return rows[0] || null;
    }

    // Create new user from github login
    static async createFromGithub(profile) {
        const newUser = {
            uuid: uuidv4(),
            github_id: profile.id,
            last_login_at: new Date()
        };

        const [result] = await pool.query('INSERT INTO users SET ?', newUser);
        
        // get the user we just created
        const [rows] = await pool.query('SELECT * FROM users WHERE user_id = ?', [result.insertId]);
        return rows[0];
    }

    // Create new user from google login
    static async createFromGoogle(profile) {
        const newUser = {
            uuid: uuidv4(),
            google_id: profile.id,
            last_login_at: new Date()
        };

        const [result] = await pool.query('INSERT INTO users SET ?', newUser);
        
        const [rows] = await pool.query('SELECT * FROM users WHERE user_id = ?', [result.insertId]);
        return rows[0];
    }

    // Main auth function - finds existing user or creates new one
    // Works with both google and github
    static async findOrCreate(profile) {
        try {
            let user;

            // check which provider we're using
            if (profile.provider === 'google') {
                user = await this.findByGoogleId(profile.id);
            } else if (profile.provider === 'github') {
                user = await this.findByGithubId(profile.id);
            } else {
                throw new Error(`Unsupported provider: ${profile.provider}`);
            }

            // if user already exists just update their last login
            if (user) {
                await pool.query('UPDATE users SET last_login_at = ? WHERE user_id = ?', [new Date(), user.user_id]);
                return user;
            }

            // user doesn't exist, create new account
            if (profile.provider === 'google') {
                return await this.createFromGoogle(profile);
            } else { 
                // must be github
                return await this.createFromGithub(profile);
            }

        } catch (error) {
            console.error('Error in findOrCreate:', error);
            throw error;
        }
    }

    // Store or clear refresh token (hashed for security)
    static async updateRefreshToken(uuid, refreshToken) {
        try {
            // if no token provided, clear it from db
            if (!refreshToken) {
                await pool.query('UPDATE users SET refresh_token = NULL WHERE uuid = ?', [uuid]);
                return;
            }

            // hash the token before storing - never store plain tokens!
            const salt = await bcrypt.genSalt(10);
            const hashedToken = await bcrypt.hash(refreshToken, salt);
            await pool.query('UPDATE users SET refresh_token = ? WHERE uuid = ?', [hashedToken, uuid]);
        } catch (error) {
            console.error('Error updating refresh token:', error);
            throw error;
        }
    }

    // Check if provided token matches stored hash
    static async compareRefreshToken(providedToken, storedToken) {
        if (!providedToken || !storedToken) {
            return false;
        }
        return bcrypt.compare(providedToken, storedToken);
    }


    // Update wallet address for user
    // Returns true if successful
    static async updateWalletAddress(uuid, walletAddress) {
        try {
            const [result] = await pool.query(
                'UPDATE users SET wallet_address = ? WHERE uuid = ?',
                [walletAddress, uuid]
            );
            
            return result.affectedRows > 0;
        } catch (error) {
            console.error('Error updating wallet address:', error);
            throw error;
        }
    }
}

module.exports = UserManager;
