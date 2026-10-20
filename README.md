# Harmoniq Website

The official landing page for **Harmoniq**, an Android music player application.

Built with React, TypeScript, Vite, and Tailwind CSS.

## Quick Start

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview

# Type-check (without emitting)
npm run lint
```

The dev server runs at `http://localhost:5173` by default.

## Project Structure

```
harmoniq-website/
├── public/
│   ├── favicon.svg              ← Replace with real favicon
│   ├── logo.svg                 ← Replace with real Harmoniq logo
│   └── images/
│       └── screenshots/         ← Place real app screenshots here
│           ├── placeholder-1..4.svg
│           └── README.md
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           ← Navigation bar with mobile menu
│   │   ├── Footer.tsx           ← Footer with links and copyright
│   │   ├── SectionHeading.tsx   ← Reusable section title block
│   │   ├── FeatureCard.tsx      ← Feature grid card
│   │   ├── DownloadButton.tsx   ← Download CTA (disabled until configured)
│   │   ├── FAQItem.tsx           ← Accessible accordion item
│   │   └── ScreenshotGallery.tsx← Responsive screenshot grid
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── PreviewSection.tsx
│   │   ├── DownloadSection.tsx
│   │   └── FAQSection.tsx
│   ├── data/
│   │   ├── appConfig.ts         ← Central config (version, APK URL, etc.)
│   │   ├── features.ts          ← Feature card content
│   │   └── faq.ts               ← FAQ questions and answers
│   ├── styles/
│   │   └── globals.css          ← Tailwind + design tokens
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
├── .env.example
└── README.md
```

## Design System

| Token              | Value                  |
|--------------------|------------------------|
| Background (base)  | `#0A0A0C` (near-black) |
| Surface            | `#141418`              |
| Elevated           | `#1C1C22`              |
| Accent (primary)   | `#22D3EE` (cyan)       |
| Accent (secondary) | `#3B82F6` (blue)       |
| Text (primary)     | `#F1F5F9` (soft white) |
| Text (secondary)   | `#94A3B8` (gray)       |
| Border             | `rgba(148,163,184,0.12)` |

All tokens are defined as CSS custom properties in `src/styles/globals.css` and
mapped to Tailwind colors in `tailwind.config.js`.

## Configuration

All website-wide configuration lives in `src/data/appConfig.ts`.

Environment variables can be set in a `.env` file (see `.env.example`):

| Variable                   | Purpose                              |
|----------------------------|--------------------------------------|
| `VITE_APK_DOWNLOAD_URL`    | Direct URL to the APK file           |
| `VITE_PRIVACY_POLICY_URL`  | Link to the privacy policy page      |
| `VITE_CONTACT_EMAIL`       | Contact email address                |

## How to Update Key Assets

### Replace the logo

1. Replace `public/logo.svg` with the actual Harmoniq logo.
2. Replace `public/favicon.svg` with the matching favicon.
3. If the logo dimensions change, update the `width`/`height` in `Navbar.tsx`
   and `Footer.tsx` (currently `28×28`).

### Add real screenshots

1. Place PNG/WebP files in `public/images/screenshots/`.
2. Open `src/data/appConfig.ts` and update the `screenshots` array with the
   correct file paths and descriptive alt text.
3. Delete or leave the placeholder SVGs — they are no longer referenced once
   the array is updated.

### Configure the APK download URL

1. Set `VITE_APK_DOWNLOAD_URL` in your `.env` file to the public URL of the
   hosted APK.
2. The download button will automatically become active.
3. Alternatively, hardcode `apkDownloadUrl` in `src/data/appConfig.ts`.

### Update release information

Edit `src/data/appConfig.ts`:
- `version` — e.g. `"1.0.0"`
- `apkSize` — e.g. `"24 MB"`
- `minAndroid` — e.g. `"Android 8.0 (Oreo) or higher"`
- `releaseDate` — e.g. `"2025-01-15"`

### Add privacy policy and contact

- Set `VITE_PRIVACY_POLICY_URL` in `.env` or hardcode `privacyPolicyUrl` in
  `appConfig.ts`.
- Set `VITE_CONTACT_EMAIL` in `.env` or hardcode `contactEmail`.
- Until set, the footer shows these as inactive (muted) text.

### Update feature descriptions

Edit `src/data/features.ts`. Update `title` and `description` fields to match
verified application capabilities.

### Update FAQ content

Edit `src/data/faq.ts`. Add, remove, or modify questions and answers as
needed.

## Implemented Features

- Responsive layout (mobile-first, tested breakpoints: 375px, 768px, 1024px, 1280px)
- Sticky navigation with mobile hamburger menu
- Keyboard-accessible FAQ accordion with ARIA attributes
- Disabled download button with clear placeholder state
- Centralized configuration for all release and contact info
- Design token system (CSS variables + Tailwind mapping)
- Reduced-motion support via `prefers-reduced-motion`
- Lazy-loaded screenshot images
- Semantic HTML structure
- Visible focus indicators

## Remaining Tasks for Next Phase

1. Replace placeholder logo with the real Harmoniq logo
2. Replace placeholder screenshots with actual app screenshots
3. Host the APK and configure the download URL
4. Fill in release information (version, size, Android version, date)
5. Create and publish the privacy policy
6. Add real contact information
7. Verify and update feature descriptions to match final app capabilities
8. Add Open Graph and Twitter Card meta tags for social sharing
9. Set up analytics (optional)
10. Configure deployment (static hosting, CDN)
