# Nafizur Rahman Mallick — Personal Portfolio V2

A futuristic, minimal engineering portfolio built with Next.js, TypeScript, React, and CSS.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where to edit your information

All primary content is separated from the UI:

- `data/profile.ts` — name, title, bio, email, location, resume
- `data/social.ts` — GitHub, LinkedIn, email and other links
- `data/skills.ts` — technology groups
- `data/projects.ts` — projects, technologies, GitHub/live links
- `data/experience.ts` — experience and journey
- `data/education.ts` — education and coursework
- `data/achievements.ts` — awards/certifications
- `data/now.ts` — current focus

Replace `/public/resume.pdf` with your actual resume PDF.

## Project images

Put project screenshots in `public/images/projects/`, then add the image path to the relevant project object and update the project visual component when you're ready to render them.

## Futuristic interaction

- Dark/light theme with persistence
- System-aware first visit
- Scroll progress indicator
- Command palette with `Ctrl/Cmd + K`
- Responsive mobile navigation
- Reduced-motion support
- Technical telemetry and status UI

## Important

Replace all placeholder links, email addresses, education, experience, achievements, and project content before deployment.

## Production checklist

- Add your real domain in `app/layout.tsx` metadata.
- Add real profile/project images.
- Add your actual resume.
- Replace social links.
- Add real project live URLs and repositories.
- Run `npm run build` before deployment.
# nafizur-portfolio
