# ⚡ NIBRAS ANSARI — CYBER NEON GRAPHIC DESIGNER PORTFOLIO & LIVE CMS

[![Live Portfolio (Vercel)](https://img.shields.io/badge/Live%20Portfolio-nibras--ansari--portfolio.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://nibras-ansari-portfolio.vercel.app/)
[![Admin CMS](https://img.shields.io/badge/Admin%20CMS-Live%20Panel-06b6d4?style=for-the-badge&logo=codepen)](https://nibras-ansari-portfolio.vercel.app/admin-nibras2026.html)
[![Database](https://img.shields.io/badge/Neon%20DB-PostgreSQL-00e599?style=for-the-badge&logo=postgresql&logoColor=white)](https://neon.tech)
[![GitHub Pages Mirror](https://img.shields.io/badge/GitHub%20Pages-Mirror-9333ea?style=for-the-badge&logo=github)](https://waizhussain9955.github.io/nibras-portfolio/)
[![License](https://img.shields.io/badge/License-MIT-a855f7?style=for-the-badge)](LICENSE)

An ultra-modern, high-performance portfolio and dynamic content management system designed for **Nibras Ansari** — Creative Graphic Designer, Mascot Logo Artist, and Esports Branding Expert.

---

## 🌟 Key Highlights & Features

### 🎨 1. Dynamic Cyber Theme Engine (Dark & Light Mode)
- **Harmonized Color Palette:** Cyber Purple (`#9333ea`), Vibrant Magenta (`#d946ef`), Neon Cyan (`#06b6d4`), and Deep Space Dark & Clean Pearl Light backgrounds.
- **Instant Toggle & Sync:** Seamless toggle button across all pages with state persisted in `localStorage`.
- **Custom Interactive Audio FX:** Web Audio API synth blips on click, hover, and theme switches (zero MP3 files needed).
- **Interactive Cursor & Parallax:** Fluid trailing cursor, 3D tilt cards, holographic cards, and glowing laser scan lines.

### 🔐 2. Cyber CMS Admin Dashboard (`/admin-nibras2026.html`)
- **Password Protected Portal:** Secure session-authenticated management panel.
- **Complete CRUD Operations:**
  - **Hero Section:** Update headlines, typewriter animated roles, dynamic cyber code, and stats.
  - **Portfolio Manager:** Add, edit, reorder, filter, and delete projects with custom tags and badges.
  - **Services / Expertise:** Manage design services and custom SVGs.
  - **Work Experience:** Interactive timeline editor with task bullet management.
  - **Software Stack:** Adjust proficiency percentages and brand badge levels.
  - **Media Gallery:** Image upload, preview, and one-click URL copy.
  - **Client Leads Inbox:** Direct lead capture from the contact form with instant review.
  - **Backup & Restore:** One-click JSON backup export and restore engine.

### 🐘 3. Neon Cloud PostgreSQL Database Integration
- **Serverless PostgreSQL Database:** Connected to Neon Serverless Cloud (`@neondatabase/serverless`).
- **Real-Time Client Lead Storage:** Form submissions on the contact page are safely captured and stored directly in the `leads` table in Neon PostgreSQL.
- **Dual Fallback & Cloud Sync:** Inquiries are stored in Neon PostgreSQL cloud, local browser storage, and administrative backups for maximum reliability.
- **Security & Spam Protection:** Serverless endpoints include RFC 5322 email regex validation, honeypot anti-spam traps, and input sanitization.

### ☁️ 4. Dual Deployment: Vercel Serverless & GitHub Pages Direct Sync
- **Vercel Cloud Deployment:** Hosted live with global edge CDN, low-latency static file serving, and Node.js serverless functions under `/api/`.
- **GitHub Pages Static Sync:** Changes saved in Admin can also commit directly to the GitHub repository using the GitHub REST API and GitHub Personal Access Token (`data.json` PUT endpoint).

### 🚀 5. Standalone Local Node.js Server (`server.js`)
- Includes a standalone Node.js server with REST endpoints:
  - `GET /api/data`: Zero-cache live JSON read with database fallback.
  - `POST /api/save-data`: Direct disk write to `data.json` and sync.
  - `POST /api/leads`: Contact form submission handler connected to Neon PostgreSQL.

---

## 📂 Project Architecture

```
nibras-portfolio/
├── admin-nibras2026.html    # Full Cyber CMS Admin Panel (Responsive Dashboard)
├── admin.css                # Admin panel layout, sidebar, modals, and theme styles
├── admin.js                 # Admin CMS logic, CRUD, GitHub & Neon Cloud Sync
├── index.html               # Main portfolio landing page
├── index.css                # Global design system, cyber effects, light/dark themes
├── index.js                 # Dynamic DOM hydration, animations, sound synth, leads
├── projects.html            # Portfolio archive gallery (Root alias)
├── projects/
│   └── index.html           # Portfolio archive subfolder
├── api/                     # Vercel Serverless Functions
│   ├── data.js              # Serverless handler for portfolio content
│   └── leads.js             # Serverless handler for contact lead submissions (Neon DB)
├── vercel.json              # Vercel routing, static root config & serverless rules
├── data.json                # Single source of truth database for portfolio content
├── server.js                # Standalone Node.js backend server with REST APIs
├── assets/                  # High-resolution vector artworks, logos, and mascots
├── project-spec/
│   └── spec.md              # Complete technical architecture & maintenance specifications
├── Nibras Resume.pdf        # Professional designer resume
├── robots.txt               # SEO Crawler directives
├── sitemap.xml              # Search engine index XML
├── package.json             # NPM dependencies (@neondatabase/serverless, dotenv)
└── README.md                # Project documentation
```

---

## ⚡ Quick Start & Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
- [Neon PostgreSQL Database](https://neon.tech/) (free tier supported)

### 1. Clone the Repository
```bash
git clone https://github.com/waizhussain9955/nibras-portfolio.git
cd nibras-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory (or configure in Vercel Project Settings):
```env
DATABASE_URL=postgresql://neondb_owner:YOUR_PASSWORD@YOUR_NEON_HOST/neondb?sslmode=require
```

### 4. Start the Local Server
```bash
npm start
# or: node server.js
```

### 5. Open in Browser
- **Portfolio Homepage:** [http://localhost:8000](http://localhost:8000)
- **Projects Archive:** [http://localhost:8000/projects/](http://localhost:8000/projects/)
- **Admin CMS Dashboard:** [http://localhost:8000/admin-nibras2026.html](http://localhost:8000/admin-nibras2026.html)

---

## 🔐 Admin CMS Credentials

| Field | Default Value |
|---|---|
| **Login URL** | `/admin-nibras2026.html` |
| **Email** | `nibrasansari002@gmail.com` |
| **Password** | `nibras2026` |

*(Credentials can be updated anytime inside Admin Panel under the Security section).*

---

## 🌐 Live Deployments

- **🚀 Live Production (Vercel):** [https://nibras-ansari-portfolio.vercel.app/](https://nibras-ansari-portfolio.vercel.app/)
- **⚡ Admin CMS Panel:** [https://nibras-ansari-portfolio.vercel.app/admin-nibras2026.html](https://nibras-ansari-portfolio.vercel.app/admin-nibras2026.html)
- **🎨 Projects Gallery:** [https://nibras-ansari-portfolio.vercel.app/projects/](https://nibras-ansari-portfolio.vercel.app/projects/)
- **🐙 GitHub Pages (Mirror):** [https://waizhussain9955.github.io/nibras-portfolio/](https://waizhussain9955.github.io/nibras-portfolio/)
- **💻 GitHub Repository:** [https://github.com/waizhussain9955/nibras-portfolio](https://github.com/waizhussain9955/nibras-portfolio)

---

## 📄 License & Credits
- **Designed & Developed for:** Nibras Ansari
- **Repository Maintainer:** [Waiz Hussain](https://github.com/waizhussain9955)
- **License:** MIT
