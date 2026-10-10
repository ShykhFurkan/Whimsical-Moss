# Implementation Plan — AI/Vibe Coding Workflow

## Phase 0 — Confirm inputs

Before polishing the page, collect:
- Confirmed brand name and logo/wordmark
- Instagram profile URL
- WhatsApp number in international format
- Real photos of creations
- Approved short maker introduction
- Preferred domain, if available
- Any pricing, delivery, turnaround, or ordering details the owner wants public

Record unresolved items in `OPEN_DECISIONS.md`.

## Phase 1 — Scaffold and baseline

1. Inspect the existing repository before changing files.
2. If no project exists, create a Next.js App Router project with TypeScript and the chosen styling setup.
3. Set global fonts, colour tokens, spacing, and responsive containers.
4. Build the semantic page structure with placeholder image slots clearly marked as development placeholders.
5. Make all sections readable and functional before adding animation.

**Exit criteria:** the page builds, has all required sections, and works at mobile and desktop widths.

## Phase 2 — Art direction and responsive layout

1. Implement the hero.
2. Build the creations collage/gallery.
3. Build the custom-order process.
4. Build the maker and process sections.
5. Build final CTA and footer.
6. Review the page at 360px, 390px, tablet, laptop, and wide desktop widths.
7. Replace placeholders with owner-approved real assets as soon as available.

**Exit criteria:** coherent visual hierarchy, no overflow, primary CTA visible and understandable.

## Phase 3 — Functional links and content

1. Add verified Instagram URL.
2. Add verified WhatsApp number and prefilled message.
3. Ensure message is URL-encoded correctly.
4. Add metadata and social sharing information.
5. Verify all anchor navigation and external links.

**Exit criteria:** user can move through the site and begin an enquiry without errors.

## Phase 4 — Motion and handmade details

1. Add one or two hand-drawn SVG accents.
2. Add subtle hero reveal.
3. Add gallery reveal/hover states.
4. Add only the motion that improves the experience.
5. Implement reduced-motion behaviour.
6. Verify content remains visible if animation does not run.

**Exit criteria:** animation feels deliberate, not distracting; mobile performance remains acceptable.

## Phase 5 — QA and launch

1. Run type checks, lint, and production build.
2. Test keyboard navigation and visible focus.
3. Test reduced-motion preference.
4. Test every link and CTA on desktop and mobile.
5. Check image loading, layout shift, and performance.
6. Remove development placeholders and console logs.
7. Verify metadata, favicon, and social preview.
8. Obtain owner approval for all content and imagery.
9. Deploy to Vercel and verify the production URL.

## AI agent operating rules

- Read `design.md`, `PRD_STAGE_1.md`, and `TECHNICAL_SPEC.md` before coding.
- Work in small, testable increments.
- Inspect the existing repository before making structural changes.
- Do not replace working code without explaining why.
- Do not invent brand details, product facts, URLs, or phone numbers.
- Keep Stage 1 static-first and avoid unnecessary backend services.
- Do not add packages for effects that CSS can handle.
- After each milestone, report files changed, checks run, issues remaining, and next step.
- If a decision is genuinely blocking, ask one concise question. Otherwise use a clearly documented, reversible assumption.
