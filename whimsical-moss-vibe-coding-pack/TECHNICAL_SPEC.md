# Technical Specification — Stage 1

## 1. Recommended stack

- Next.js with App Router
- TypeScript
- Tailwind CSS or CSS Modules
- Next/Image for local/remote image optimisation where appropriate
- CSS transitions and keyframes for simple interactions
- Inline/local SVG for decorative illustrations
- GSAP + ScrollTrigger only if the implementation genuinely needs sequenced scroll animation
- Vercel for deployment

Use stable package versions compatible with the current project environment. Do not upgrade or replace dependencies blindly if a repository already exists.

## 2. Architecture principles

- Static-first: the landing page should not require a database or server-side API.
- Server components by default; use client components only for interactions requiring browser state or animation.
- Keep all brand links and content in a central configuration/data module.
- Keep components small and purposeful.
- Prefer CSS over JavaScript for simple movement.
- Avoid unnecessary third-party scripts.
- Never expose private credentials in client-side code.

## 3. Suggested structure

```text
whimsical-moss/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── creations/
│   │   ├── process/
│   │   └── maker/
│   ├── illustrations/
│   ├── fonts/
│   └── favicon/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── icon.png
│   │   └── opengraph-image.png
│   ├── components/
│   │   ├── site-header.tsx
│   │   ├── hero-section.tsx
│   │   ├── creations-gallery.tsx
│   │   ├── custom-order-section.tsx
│   │   ├── maker-section.tsx
│   │   ├── process-section.tsx
│   │   ├── final-cta.tsx
│   │   ├── site-footer.tsx
│   │   ├── hand-drawn-flower.tsx
│   │   └── reveal.tsx
│   ├── data/
│   │   └── site-content.ts
│   └── lib/
│       ├── site-config.ts
│       └── whatsapp.ts
├── .env.example
├── .gitignore
├── README.md
├── design.md
├── PRD_STAGE_1.md
└── package.json
```

This is a suggested structure, not a requirement to create every component as a separate file. Keep the implementation proportionate.

## 4. Central configuration

Store the following in one typed configuration module:
- Brand name
- Site URL (when known)
- Instagram URL
- WhatsApp number in international digits-only format
- WhatsApp message template
- Social sharing image
- Optional analytics setting, disabled until approved

Never guess the actual phone number or account URLs.

For WhatsApp, construct a `https://wa.me/<number>?text=<encoded-message>` link from verified configuration and encode the message correctly.

## 5. Content model

Use typed local data for the gallery:
- `id`
- `title`
- `category`
- `description`
- `image`
- `alt`
- optional `featured`
- optional `detailImage`

Use real, owner-approved content. If the content is incomplete, use an explicit development placeholder and prevent it from being mistaken for production artwork.

## 6. Image handling

- Store optimised local assets in `public/images/` unless there is a clear reason to use a remote image host.
- Use WebP/AVIF where supported by the build pipeline.
- Provide width/height or a stable aspect ratio to prevent layout shift.
- Prioritise the hero image; lazy-load images below the fold.
- Use descriptive alt text for meaningful images.
- Use empty alt text for purely decorative illustrations.
- Do not use a large background image for content that should be a responsive `<Image>`.
- Do not use remote image URLs without configuring and verifying the source.

## 7. Motion implementation

- Use CSS for hover states, tiny translations/rotations, and basic entrance transitions.
- For SVG draw-on effects, animate stroke-dash properties or use a small dedicated component.
- For complex scroll sequences, use GSAP only after documenting the specific reason.
- Ensure all content remains visible if animation scripts fail.
- Respect `prefers-reduced-motion`.
- Avoid layout-affecting animations where transforms/opacity can do the job.
- Clean up animation contexts and listeners on component unmount.

## 8. SEO

Set:
- A descriptive title, e.g. `Whimsical Moss — Handmade Creations & Custom Art`
- A concise meta description based on the owner's confirmed offerings
- Canonical URL after domain is confirmed
- Open Graph title, description, and image
- Favicon
- Semantic heading hierarchy
- Meaningful link text
- Image alt text

Do not add ratings, reviews, prices, availability, address, or structured data unless accurate and approved.

## 9. Performance targets

Use Core Web Vitals as a quality check rather than promising a score in advance.
- Optimise image payloads.
- Avoid loading video or heavy animation code in the initial render.
- Minimise client-side JavaScript.
- Avoid unnecessary font weights.
- Test the deployed site on a real mobile connection/device if possible.
- Check for layout shift and blocking assets.

## 10. Environment variables

Stage 1 should not require secrets. Public brand configuration can live in a normal config file. If environment variables are used, expose only explicitly public values with `NEXT_PUBLIC_` and never place secrets in them.

Do not commit `.env.local`.

## 11. Definition of done

- TypeScript checks pass.
- Linting/build pass.
- All links verified.
- Responsive layouts checked.
- Keyboard/focus/reduced-motion checks completed.
- Images optimised.
- No development placeholders remain in production.
- Owner-approved content is used.
