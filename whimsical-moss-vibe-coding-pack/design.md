# Whimsical Moss — Design System

**Status:** Stage 1 proposal. Validate the palette, logo, and voice with the owner before launch.

## 1. Creative direction

### Concept
**A little world of handmade things.**

The website should feel like stepping into an artist's personal sketchbook: a warm paper canvas, genuine handmade work, expressive editorial typography, botanical doodles, small handwritten notes, and subtle motion.

The design should balance:
1. **Editorial clarity** — readable hierarchy, purposeful spacing, consistent layout.
2. **Handmade personality** — paper, ink, original doodles, irregular image frames, and personal details.
3. **Quiet delight** — restrained animations and tactile interactions that reward exploration.

Do not make the entire site crooked, crowded, childish, or overly decorated. The underlying grid should remain deliberate.

### Brand attributes
- Whimsical, not childish
- Handmade, not messy
- Warm, not overly sentimental
- Artistic, not confusing
- Premium-feeling, not luxury-corporate
- Local and personal, without relying on generic Kashmir clichés

## 2. Proposed colour palette

| Token | Hex | Use |
|---|---|---|
| `paper` | `#F8F3E9` | Main page background |
| `paper-deep` | `#EFE6D7` | Alternate sections, card surfaces |
| `sage` | `#DCE8D5` | Soft accents and selected backgrounds |
| `rose` | `#CFA9BA` | Occasional decorative accent |
| `honey` | `#E8C67A` | Highlights and small details |
| `forest` | `#343D31` | Main text, dark surfaces, buttons |
| `ink` | `#24231F` | Body text where extra contrast is needed |
| `white` | `#FFFEFB` | Image frames and contrast surfaces |

### Colour rules
- Use `forest` or `ink` for most text; verify contrast for all text/background pairs.
- Keep rose and honey as accents, not body-text colours.
- Artwork photography should provide most of the colour variation.
- Avoid gradients as a default. Use them only when they are part of a specific, intentional visual.
- Do not recolour real artwork to force it into the palette.

## 3. Typography

Use no more than three type roles.

- **Display serif:** `DM Serif Display` or `Cormorant Garamond` for expressive headlines.
- **Handwritten accent:** `Caveat` for short notes, labels, annotations, and a small signature-style flourish.
- **Body sans-serif:** `DM Sans` for paragraphs, navigation, buttons, and utility text.

### Typography rules
- Handwritten type is an accent, not a body font.
- Avoid long all-caps paragraphs.
- Use comfortable line-height and readable sizes on mobile.
- If the owner can provide real handwritten lettering or calligraphy, prefer that for signature brand moments over a generic script font.
- Load fonts efficiently and provide fallbacks.

## 4. Layout and composition

- Mobile-first and responsive at all widths.
- Use a consistent spacing scale and a clear grid.
- Use generous whitespace to let art breathe.
- Create an editorial collage through selected overlaps, varied image ratios, small rotations, and annotations.
- Keep decorative elements out of reading paths and tap targets.
- Use consistent border radius and border styles; avoid applying random effects to every card.
- Limit each section to one main visual idea.
- Use real work as the primary visual content.

### Suggested section order
1. Header / navigation
2. Hero
3. Selected creations / craft categories
4. Custom-order process
5. Meet the maker
6. Behind the scenes
7. Final custom-order CTA
8. Footer

## 5. Imagery and art direction

### Required imagery
- Hero-quality image of real work
- Individual examples for pipe-cleaner crafts, calligraphy, paintings, and other work
- Process photos showing hands/materials
- Founder/artist portrait or working portrait, if the owner is comfortable
- Detail shots that show texture and craftsmanship

### Photography style
- Natural window light where possible
- Warm neutral surfaces, paper, wood, linen, or suitable material textures
- Mix of clean product portraits, close-ups, process shots, and contextual/lifestyle shots
- Keep product colours and details accurate

### Asset rules
- Do not use generated or stock art as if it were the brand's real work.
- Reference images can guide art direction only.
- Do not invent customer testimonials, order counts, awards, delivery claims, or founder history.
- Obtain permission for any customer photos or quotes.

## 6. Handmade visual motifs

Use a small, coherent set of motifs:
- One recurring hand-drawn flower or curved stem
- Small stars, dots, arrows, or leaf doodles
- Paper edges or tape-like details in selected places
- Genuine handwritten notes
- Optional subtle mountain-line motif only if it fits the owner's story

Avoid scattering shikaras, chinar leaves, saffron, and other regional motifs without a meaningful connection to the actual work or maker's story.

Prefer original SVGs or cleaned transparent PNGs made from the artist's own drawings. SVGs should be decorative and not obstruct assistive technology.

## 7. Motion and interaction

### Principles
- Motion supports comprehension or delight; it must not delay access to content.
- Most interactions should use CSS transitions.
- Use SVG path animation for a small number of hand-drawn illustrations.
- Add GSAP/ScrollTrigger only when a clear, specific timeline needs it.
- Keep movement subtle and short.
- Never make essential content visible only after an animation finishes.
- Avoid scroll hijacking, forced horizontal scrolling, excessive parallax, cursor replacement, and long intro loaders.

### Approved interaction ideas
- Hero headline reveals in small groups.
- A flower outline draws on once.
- Gallery images reveal as they enter the viewport.
- Hover/focus gently lifts a card or reveals a detail image.
- A decorative arrow or note appears on interactive elements.
- A custom-order selection updates the prefilled WhatsApp message.

### Reduced motion
Respect `prefers-reduced-motion`. Disable or simplify nonessential movement when requested. Ensure content is visible without animation.

### Mobile
- Do not depend on hover to reveal content.
- Avoid large parallax effects.
- Make buttons and links comfortably tappable.
- Test on low-powered mobile devices.

## 8. Conversion and UX

Primary conversion: start a custom-order conversation through WhatsApp.

Secondary conversion: visit Instagram to see more work.

- Put a clear CTA in the hero and near the bottom.
- Explain the custom-order process in plain language.
- Do not imply that an enquiry confirms an order.
- If prices, lead times, delivery locations, or payment terms are unknown, omit them or label them as to-be-confirmed. Do not invent them.
- The WhatsApp link must be configured with the owner's actual number before launch.
- Instagram must link to the verified official account.

## 9. Accessibility and performance

- Semantic headings in a logical order.
- Keyboard-accessible navigation and controls.
- Visible focus states.
- Descriptive alt text for meaningful artwork; empty alt text for purely decorative images.
- Sufficient contrast.
- Reduced-motion support.
- Responsive, optimised images with width/height or aspect-ratio reservations.
- Lazy-load below-the-fold images; prioritise the hero image.
- Avoid loading large video files in the initial viewport.
- Keep dependencies minimal and check Core Web Vitals after deployment.

## 10. Design acceptance checklist

- [ ] The page feels handmade and art-led without becoming visually chaotic.
- [ ] Real artwork is the focus.
- [ ] Typography is expressive but readable.
- [ ] The same visual motifs recur consistently.
- [ ] Mobile layout is intentionally designed, not just squeezed down.
- [ ] Main CTA is obvious and works.
- [ ] Motion respects reduced-motion settings.
- [ ] All text and links remain usable without animation.
- [ ] No invented facts or fake social proof appear.
