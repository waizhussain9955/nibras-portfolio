# ⚡ NIBRAS ANSARI — CYBER NEON GRAPHIC DESIGNER PORTFOLIO & LIVE CMS

[![Live Portfolio](https://img.shields.io/badge/Live%20Portfolio-waizhussain9955.github.io-9333ea?style=for-the-badge&logo=github)](https://waizhussain9955.github.io/nibras-portfolio/)
[![Admin CMS](https://img.shields.io/badge/Admin%20CMS-Live%20Panel-06b6d4?style=for-the-badge&logo=codepen)](https://waizhussain9955.github.io/nibras-portfolio/admin-nibras2026.html)
[![License](https://img.shields.io/badge/License-MIT-a855f7?style=for-the-badge)](LICENSE)

An ultra-modern, high-performance portfolio and dynamic content management system designed for **Nibras Ansari** — Creative Graphic Designer, Mascot Logo Artist, and Esports Branding Expert.

---

## 🌟 Key Highlights & Features

### 🎨 1. Dynamic Cyber Theme Engine (Dark & Light Mode)
- **Harmonized Color Palette:** Cyber Purple (`#9333ea`), Vibrant Magenta (`#d946ef`), Neon Cyan (`#06b6d4`), and Deep Space Dark & Clean Pearl Light backgrounds.
- **Instant Toggle & Sync:** Seamless toggle button across all pages with state persisted in `localStorage`.
- **Custom Interactive Audio FX:** Web Audio API synth blips on click, hover, and theme switches.
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

### ☁️ 3. Direct GitHub REST API Cloud Sync (Zero Backend Hosting Needed)
- On GitHub Pages (`https://waizhussain9955.github.io/nibras-portfolio/`), changes saved in Admin are automatically committed and pushed directly to the GitHub repository using the GitHub REST API and GitHub Personal Access Token.
- Updates reflect globally across all devices without needing command-line git execution.

### 🚀 4. Standalone Local Node.js Server (`server.js`)
- Includes a standalone Node.js server with endpoints:
  - `GET /api/data`: Zero-cache live JSON read.
  - `POST /api/save-data`: Direct disk write to `data.json`.
  - `POST /api/leads`: Contact form submission handler.

---

## 📂 Project Architecture

```
nibras-portfolio/
├── admin-nibras2026.html    # Full Cyber CMS Admin Panel (Responsive Dashboard)
├── admin.css                # Admin panel layout, sidebar, modals, and theme styles
├── admin.js                 # Admin CMS logic, CRUD, GitHub REST API Cloud Sync
├── index.html               # Main portfolio landing page
├── index.css                # Global design system, cyber effects, light/dark themes
├── index.js                 # Dynamic DOM hydration, animations, sound synth, leads
├── projects.html            # Portfolio archive gallery (Root alias)
├── projects/
│   └── index.html           # Portfolio archive subfolder
├── data.json                # Single source of truth database for portfolio content
├── server.js                # Standalone Node.js backend server with REST APIs
├── assets/                  # High-resolution vector artworks, logos, and mascots
├── project-spec/
│   └── spec.md              # Complete technical architecture & maintenance specifications
├── Nibras Resume.pdf        # Professional designer resume
├── robots.txt               # SEO Crawler directives
├── sitemap.xml              # Search engine index XML
└── README.md                # Project documentation
```

---

## ⚡ Quick Start & Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (Version 16 or higher)

### 1. Clone the Repository
```bash
git clone https://github.com/waizhussain9955/nibras-portfolio.git
cd nibras-portfolio
```

### 2. Start the Local Server
```bash
node server.js
```

### 3. Open in Browser
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

- **GitHub Pages:** [https://waizhussain9955.github.io/nibras-portfolio/](https://waizhussain9955.github.io/nibras-portfolio/)
- **GitHub Repository:** [https://github.com/waizhussain9955/nibras-portfolio](https://github.com/waizhussain9955/nibras-portfolio)

---

## 📄 License & Credits
- **Designed & Developed for:** Nibras Ansari
- **Repository Maintainer:** [Waiz Hussain](https://github.com/waizhussain9955)
- **License:** MIT
