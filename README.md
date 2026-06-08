# Saksham Joshi — Software Engineering Portfolio

A professional, recruiter-focused portfolio showcasing projects, skills, experience, and achievements. Built with React, TypeScript, and Vite.

> Originally based on an open-source 3D portfolio template. Fully redesigned into a content-first engineering portfolio.

## Features

- Clean hero with clear CTAs (Projects, Resume, GitHub, LinkedIn)
- Structured sections: About, Skills, Experience, Projects, Achievements, Education, Contact
- Enhanced project cards with problem, features, tech stack, and impact
- Live GitHub repository integration (REST API with caching)
- Optional LeetCode stats (auto-hidden if API unavailable)
- Working contact form via Formspree
- Subtle scroll animations, full accessibility support
- Mobile-responsive, performance-optimized (no WebGL or heavy animation libraries)

## Tech Stack

- React 18 + TypeScript
- Vite
- CSS (design system inspired by Linear/Vercel)
- GitHub REST API
- Formspree (contact form)

## Getting Started

```bash
npm install
cp .env.example .env
# Add your Formspree form ID to .env
npm run dev
```

### Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_FORMSPREE_FORM_ID` | Formspree form ID for contact submissions |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Project Structure

```text
src/
├── components/     # Section components (Hero, Projects, Contact, etc.)
├── data/           # Profile, projects, skills, experience content
├── hooks/          # GitHub API, contact form, scroll reveal
├── App.tsx
└── main.tsx
```

## Deployment

1. `npm run build`
2. Deploy `dist/` to Vercel, Netlify, or Cloudflare Pages
3. Set `VITE_FORMSPREE_FORM_ID` in your hosting provider's environment variables
4. Ensure `public/Saksham_Joshi_Resume.pdf` and project images are present

## Documentation

- [TRANSFORMATION_REPORT.md](./TRANSFORMATION_REPORT.md) — Full redesign changelog

## Acknowledgements

Originally based on an open-source 3D portfolio template by Akash Malhotra. Extensively redesigned for professional engineering presentation.

## License

MIT
