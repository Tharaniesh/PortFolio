# Tharaniesh Portfolio

A premium single-page portfolio built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and React Three Fiber. The site is designed to present selected work, design capability, interactive frontend craft, and Blender-based 3D preview work in a polished dark UI.

## Overview

This portfolio is structured as a modern scroll-based experience with clear sections for:

- hero and introduction
- about and creative direction
- skills and capability groups
- selected projects
- interactive 3D preview
- contact and collaboration

The current visual direction focuses on clean spacing, smooth motion, premium glass-style surfaces, and interactive presentation without clutter.

## Current Features

- React + TypeScript single-page portfolio architecture
- Vite-based development and production build setup
- Tailwind CSS styling with a custom premium dark aesthetic
- Framer Motion reveal and entrance animations
- React Three Fiber hero scene
- dedicated 3D preview section for Blender-exported `.glb` models
- orbit controls with rotate, zoom, and pan support in the 3D viewer
- loading, retry, and fallback states for model preview
- playful “Show Texture” easter egg mode with recovery button
- responsive layout for desktop and mobile
- section navigation with anchor-based scrolling
- animated cursor and scroll progress feedback

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

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview the production build

```bash
npm run preview
```

## Deployment

The project is configured for GitHub Pages deployment.

```bash
npm run deploy
```

Configured homepage:

`https://Tharaniesh.github.io/PortFolio`

## Project Structure

```text
portfolio/
|-- public/
|-- src/
|   |-- assets/
|   |   `-- blender/
|   |-- components/
|   |-- data/
|   |-- hooks/
|   |-- sections/
|   |-- styles/
|   |-- three/
|   |-- App.tsx
|   |-- main.tsx
|   `-- vite-env.d.ts
|-- index.html
|-- package.json
|-- tailwind.config.js
|-- tsconfig.json
`-- vite.config.ts
```

## Notes

- The 3D preview currently uses a local Blender-exported `.glb` file from `src/assets/blender`.
- Large 3D assets can increase load time, so model optimization is recommended for production-quality performance.
- The portfolio is intended as a presentation site and can be extended with backend-powered contact handling later if needed.

## Copyright

Copyright © Tharaniesh J. All rights reserved.

This portfolio, its design, source content, branding, written copy, and visual presentation may not be reused, redistributed, or reproduced without permission.
