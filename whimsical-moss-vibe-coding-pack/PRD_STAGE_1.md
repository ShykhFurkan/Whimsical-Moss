# Product Requirements Document — Stage 1

**Product:** Whimsical Moss website  
**Stage:** 1 — Brand landing page and custom-order enquiries  
**Status:** Draft for owner review  
**Primary outcome:** Help visitors discover the brand's handmade work and start a custom-order enquiry.

## 1. Product summary

Whimsical Moss is a small creative brand making pipe-cleaner crafts, calligraphy, paintings, and other handmade creations. The brand also accepts custom ideas and aims to turn customer requests into unique handmade pieces.

Stage 1 is a responsive, visually distinctive landing page that introduces the brand, showcases genuine work, explains custom commissions, and routes interested visitors to WhatsApp or Instagram.

## 2. Problem statement

Potential customers may discover the brand through Instagram but need a clear, cohesive place to:
- Understand the range of work.
- See the quality and personality of the creations.
- Learn how custom orders work.
- Contact the maker with a clear idea or reference.

The website should provide that experience without requiring a complex e-commerce system.

## 3. Goals

1. Present a memorable and coherent brand experience.
2. Showcase real creations with strong imagery and concise descriptions.
3. Explain the custom-order process and set realistic expectations.
4. Make it easy to start an enquiry through WhatsApp.
5. Link visitors to the brand's Instagram account.
6. Work well on mobile, where social traffic is likely to arrive.
7. Provide a maintainable foundation for future additions.

## 4. Non-goals for Stage 1

Do not build the following in this stage:
- Shopping cart or online checkout
- Customer accounts or authentication
- Inventory or order-management dashboard
- Database or CMS
- Payment gateway integration
- Automated order confirmation or order-status tracking
- Delivery/shipping calculation
- Complex search or product filtering
- Customer reviews unless verified real reviews are supplied
- Blog or multi-page content system unless separately approved

A future stage may introduce a CMS, product catalogue, analytics, or e-commerce after validating actual needs.

## 5. Target users

### Primary: potential custom-order customer
A person who discovers the brand through Instagram, a recommendation, or a shared link and wants a handmade gift or personalised creation.

Needs:
- Quickly understand what the artist makes.
- Find examples that match their taste.
- Know how to describe an idea.
- Feel confident contacting the artist.

### Secondary: art and craft admirer
A visitor who wants to explore the work, follow the brand, or share it with someone.

Needs:
- A visually memorable gallery.
- Clear links to Instagram.
- A fast, comfortable mobile experience.

## 6. Core user journeys

### Journey A: browse and enquire
1. Visitor opens the homepage.
2. Understands the brand and sees featured creations.
3. Explores craft categories and/or the custom-order section.
4. Clicks the custom-order CTA.
5. WhatsApp opens with a helpful prefilled message.
6. Visitor edits and sends the message.

### Journey B: discover through social
1. Visitor arrives from Instagram.
2. Recognises the brand and sees more of its work.
3. Opens the official Instagram profile or starts an enquiry.

### Journey C: understand the maker
1. Visitor reads a short, accurate artist introduction.
2. Sees process photos and finished work.
3. Feels confident enough to enquire or follow the brand.

## 7. Functional requirements

### FR-01: Responsive landing page
The page must adapt to mobile, tablet, laptop, and wide desktop screens without horizontal overflow.

### FR-02: Header and navigation
Provide a lightweight header with the brand wordmark/logo and anchor links to relevant sections. Include a clear custom-order CTA where space allows. Mobile navigation must be keyboard accessible.

### FR-03: Hero
The hero must include:
- Brand name or logo
- Clear headline
- Short description of the handmade offering
- Primary custom-order CTA
- Secondary gallery or Instagram CTA
- One real, high-quality artwork image
- Limited decorative artwork or motion

### FR-04: Creations gallery
Showcase real work across the confirmed categories:
- Pipe-cleaner crafts
- Calligraphy
- Painting
- Other/custom creations

Each item may include image, title, short description, and category label. Do not invent specific products if the owner has not supplied them. Use clearly marked placeholders during development.

### FR-05: Custom-order explanation
Explain how a customer can share an idea, agree on details with the artist, and proceed after the artist confirms feasibility, price, and timing.

