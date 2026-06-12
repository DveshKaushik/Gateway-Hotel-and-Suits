# Gateway Hotel & Suites

## Features

- Responsive single-page layout with smooth section navigation
- Hero, about, rooms & suites, photo gallery, local attractions, and contact sections
- Filterable photo gallery (32 hotel images)
- Mobile-friendly navigation with slide-out menu
- Optimized hero image via `next/image`
- SEO metadata in root layout

## Project structure

```
src/
  app/
    layout.js       # Root layout, fonts, metadata
    page.js         # Home page
    globals.css     # Global styles
  components/       # UI sections (Header, Hero, Gallery, etc.)
  data/
    content.js      # Hotel copy, contact info, attractions
    images.js       # Image paths and gallery data
public/
  images/           # Hotel photos (hotel-01.png & hotel-32.png)
  favicon.svg
```

## Getting started

### Prerequisites

- Node.js 18.18 or later
- npm

### Install dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Editing content

Most site text and contact details live in **`src/data/content.js`**.

| What to change        | Where                          |
|-----------------------|--------------------------------|
| Hotel name, phone, email, map link | `src/data/content.js` ’ `hotel` |
| About section copy    | `src/data/content.js` ’ `intro` |
| Room descriptions     | `src/data/content.js` ’ `accommodations` |
| Local attractions     | `src/data/content.js` ’ `attractions` |
| Page title & SEO      | `src/app/layout.js` ’ `metadata` |

### Images

- Add or replace files in **`public/images/`**
- Update paths in **`src/data/images.js`**
- Featured images (hero, rooms, about) are set in the `featured` object in the same file

## Deployment

Works on any platform that supports Next.js, for example:

- **Vercel**  connect the repo and deploy (recommended for Next.js)
- **Node server**  run `npm run build` then `npm run start`

For a fully static export (no Node server), add `output: 'export'` to `next.config.mjs`.

## Browser extensions

If you see a hydration warning in development mentioning extra attributes on `<body>` (e.g. `data-gr-ext-installed`), it is usually caused by browser extensions such as Grammarly. The root layout uses `suppressHydrationWarning` on `<html>` and `<body>` to handle this.





## Deployed On Firebase

https://gateway-hotel-and-suits.web.app/