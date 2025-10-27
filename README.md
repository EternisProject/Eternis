# ETERNIS

**Decentralized Medical & Technological Research Protocol** - *Early Stage Prototype*

---

## 📌 Project Status

**Current Version:** 1.0.0-alpha (Proof of Concept)

This is an **early-stage prototype** demonstrating the core concept of a decentralized research funding platform. The project showcases the foundational architecture and basic functionality needed to validate the business model with potential investors.

---

## 🎯 The Vision

ETERNIS aims to democratize research funding by removing traditional gatekeepers and enabling direct, transparent connections between researchers and funders. The platform will combine Web2 authentication ease with Web3 decentralization benefits.

### Problem Statement
- Research funding is centralized and slow
- Independent researchers struggle to access capital
- Lack of transparency in allocation decisions
- Geographic and institutional barriers limit opportunities

### Proposed Solution
A decentralized platform where:
- Researchers submit proposals anonymously
- Community votes on funding allocation
- All transactions are recorded on-chain for transparency
- Global participation without intermediaries

---

## ✅ Current Implementation

### What's Working Now

**Authentication System**
- OAuth integration (GitHub, Google)
- JWT-based session management
- Basic user profile system

**Research Submissions**
- Create and submit research proposals
- View personal submissions
- Browse community proposals
- Basic CRUD operations

**Voting System**
- Vote on research proposals
- Track voting activity
- Basic validation logic

**Infrastructure**
- MySQL database (MariaDB compatible)
- RESTful API with Express.js
- Basic logging system
- Multilingual support (EN, ZH-CN)

---

## 🚧 Not Yet Implemented

The following features are **planned** but not currently functional:

- ❌ Actual blockchain integration (wallet connection files are placeholder)
- ❌ Token ($ETRNS) smart contracts
- ❌ On-chain voting mechanisms
- ❌ Cryptocurrency transactions
- ❌ Token reward distribution
- ❌ Advanced analytics dashboard
- ❌ DAO governance structures
- ❌ Mobile applications
- ❌ Extensive testing and security audits

---

## 🛠️ Technology Stack

### Backend
- Node.js + Express.js
- MySQL2/MariaDB
- Passport.js (OAuth)
- JWT for sessions

### Frontend
- Vanilla JavaScript
- Basic HTML/CSS
- Simple i18n implementation

### Planned (Not Implemented)
- Solana blockchain integration
- SPL Token standard
- Multi-wallet support (Phantom, Backpack, Solflare)

---

## 📊 What This Demonstrates

This prototype proves:

1. **Technical Feasibility** - Core authentication and submission flows work
2. **User Flow** - Basic UX for researchers and validators
3. **Database Architecture** - Scalable schema design for future features
4. **API Structure** - RESTful endpoints ready for expansion
5. **Internationalization** - Foundation for global reach

---

## 💼 For Potential Investors

### What You're Looking At

This is an **MVP (Minimum Viable Product)** designed to:
- Validate core assumptions about user behavior
- Demonstrate technical capability of the team
- Showcase the UI/UX vision
- Prove the concept before significant investment

### Development Status

**Completed:** ~30% of full vision
- ✅ User authentication
- ✅ Basic proposal system
- ✅ Simple voting mechanism
- ✅ Database architecture

**Next Phase Required:**
- Blockchain integration
- Smart contract development
- Token economics implementation
- Security hardening
- Comprehensive testing

### Investment Opportunity

This prototype represents the **foundation** for a platform targeting:
- **Medical research funding market:** $240B+ annually
- **Technology research sector:** $2T+ market
- **DeFi/Web3 growth:** Rapidly expanding user base

**What Investment Enables:**
- Full blockchain integration development
- Smart contract auditing and deployment
- Token launch and liquidity provision
- Team expansion (blockchain developers, security experts)
- Marketing and user acquisition
- Legal compliance and licensing

---

## 📈 Roadmap

### Phase 1 (Current) - ✅ Complete
- Basic authentication and user management
- Research submission system
- Simple voting mechanism
- Database foundation

### Phase 2 (Needs Funding)
- Solana blockchain integration
- Smart contract development for $ETRNS token
- Wallet connectivity (Phantom, Backpack, Solflare)
- On-chain voting mechanisms

### Phase 3 (Future)
- DAO governance implementation
- Advanced analytics and reporting
- Mobile application
- Additional blockchain support
- International expansion

---

## 🔍 Technical Architecture

### Current Structure

```
├── app.js                    # Main Express server
├── src/
│   ├── controllers/          # API route handlers
│   ├── models/               # Database models
│   ├── services/             # OAuth services
│   │   └── wallet/           # Placeholder for blockchain
│   └── middlewares/          # JWT authentication
└── public/                   # Frontend assets
    └── scripts/              # Client-side JavaScript
```

### Database Schema

See `/docs/DATABASE.md` for complete schema design including:
- Users system (OAuth + future wallet addresses)
- Submissions management
- Voting tracking
- Activity logging
- **Planned:** Token rewards and distribution (not implemented)

---

## 🎓 Key Features (Implemented)

- 🔐 Multi-provider OAuth authentication
- 📝 Research proposal submission
- 🗳️ Basic voting system
- 📊 Activity tracking
- 🌍 Bilingual interface (EN/ZH)
- 📋 User dashboard

---

## ⚠️ Limitations & Disclaimers

**This is a prototype.** It is:
- Not production-ready
- Missing critical blockchain features
- Not security-audited
- Intended for demonstration purposes
- Requires significant development before launch

**Do not:**
- Use with real funds
- Deploy publicly without security review
- Assume all documented features are functional

---

## 🔒 Security Note

Current security measures:
- JWT session management
- OAuth provider verification
- Basic input validation
- SQL injection prevention

**Still needed:**
- Comprehensive security audit
- Penetration testing
- Smart contract auditing
- Rate limiting and DDoS protection
- Advanced encryption standards

---

## 📚 Documentation

Available in `/docs`:
- `DATABASE.md` - Complete database schema (including future tables)
- `I18N_GUIDE.md` - Internationalization implementation
- `LOGS_GUIDE.md` - Logging system
- `NOTIFICATIONS.md` - Notification system

---

## 💬 Contact

This project is currently in stealth mode. For investment or partnership inquiries, please use appropriate channels.

---

## 📄 License

**All Rights Reserved** - Proprietary

This is private, confidential code intended for investor demonstration purposes only.

---

*ETERNIS - Building the future of decentralized research, one step at a time.*
