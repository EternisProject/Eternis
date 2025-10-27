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
- Researchers submit proposals anonymoussly
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
- ❌ On-chain voting mechanisms
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

*ETERNIS - Building the future of decentralized research, one step at a time.*
