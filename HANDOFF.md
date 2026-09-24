# No Norms Media Agent Handoff

## Project

Next.js 16 single-page artist management website for No Norms Media.

Working directory: `no-norms-media`

## Current State

- Website redesign is complete and pushed to GitHub.
- Remote: `https://github.com/adityasingh3738/no-norms-media.git`
- Branch: `main`
- Latest published commit: `1e1cd84` (`Redesign No Norms Media artist website`)
- Production build passes with `npm run build`.

## Visual Direction

The site uses a dark editorial theme:

- Background: near-black / charcoal
- Primary accent: cosmic orange
- Secondary accent: suede green
- Warm off-white text
- Dark hero treatment with animated artist-photo filmstrips
- Syne display font and DM Sans body font

Do not restore the previous light paper theme unless explicitly requested.

## Main Features

- Hero background continuously loops all ten artist photos in two opposing filmstrip rows.
- Artist cards are keyboard-accessible clickable containers.
- Clicking an artist opens a full-description modal rendered through a portal into `document.body`.
- Modal closes by clicking outside, clicking the close button, or pressing Escape.
- Native cursor is restored inside the modal because the site uses a custom cursor globally.
- Artist roster order is:
  1. Parv
  2. SickLot
  3. Dflacko
  4. Dhadkan
  5. SarpDansh
  6. 2Raw
  7. Big Scratch
  8. Y2G
  9. Navyug
  10. HighBorn
- Dhruv Sthetick has been removed from the roster, hero, and `public/` assets.
- Contact destination email is `asmit.nonorms@gmail.com`.

## Important Files

- `src/components/Hero.tsx`: animated photo filmstrip and hero messaging
- `src/components/ArtistRoster.tsx`: artist data, ordering, cards, modal
- `src/components/About.tsx`: company positioning and roster copy
- `src/components/Contact.tsx`: inquiry form and destination email
- `src/app/globals.css`: theme tokens, dark surfaces, filmstrip animation, custom cursor rules
- `src/components/Navbar.tsx`: dark logo/navigation header

## Artist Assets

Artist images are stored in `public/`:

- `parv.jpg`
- `sicklot.jpg`
- `dflacko.jpg`
- `dhadkan.jpg`
- `sarpdansh.jpg`
- `2raw.jpg`
- `bigscratch.jpg`
- `y2g.jpg`
- `navyug.jpg`
- `highborn.jpg`

## Commands

Run commands from `no-norms-media`:

```bash
npm run dev
npm run build
npm run lint
```

The development server normally uses `http://localhost:3000`; if that port is occupied, Next.js selects another available port.

## Known Validation Notes

`npm run build` passes. ESLint may still report older issues unrelated to the visual redesign, including unescaped apostrophes in JSX, the existing mount-state pattern in `PageLoader` and `CustomCursor`, and `<img>` optimization warnings.

## Working Rules

- Preserve existing GSAP interactions when changing layout or theme.
- Keep artist descriptions and roster ordering synchronized between `ArtistRoster.tsx` and `About.tsx`.
- Add new artist photos to both the roster data and the hero filmstrip if adding artists.
- Do not commit unless explicitly requested by the user.
