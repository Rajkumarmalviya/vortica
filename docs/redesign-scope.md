# Vortica Website Redesign & Recode Scope

## 1) Current-state analysis (as-is)

### Product/content snapshot
- The website is currently a single-page marketing site with these major sections: Hero, Services, Consulting/Outsourcing, and Contact form.
- The core value proposition is broad technology services (custom software, AI, cloud, e-commerce, UI/UX, DevOps) with CTA through a contact form.
- Footer includes location, phone, email, and social links.

### Technical snapshot
- Stack: Next.js 15 + React 19 + TypeScript + TailwindCSS.
- App Router is used (`src/app/*`) with a monolithic homepage implementation in one file (`src/app/page.tsx`).
- Analytics events are wired for Meta Pixel and Google Analytics through custom helpers.
- Contact form is posted to FormSubmit (third-party endpoint), with redirect to `/thank-you`.

### UX/UI observations
- Strong visual theme (dark, glow, gradients) but very dense single-page layout and heavy card content.
- Services are readable but not prioritized by target audience/industry/problem.
- CTA hierarchy is weak: most cards are clickable for analytics but do not lead to service-specific conversion paths.
- Site architecture (information architecture) is flat; there are no dedicated service detail pages, case studies, or trust pages.

### Maintainability observations
- `src/app/page.tsx` is very large and mixes content, layout, and interaction logic in one place, which will slow redesign iterations.
- Repeated service-card markup suggests missing reusable components/data-driven rendering.
- Analytics naming is partially standardized, but events do not yet map clearly to a marketing funnel (awareness → interest → lead).

---

## 2) Redesign objectives (to-be)

### Business goals
1. Increase qualified inbound leads.
2. Improve clarity of offerings and differentiation.
3. Establish stronger trust (proof, process, outcomes).

### Experience goals
1. Cleaner navigation and clearer service discovery.
2. Faster path from landing to contacting/scheduling.
3. Better mobile readability and accessibility.

### Engineering goals
1. Modular component architecture for faster updates.
2. CMS-ready content model (even if phase-1 remains file-based).
3. Measurable funnel instrumentation.

---

## 3) Recommended scope for redesign + recode

## Scope A: Discovery & strategy
- Stakeholder workshop: business goals, ICPs, industries, deal size, key objections.
- Competitor benchmark and positioning map.
- Messaging framework: primary headline, value pillars, proof points, CTA framework.

**Deliverables**
- Brand/message brief
- Site strategy one-pager
- KPI definition (lead conversion, CTR, scroll completion, form completion)

## Scope B: Information architecture (IA)
- Move from one-page to multi-page structure:
  - Home
  - Services index
  - Service detail pages (one per major service category)
  - About / Why Vortica
  - Case studies / Work
  - Contact
- Define global nav + footer nav + CTA placements.

**Deliverables**
- Sitemap
- User flow map (first visit to lead)
- Page-level content outlines

## Scope C: UX/UI redesign
- New design system: typography scale, spacing, color tokens, interaction states, card/button styles.
- Wireframes (mobile-first) for all core pages.
- High-fidelity UI prototypes for key journeys.
- Accessibility baseline (WCAG 2.2 AA target for contrast, focus, semantics).

**Deliverables**
- Design system foundations
- Component library spec
- Final page mockups + prototype

## Scope D: Recode / frontend engineering
- Refactor current monolithic page into modular sections/components.
- Create reusable primitives (Section, Card, CTA, Testimonial, ServiceFeatureList).
- Build data-driven content source for services and offerings.
- Implement responsive behavior and performance improvements (optimized images, reduced layout shift, code splitting where useful).

**Deliverables**
- Production-ready Next.js codebase
- Reusable component architecture
- Updated styles/tokens

## Scope E: Content & trust layer
- Rewrite copy to outcome-focused messaging.
- Add proof blocks:
  - Case studies
  - Testimonials
  - Process/timeline
  - Tech stack credibility section
- Strengthen CTAs: “Book a discovery call”, “Get estimate”, “Talk to expert”.

**Deliverables**
- Final content pack
- SEO metadata per page
- Structured data updates (Organization + Service)

## Scope F: Analytics, SEO, and conversion tracking
- Define event taxonomy aligned to funnel.
- Track key interactions: nav clicks, service-page CTA clicks, form start, form submit, success state.
- Add conversion goals in GA/Meta and validate event delivery.
- Technical SEO checks (title/meta, canonical, sitemap, robots, OpenGraph/Twitter cards).

**Deliverables**
- Tracking plan
- Event implementation map
- QA report for analytics + SEO

## Scope G: QA, launch, and post-launch
- Functional QA (forms, links, responsive behavior).
- Accessibility QA and performance checks.
- Launch checklist + rollback plan.
- 2–4 week post-launch optimization sprint.

**Deliverables**
- QA checklist/results
- Launch runbook
- Post-launch insights report

---

## 4) Proposed phase plan

### Phase 1 (2–3 weeks): Strategy + IA + wireframes
- Scopes A and B + low-fi UX.

### Phase 2 (2–4 weeks): Visual design + content
- Scopes C and E.

### Phase 3 (3–5 weeks): Recode + integrations
- Scopes D and F.

### Phase 4 (1 week): QA + launch
- Scope G.

---

## 5) Out-of-scope (for initial redesign unless requested)
- Full custom backend CRM.
- Complex authenticated portal.
- Multi-language localization.
- Marketing automation journeys beyond basic lead capture.

---

