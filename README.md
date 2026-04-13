# Tharaniesh Portfolio

This project is a single-page personal portfolio built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and React Three Fiber. It presents Tharaniesh J as a Game Designer and Junior Game Data Analyst through a visually styled landing page with motion effects, section-based navigation, and an interactive hero background.

## Project Description

The portfolio is designed to showcase a mix of game design, storytelling, and data-oriented skills in a modern web interface. The site follows a cyber-inspired visual style and is structured as a scrollable one-page experience with clearly separated sections for introduction, background, skills, projects, and contact details.

Its purpose is to act as a personal brand site and portfolio entry point where visitors can:

- understand Tharaniesh's role and focus area
- review core skill categories
- see a featured project
- access contact and social links

## What It Is Performing Right Now

At the moment, the application is performing as a polished frontend portfolio experience with the following behavior:

- shows a short preloader animation when the app opens
- displays a fixed navigation bar with anchor links to each section
- renders an animated hero section with a typing-text effect
- includes a Three.js background with floating geometric objects and particle effects
- tracks page scroll with a progress bar at the top
- shows a custom animated cursor on large screens
- lazy-loads the About, Skills, Projects, and Contact sections
- reveals sections with Framer Motion scroll animations
- presents skill cards for game design and data/analytics
- highlights one featured project: `Genshin Impact Team Builder with AI Integration`
- provides direct contact links for email, LinkedIn, and GitHub
- validates the contact form on the frontend

## Current Limitations

These parts are not fully connected yet:

- the contact form does not submit data to a backend or email service
- the success message only confirms frontend validation
- the GitHub button inside the Projects section currently has an empty link
- the portfolio currently features one main project card rather than a larger project gallery

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Three.js
- React Three Fiber
- Drei

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build the production version:

```bash
npm run build
```

4. Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
portfolio/
|-- public/
|   `-- favicon.svg
|-- src/
|   |-- components/
|   |   |-- AnimatedCursor.tsx
|   |   |-- NavBar.tsx
|   |   |-- Preloader.tsx
|   |   |-- ScrollProgress.tsx
|   |   `-- SectionHeading.tsx
|   |-- hooks/
|   |   |-- useMouseParallax.ts
|   |   `-- useTypingText.ts
|   |-- sections/
|   |   |-- AboutSection.tsx
|   |   |-- ContactSection.tsx
|   |   |-- HeroSection.tsx
|   |   |-- ProjectsSection.tsx
|   |   `-- SkillsSection.tsx
|   |-- styles/
|   |   `-- index.css
|   |-- three/
|   |   `-- ThreeBackground.tsx
|   |-- App.tsx
|   |-- main.tsx
|   `-- vite-env.d.ts
|-- index.html
|-- package.json
|-- tailwind.config.js
|-- tsconfig.json
`-- vite.config.ts
```

## Deployment

The project is configured for deployment to GitHub Pages using:

```bash
npm run deploy
```

The configured homepage is:

`https://Tharaniesh.github.io/PortFolio`
