# Premanand Londhe — Full Stack Developer Portfolio

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Premanand%20Londhe-FF6B00?style=for-the-badge&logo=react&logoColor=white)
![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-4.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.x-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-3D-black?style=for-the-badge&logo=threedotjs&logoColor=white)

A **premium, modern, fully mobile-responsive portfolio** for a Full Stack Developer — featuring a 3D animated background, premium loading screen, glassmorphism UI, and smooth Framer Motion animations.

**Live →** [padmavatipharma.vercel.app](https://padmavatipharma.vercel.app/) &nbsp;|&nbsp; **GitHub →** [prema-16/Portfolio-site](https://github.com/prema-16/Portfolio-site)

</div>

---

## ✨ Highlights

| Feature | Details |
|---------|---------|
| 🎬 **Premium Loading Screen** | SVG diamond traces itself → "P" letter blooms with glow → name reveals |
| 🌐 **3D Background** | React Three Fiber canvas with animated Icosahedron sphere, floating shapes, and star field |
| 📱 **Mobile-First Design** | Fully responsive across all screen sizes (320px → 4K) |
| 🎨 **Glassmorphism UI** | Premium dark theme with glass-panel components and neon accents |
| ⚡ **Framer Motion** | 60fps scroll-driven animations, hover effects, stagger reveals |
| 🖱️ **Custom Cursor** | Glowing cursor tracker (desktop only) |
| 🔢 **Typing Animation** | Dynamic multi-role typing effect in Hero section |
| 🧩 **Interactive Projects** | Bottom-sheet modal on mobile, grid modal on desktop |
| 📊 **Animated Skills** | Category filter tabs + live progress bars |
| 🗓️ **Learning Timeline** | Zigzag on desktop, clean left-column on mobile |

---

## 🛠️ Tech Stack

### Core
- **React 18** — UI library
- **Vite 4** — lightning-fast build tool
- **Tailwind CSS 3** — utility-first styling

### Animation & 3D
- **Framer Motion** — animations, transitions, gesture handling
- **React Three Fiber** — React renderer for Three.js
- **@react-three/drei** — Three.js helpers (Stars, Float, MeshDistortMaterial, Icosahedron)
- **Three.js** — 3D engine

### UI & Utilities
- **React Icons (Feather)** — icon set
- **React Scroll** — smooth section navigation
- **React Intersection Observer** — scroll-triggered animations

---

## 📁 Project Structure

```
mysite/
├── public/
├── src/
│   ├── components/
│   │   ├── LoadingScreen.jsx      # Premium SVG diamond loading animation
│   │   ├── Navbar.jsx             # Glassmorphism sticky nav + mobile hamburger
│   │   ├── HeroSection.jsx        # Full-screen hero with typing animation
│   │   ├── AboutSection.jsx       # Bio, stats grid, education timeline
│   │   ├── SkillsSection.jsx      # Filterable skills with progress bars
│   │   ├── ProjectsSection.jsx    # Project cards + bottom-sheet modal
│   │   ├── ServicesSection.jsx    # Services grid with hover effects
│   │   ├── TimelineSection.jsx    # Learning journey (mobile + desktop layouts)
│   │   ├── ContactSection.jsx     # Contact form + social links
│   │   └── Footer.jsx             # Footer with quick links
│   ├── utils/
│   │   ├── Background3D.jsx       # React Three Fiber canvas wrapper (mobile-aware)
│   │   ├── AIAvatar.jsx           # Icosahedron + distort sphere (centers on mobile)
│   │   ├── Floating3DShapes.jsx   # Floating TorusKnot, Box, Octahedron shapes
│   │   ├── NeonBackground.jsx     # Canvas animated neon orbs
│   │   ├── Particles.jsx          # Canvas floating particle system
│   │   ├── EnhancedMouseTracker.jsx  # Custom glow cursor (desktop only)
│   │   ├── animations.js          # Shared Framer Motion variants
│   │   └── ...other utils
│   ├── App.jsx                    # Root component
│   ├── main.jsx
│   └── index.css                  # Tailwind + global styles + component classes
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v16+
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/prema-16/Portfolio-site.git
cd Portfolio-site

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open `http://localhost:3000` (or next available port) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 📱 Mobile Responsiveness

The portfolio is fully optimized for mobile with a **mobile-first** approach:

| Section | Mobile Behavior |
|---------|----------------|
| **Hero** | Centered text, full-width stacked buttons, larger touch icons |
| **Skills** | Horizontally scrollable filter tabs (no-scrollbar), inline category icon |
| **Projects** | **Bottom-sheet modal** slides up from bottom on tap |
| **Timeline** | Left-aligned single-column (zigzag only on desktop) |
| **Contact** | Name + email side-by-side on sm+, icon-only social links on mobile |
| **Footer** | 2-column grid, compact sizing |
| **3D Background** | Centered sphere on mobile, wider FOV (75°), auto-rotation (no pointer tracking) |
| **Custom Cursor** | Hidden on mobile (`hidden md:block`) |

---

## 🎬 Loading Screen Animation

Premium 5-second stage-based loading sequence:

1. **0.3s** — Dark background fades in with ambient glow
2. **0.7s** — SVG diamond border **traces itself** (cyan→orange→pink gradient)
3. **2.2s** — "P" letter **blooms** from center with warm gradient + glow + ring pulses
4. **3.0s** — "**Premanand Londhe**" fades in with blur-clear reveal
5. **3.8s** — Subtitle appears
6. **4.6s** — Smooth full-screen fade out
7. **5.2s** — Portfolio reveals

> The website **waits** for the full animation to complete before showing content.

---

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `accent` | `#FF6B00` | Orange — primary brand color |
| `dark-bg` | `#0A0A0A` | Main background |
| `dark-secondary` | `#111111` | Card backgrounds |
| `neon-blue` | `#00D9FF` | Cyan accents |
| `neon-purple` | `#8B5CF6` | Purple highlights |

### Typography
- **Display**: Outfit (300–950 weight)
- **Body**: Space Grotesk
- **Mono**: Space Mono

### Global Classes (index.css)
```css
.glass          /* Glassmorphism card */
.glass-panel    /* Bordered glass panel */
.btn-primary    /* Orange CTA button */
.btn-secondary  /* Outlined ghost button */
.section-title  /* Responsive gradient heading (clamp-based) */
.gradient-text  /* Orange gradient text */
.no-scrollbar   /* Hide scrollbar (for mobile filter tabs) */
```

---

## 📞 Contact

| Platform | Link |
|----------|------|
| 📧 Email | [premanandlondhe16@gmail.com](mailto:premanandlondhe16@gmail.com) |
| 💼 LinkedIn | [linkedin.com/in/premanand-londhe416](https://www.linkedin.com/in/premanand-londhe416/) |
| 🐙 GitHub | [github.com/prema-16](https://github.com/prema-16) |
| 📱 Phone | +91 8624853376 |
| 📍 Location | Maharashtra, India |

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

---

## 🆘 Troubleshooting

### Port already in use
```bash
npm run dev -- --port 3001
```

### Node modules issue
```bash
rm -rf node_modules
npm install
```

### Build errors
```bash
npm run build 2>&1
```

---

## 📄 License

MIT — free to use and customize.

---

<div align="center">
  Built with ❤️ and lots of ☕ by <strong>Premanand Londhe</strong>
  <br/>
  <sub>Full Stack Developer · Maharashtra, India</sub>
</div>
