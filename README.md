# FACTIONS — Tennis Archetype Selector

**AI 201: Creative Computing with AI**
SCAD Spring 2026 — Professor Tim Lindsey
Design Intent by Firas Benchouikha

---

## What It Is

An interactive single-page experience where users choose between four tennis player archetypes. Each archetype is represented as a full-height vertical panel that expands on hover, revealing a cinematic player portrait, performance stats, and player profile.

**Live site:** https://benchouikhafiras059-maker.github.io/vite-app-/

---

## The Four Archetypes

| # | Archetype | Player | Identity |
|---|-----------|--------|----------|
| 01 | BASELINER | Novak Djokovic | Control · Precision |
| 02 | AGGRESSOR | Carlos Alcaraz | Power · Dominance |
| 03 | DEFENDER | Andy Murray | Speed · Stamina |
| 04 | PLAYMAKER | Nick Kyrgios | Vision · Creativity |

---

## Features

- Sequential intro animation — panels reveal left to right on page load
- Hover to expand any panel — grid animates with CSS `grid-template-columns`
- Cinematic player images with layered gradient overlay
- Animated stat bars with countUp effect (CONTROL, POWER, SPEED, etc.)
- Mouse parallax on glow and faction name
- Player identity: name, label, archetype description, key achievements
- "Archetype Locked" confirmation overlay with entrance animation
- Shine sweep after all panels load — the "activated" moment
- Vertical label alignment across all collapsed panels

---

## Built With

- **Vite 5** — vanilla JS, no framework
- **CSS Grid** — animated column expansion
- **CSS custom properties** — per-faction color theming
- **Google Fonts** — Barlow Condensed + Barlow
- **GitHub Actions** — auto-deploy to GitHub Pages on push

---

## Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:5173/vite-app-/`

---

## Deploy

Push to `main` — GitHub Actions handles the build and deploy automatically.
