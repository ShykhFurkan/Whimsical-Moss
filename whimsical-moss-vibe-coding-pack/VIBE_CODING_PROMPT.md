# Main Vibe-Coding Prompt — Whimsical Moss

You are a senior product designer and frontend engineer. Build Stage 1 of the Whimsical Moss website using the project documents in this folder.

## First action

Before writing code, inspect the existing repository and read:
- `design.md`
- `PRD_STAGE_1.md`
- `TECHNICAL_SPEC.md`
- `CONTENT_PLAN.md`
- `OPEN_DECISIONS.md`

Then summarise the implementation plan briefly and proceed in small, verifiable stages. Do not stop after producing a plan unless an essential missing input blocks the build.

## Product

Whimsical Moss is a small handmade-art brand making pipe-cleaner crafts, calligraphy, paintings, and other handmade pieces. It also accepts custom ideas and commissions.

Build a beautiful, responsive, mobile-first landing page that showcases real creations and makes it easy for a visitor to start a custom-order conversation through WhatsApp. Instagram is the secondary discovery channel.

## Design direction

The site should feel like a contemporary artist's sketchbook: warm paper tones, botanical doodles, expressive serif headlines, small handwritten annotations, carefully art-directed photography, and subtle motion.

Use the palette and design rules in `design.md`. The page must remain polished and readable, not cluttered or childish. Use a consistent layout grid beneath the handmade visual details.

## Required page sections

1. Header/navigation
2. Hero with a clear headline, real artwork image, primary custom-order CTA, and secondary gallery/Instagram CTA
3. Creations gallery with categories for pipe-cleaner crafts, calligraphy, paintings, and custom creations, populated only with approved content
4. Custom-order process
5. Maker introduction
6. Behind-the-scenes process imagery
7. Final CTA
8. Footer

## Functional requirements

- WhatsApp CTA opens the verified number with a useful prefilled message.
- Instagram links to the verified official account.
- Keep URLs and brand settings centralised in typed configuration.
- Use semantic HTML, accessible navigation, visible focus states, and descriptive alt text.
- Respect `prefers-reduced-motion`.
- Keep all content visible if animations fail.
- Add title, meta description, Open Graph metadata, favicon, and canonical URL only when the real domain is known.
- Optimise image loading and prioritise the hero image.
- Keep the site static-first; no database, login, admin panel, cart, checkout, or payment gateway in Stage 1.

## Implementation preferences

- Next.js App Router and TypeScript.
- Tailwind CSS or the repository's existing styling system.
- CSS for basic motion, SVG for drawn details.
- GSAP/ScrollTrigger only for specific interactions that need it.
- Use Next/Image or equivalent responsive image handling where appropriate.
- Avoid unnecessary dependencies and excessive client components.
- Keep components and content maintainable without overengineering.

## Content and asset integrity

Never invent the maker's biography, prices, customer testimonials, awards, sales numbers, delivery policy, lead times, phone number, or social links.

If required content is missing:
- Use a clear development placeholder in the code.
- Keep placeholders visually identifiable during development.
- Record the missing item in `OPEN_DECISIONS.md`.
- Never deploy placeholders as real artwork or factual content.

Reference imagery is for art direction only. Real brand work must come from the owner.

## Quality gates

After each major phase:
1. Run the available type checks, lint, and build.
2. Review responsive behaviour.
3. Check links and console errors.
4. Check keyboard and reduced-motion behaviour.
5. Report what changed and what remains.

Build in this order:
1. Project inspection and baseline
2. Responsive structure
3. Real content and CTA wiring
4. Visual polish
5. Motion
6. SEO, accessibility, performance, and launch QA

The result should be production-minded code, not just a static visual mockup.
