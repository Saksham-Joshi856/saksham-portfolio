# Saksham Joshi — 3D Portfolio

A personal portfolio website showcasing my work as a Computer Engineering student and Full Stack Developer. The site features scroll-driven storytelling, a 3D character scene, physics-based tech stack visualization, and polished GSAP animations.

> **Note:** This project was originally based on an open-source 3D portfolio template and has since been extensively customized with my own personal information, projects, experience, skills, achievements, social links, resume, and UI modifications.

![Portfolio Preview](public/images/preview1.png)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Local Development](#local-development)
- [Build Instructions](#build-instructions)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Performance Optimizations](#performance-optimizations)
- [Customizations Made](#customizations-made)
- [My Contributions](#my-contributions)
- [Acknowledgements](#acknowledgements)
- [License](#license)

## Overview

This is my personal portfolio built to present my skills, projects, education, and achievements in an interactive, visually engaging format. The experience combines modern frontend engineering with Three.js 3D rendering and GSAP scroll animations to create a premium, recruiter-friendly presentation.

## Features

- Responsive one-page layout with dedicated section components
- 3D character scene with scroll-synced camera and skeletal animations
- React Three Fiber physics playground for the tech stack section
- GSAP ScrollSmoother, ScrollTrigger, and SplitText reveal animations
- Custom cursor and hover interactions (desktop)
- Loading screen with progress tracking and intro sequence
- Encrypted GLTF model loading with Draco compression
- Accessibility improvements including skip navigation, focus states, and reduced-motion support

## Tech Stack

### Core

- React 18
- TypeScript
- Vite

### 3D & Animation

- Three.js
- React Three Fiber (`@react-three/fiber`)
- `@react-three/drei` — Environment maps, helpers
- `@react-three/rapier` — Physics simulation
- `@react-three/postprocessing` — Ambient occlusion (N8AO)
- GSAP — ScrollSmoother, ScrollTrigger, SplitText, timelines

### Supporting Libraries

- `react-icons` — Iconography
- `react-fast-marquee` — Loading screen marquee

## Installation

### Prerequisites

- Node.js 18+
- npm 9+ (or compatible package manager)

### Steps

```bash
git clone <your-repository-url>
cd 3d-portfolio
npm install
```

## Local Development

Start the Vite development server:

```bash
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

Additional scripts:

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server with network host exposure |
| `npm run build` | Type-check and create production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Build Instructions

```bash
npm run build
```

This runs TypeScript compilation (`tsc -b`) followed by Vite bundling. Output is written to the `dist/` directory.

Verify locally before deploying:

```bash
npm run preview
```

## Deployment

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your hosting provider (Vercel, Netlify, Cloudflare Pages, etc.)
3. Ensure static assets are present in `public/`:
   - `/models/character.enc` — Encrypted 3D character model
   - `/draco/` — Draco decoder files
   - `/models/char_enviorment.hdr` — HDR environment map
   - `/images/` — Project and tech stack images
   - `/Saksham_Joshi_Resume.pdf` — Resume PDF

## Project Structure

```text
.
├── public/                         # Static assets (models, images, resume)
├── src/
│   ├── components/
│   │   ├── Character/              # Vanilla Three.js character scene
│   │   │   ├── Scene.tsx           # WebGL renderer and animation loop
│   │   │   └── utils/              # Model loading, lighting, animations
│   │   ├── styles/                 # Per-section CSS modules
│   │   ├── utils/                  # GSAP scroll and text animation utilities
│   │   ├── About.tsx
│   │   ├── Career.tsx
│   │   ├── Contact.tsx
│   │   ├── Landing.tsx
│   │   ├── MainContainer.tsx       # Page composition and layout
│   │   ├── Navbar.tsx
│   │   ├── TechStack.tsx           # R3F physics canvas
│   │   ├── WhatIDo.tsx
│   │   └── Work.tsx
│   ├── context/                    # Loading state provider
│   ├── data/                       # Bone animation data
│   ├── utils/                      # Shared motion, font, and device utilities
│   ├── App.tsx
│   └── main.tsx
├── OPTIMIZATION_REPORT.md          # Detailed performance audit report
├── package.json
└── vite.config.ts
```

## Performance Optimizations

This portfolio has undergone a full performance audit. Key optimizations include:

- **Adaptive DPR** capping pixel ratio on high-DPI displays
- **Visibility-based rendering** — 3D loops pause when off-screen or tab is hidden
- **Frameloop demand mode** for the TechStack canvas when inactive
- **Event listener leak fixes** across Scene, Cursor, SocialIcons, and WhatIDo
- **Debounced resize handlers** for SplitText and ScrollSmoother refresh
- **Font-ready gating** before SplitText initialization
- **`prefers-reduced-motion`** support across animations and scroll smoothing
- **Code splitting** for Three.js, GSAP, and R3F via Vite manual chunks
- **Resource disposal** for Three.js geometries, materials, and renderers

See [OPTIMIZATION_REPORT.md](./OPTIMIZATION_REPORT.md) for the complete audit with before/after impact estimates.

## Customizations Made

After adopting the original open-source template, the following areas were personalized:

- **Personal branding** — Name, title, social links, resume, and contact information
- **Content sections** — About, What I Do, Career, Work projects, and Contact details
- **3D character styling** — Shirt and pant material colors aligned to site theme
- **Navigation** — Custom navbar with LinkedIn link and section anchors
- **Project showcase** — Individual project cards with tech stacks, demos, and GitHub links
- **Achievements** — Google Arcade Games cohort, API Conf Pune, Google WOW Event
- **UI refinements** — Work section grid layout, accent color theming, responsive breakpoints

## My Contributions

Major modifications and improvements made after adopting the original template:

### Content & Branding
- Replaced all template personal information with my own profile, education, and experience
- Added custom projects with descriptions, tech stacks, live demos, and GitHub links
- Updated achievements, social links, and resume integration
- Customized landing hero copy and section content

### Performance Engineering
- Fixed memory leaks from uncleaned event listeners and animation intervals
- Added IntersectionObserver-based render pausing for the character scene and TechStack
- Implemented adaptive device pixel ratio and conditional antialiasing
- Reduced ScrollSmoother intensity and disabled parallax effects under reduced motion
- Eliminated duplicate ScrollTrigger refresh listeners in SplitText
- Moved loading state updates out of render phase into proper effects
- Added Three.js resource disposal on scene unmount
- Pre-assigned stable sphere materials in TechStack to prevent re-render churn
- Configured Vite manual chunk splitting for faster initial load

### Architecture & Maintainability
- Created shared utilities for motion preferences, font loading, and device detection
- Added `cleanupCharTimeline()` for proper GSAP interval and tween teardown
- Memoized MainContainer, CharacterModel, and TechStack components
- Removed unused dependencies (`@react-three/cannon`, `@gsap/react`, `@vercel/analytics`)
- Stabilized resize effect dependencies in MainContainer

### Accessibility
- Added skip-to-content navigation link
- Semantic `<nav>` element with ARIA labels
- `aria-live` loading progress, `aria-label` on social links
- Keyboard-focusable What I Do cards with `aria-expanded` state
- Global `:focus-visible` styles and `prefers-reduced-motion` CSS overrides

### Documentation
- Rewrote README to accurately reflect ownership, template origin, and contributions
- Authored comprehensive optimization report with impact analysis

## Acknowledgements

- **Original template** — This portfolio was initially based on an open-source 3D portfolio project by [Akash Malhotra](https://github.com/AkashMalhotra). The foundational architecture for the character scene, GSAP scroll system, and section layout provided an excellent starting point.
- **GSAP** — Animation platform with ScrollSmoother, ScrollTrigger, and SplitText plugins
- **Three.js & React Three Fiber** — 3D rendering ecosystem
- **Vite** — Fast build tooling and dev server

## GSAP License Note

This project uses the standard `gsap` package, including bonus plugins available in the core distribution. See the [GSAP Installation Docs](https://gsap.com/docs/v3/Installation/) for official guidance.

## License

This project is open source and available under the [MIT License](LICENSE).
