# Whimsical Moss — Website Project Pack

This folder contains the product and design documents for Stage 1 of the Whimsical Moss website.

## Project goal

Create a distinctive, mobile-first landing page for a small handmade-art brand that creates pipe-cleaner crafts, calligraphy, paintings, and custom handmade pieces. The site should feel like a contemporary artist's sketchbook: warm, whimsical, tactile, polished, and easy to use.

The primary conversion is a custom-order enquiry through WhatsApp. Instagram is the secondary discovery channel.

## Files

- `design.md` — visual identity, layout principles, typography, colour, motion, accessibility.
- `PRD_STAGE_1.md` — Stage 1 requirements, user stories, scope, acceptance criteria.
- `TECHNICAL_SPEC.md` — recommended stack, architecture, component guidance, SEO and performance.
- `CONTENT_PLAN.md` — page sections, draft copy, content model, and content that must be confirmed.
- `IMPLEMENTATION_PLAN.md` — practical build order and milestones for an AI coding workflow.
- `VIBE_CODING_PROMPT.md` — main project prompt to paste into your coding agent.
- `ASSET_CHECKLIST.md` — photography, brand assets, and content needed before launch.
- `QA_CHECKLIST.md` — launch and acceptance checks.
- `OPEN_DECISIONS.md` — details to confirm with the owner before treating assumptions as facts.
- `.env.example` — placeholder for future environment variables. Stage 1 should not need secrets.

## Recommended workflow

1. Review `OPEN_DECISIONS.md` with the brand owner.
2. Collect real artwork photography and brand assets using `ASSET_CHECKLIST.md`.
3. Give the coding agent `VIBE_CODING_PROMPT.md`, `design.md`, `PRD_STAGE_1.md`, and `TECHNICAL_SPEC.md`.
4. Build the static responsive page first; add motion after layout and content are stable.
5. Use `QA_CHECKLIST.md` before launch.

## Important scope boundary

Stage 1 is a showcase and enquiry website, not a full e-commerce platform. Do not add checkout, customer accounts, inventory management, an admin dashboard, or a database unless the scope is explicitly changed.

## Known assumptions

- Brand name: **Whimsical Moss**.
- Main CTA: WhatsApp custom-order enquiry.
- Secondary CTA: Instagram.
- Proposed stack: Next.js App Router, TypeScript, Tailwind CSS, Vercel.
- Use CSS/SVG for simple motion. Add GSAP only if a specific interaction requires it.
- Real product photos must replace all reference imagery before launch.