### FR-06: WhatsApp enquiry
The primary CTA opens WhatsApp with a prefilled message. The phone number must come from a central configuration value and be verified before deployment. Do not hardcode a guessed number.

The enquiry message should invite the visitor to describe:
- Their idea
- Type of craft (optional)
- Preferred colours/style (optional)
- Budget (optional)
- Required date (optional)
- Reference image or sketch (sent manually in WhatsApp)

Opening WhatsApp does not submit an order automatically.

### FR-07: Instagram link
Provide a visible link to the verified official Instagram profile. Do not invent the profile URL.

### FR-08: Maker introduction
Include a short introduction and optional portrait/process photo. Copy must be approved by the owner and must not invent personal history or credentials.

### FR-09: Footer
Include brand name, relevant section links, Instagram, WhatsApp, and a small brand sign-off. Avoid fake copyright dates or claims.

### FR-10: SEO and sharing
Include page title, meta description, canonical URL once the domain is known, Open Graph metadata, favicon, and meaningful image alt text. Add structured data only when accurate and appropriate.

### FR-11: Motion and accessibility
Use subtle progressive reveals and interactions. Content must remain available when JavaScript animation is unavailable. Respect reduced-motion preferences and keyboard interaction.

### FR-12: Analytics readiness
Do not add analytics without an agreed provider and privacy decision. Keep CTA events easy to instrument in a later iteration.

## 8. Non-functional requirements

- Performance: prioritise the hero image and optimise all assets.
- Accessibility: semantic HTML, keyboard support, focus visibility, contrast, alt text, and reduced motion.
- Reliability: all external links and CTAs must be verified.
- Maintainability: content and links should be easy to update in a single data/config file.
- Security: no secrets in client-side code or repository.
- Privacy: no forms collecting personal data in Stage 1; WhatsApp is an external service.
- Compatibility: current major versions of Chrome, Safari, Firefox, and Edge; test mobile browsers.

## 9. Proposed content outline

1. Header
2. Hero: “Little things, made with love.”
3. Selected creations
4. Custom-order process: “You imagine it. We make it real.”
5. Meet the maker
6. Behind the scenes
7. Final CTA: “Have a little idea?”
8. Footer

Copy is draft only and must be reviewed by the owner.

## 10. Acceptance criteria

Stage 1 is accepted when:
- [ ] All required sections exist and have a consistent design.
- [ ] All artwork shown as real work is supplied/approved by the owner.
- [ ] No placeholder images or fake facts remain in production.
- [ ] WhatsApp CTA opens the correct number with the expected prefilled message.
- [ ] Instagram CTA opens the correct official profile.
- [ ] Layout works at 360px mobile width and common tablet/desktop widths.
- [ ] No unintended horizontal scrolling occurs.
- [ ] Navigation and CTAs work by keyboard and touch.
- [ ] Reduced-motion settings are respected.
- [ ] Images are appropriately sized and optimised.
- [ ] Metadata, favicon, and social preview are set.
- [ ] No console errors or broken links remain.
- [ ] The owner approves copy, imagery, and final visual direction.

## 11. Success measures

Stage 1 should be evaluated using qualitative and quantitative signals:
- Visitors click WhatsApp from the site.
- Visitors click through to Instagram.
- The owner reports receiving relevant enquiries.
- Visitors can understand the brand and how to order without needing extra explanation.
- The site loads and behaves reliably on mobile.

Do not set numeric targets until a baseline and traffic source are known.

## 12. Risks and mitigations

| Risk | Mitigation |
|---|---|
| Not enough real photographs | Collect a minimum viable set before final polish; use clearly marked development placeholders only during build |
| Scope creep into e-commerce | Keep Stage 1 to showcase and enquiries |
| Over-animation slows the site | Build layout first; add motion selectively and test performance |
| Missing business details | Track them in `OPEN_DECISIONS.md`; do not invent values |
| Site becomes hard to update | Keep content in a central data file and document how to change it |
| CTA doesn't work | Test the actual WhatsApp number and Instagram URL on desktop and mobile |

## 13. Future opportunities, not Stage 1 commitments

- CMS for editing artwork and descriptions
- Individual creation detail pages
- Custom order form
- Customer testimonials with permission
- Product pricing and ready-to-buy catalogue
- Online checkout and payments
- Analytics and conversion reporting
- Search-engine content expansion