## 6) Immediate next steps (practical)
1. Approve sitemap and page priorities.
2. Finalize primary CTA strategy (form-only vs form + calendar booking).
3. Confirm brand direction (evolutionary refresh vs full rebrand).
4. Start component architecture refactor before pixel-perfect redesign to reduce implementation risk.

---

## 7) Theme and component direction (21st.dev integration)

Use the 21st.dev community component library as the baseline inspiration source for redesign implementation:
- Reference URL: `https://21st.dev/community/components`
- Adopt a cohesive theme direction using:
  - **Pages** patterns (overall page composition and section order)
  - **Sections** patterns (hero, services, testimonials, CTA, contact blocks)
  - **Components** patterns (cards, nav, footer, FAQ, badges)
  - **Button animation** patterns for primary/secondary CTAs

### Practical rules for using 21st.dev patterns
1. Select one primary visual style family and apply consistently across all pages (avoid mixing unrelated styles).
2. Prioritize reusable sections/components over one-off custom builds.
3. Standardize CTA button variants and interaction animations across Home, Services, and Contact.
4. Validate accessibility for all adopted patterns (focus state, contrast, motion preference support).
5. Adapt copied patterns into Vortica branding tokens (typography, spacing, color), rather than using defaults unchanged.

### Additional deliverables for redesign scope
- Curated shortlist of approved 21st.dev page/section/component references.
- Mapping sheet: each website page section mapped to a selected 21st.dev pattern.
- Button animation guideline (timing, easing, hover/active/focus behavior).
- Reusable component acceptance checklist (responsive + accessibility + brand compliance).

---

## 8) Website coding implementation plan (execution blueprint)

This section turns the redesign scope into an actionable coding plan for the Next.js codebase.

### 8.1 Engineering principles
- Build **modular, reusable, data-driven** UI components.
- Keep content separate from presentational components where possible.
- Prefer accessibility and performance by default (semantic HTML, keyboard support, optimized media).
- Implement analytics events only for meaningful funnel interactions.

### 8.2 Target code architecture
- `src/app/`
  - `page.tsx` (home composition only)
  - `services/page.tsx` (services index)
  - `services/[slug]/page.tsx` (service detail template)
  - `about/page.tsx`
  - `work/page.tsx`
  - `contact/page.tsx`
- `src/components/`
  - `layout/` (Navbar, Footer, PageContainer)
  - `sections/` (HeroSection, ServicesSection, CTASection, TestimonialsSection, ContactSection)
  - `ui/` (Button, Card, Badge, SectionHeading, AnimatedButton)
- `src/content/`
  - `services.ts` (service data)
  - `site-copy.ts` (headlines, summaries, CTA labels)
  - `testimonials.ts`, `case-studies.ts`
- `src/lib/`
  - `analytics.ts` (event helpers + taxonomy)
  - `seo.ts` (metadata builders)

### 8.3 Build sequence and milestones

#### Milestone 1: Foundation refactor (Week 1)
- Split monolithic homepage into section components.
- Introduce shared UI primitives (`Button`, `Card`, `SectionHeading`).
- Add typed content files and move hardcoded lists into data objects.
- Keep current visual style temporarily to reduce regression risk.

**Exit criteria**
- Home page fully composed from reusable sections and data-driven cards.
- No UI regressions in core hero/services/contact flow.

#### Milestone 2: Multi-page IA implementation (Week 2)
- Add routes for `services`, `about`, `work`, `contact`.
- Add `services/[slug]` dynamic pages generated from content data.
- Add top navigation and footer links aligned to new IA.

**Exit criteria**
- All core pages reachable via navigation.
- Each service has a dedicated detail page with clear CTA.

#### Milestone 3: Theme + component system rollout (Weeks 3–4)
- Apply selected 21st.dev-inspired patterns for pages/sections/components.
- Implement standardized animated CTA buttons and interaction states.
- Consolidate color/typography/spacing tokens and remove inconsistent styles.

**Exit criteria**
- Consistent visual system across all pages.
- Button animations standardized and accessible.

#### Milestone 4: Content, trust, and conversion enhancements (Week 4)
- Add testimonials, case study previews, process steps, and trust indicators.
- Improve CTA placement and copy hierarchy across key pages.
- Refine contact page/form content and submission success flow.

**Exit criteria**
- Trust sections live on Home + Work + Services pages.
- Conversion pathways are explicit and consistent.

#### Milestone 5: Analytics, SEO, QA, and launch readiness (Week 5)
- Implement finalized analytics event taxonomy.
- Add page-level metadata and structured data.
- Run lint/build and perform responsive/accessibility/performance QA.

**Exit criteria**
- All critical events fire correctly.
- Build passes and launch checklist is complete.

### 8.4 Suggested sprint backlog (prioritized)
1. Component extraction from `src/app/page.tsx`.
2. Data model creation for services and CTA content.
3. Navigation + route scaffolding for multi-page IA.
4. Service detail page template and slug strategy.
5. 21st.dev pattern selection and adaptation pass.
6. Animated button standardization.
7. Trust/case-study sections.
8. Analytics instrumentation pass.
9. SEO metadata and structured data pass.
10. Final QA and polish.

### 8.5 Definition of done (DoD)
- Code quality: lint/build passing in CI.
- UX quality: responsive behavior verified on mobile/tablet/desktop.
- Accessibility: keyboard navigation, focus visibility, and contrast checks passed.
- Performance: no major regressions in Core Web Vitals baseline.
- Tracking: funnel events validated in GA/Meta debug tools.
- Documentation: component usage notes and page ownership documented.
