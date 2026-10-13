# MLP OB GYN (Martin, Lee & Page)

Luxury website draft. Stack: Astro 5, React islands, Tailwind CSS v4, Framer Motion.
Fonts: Playfair Display (headings) + Lato (body).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
```

## Where things are
- `src/pages/index.astro` – homepage (hero slides are defined here)
- `src/components/sections` – static Astro sections (About, WhyUs, Services, Insurance, Providers, Testimonials, Blog, Contact, Header, Footer)
- `src/components/islands` – React + Framer Motion (HeroSlider, MobileMenu, TestimonialSlider, ContactForm, Reveal)
- `src/data` – site info, nav, services, providers, insurance, testimonials, stock image map
- `src/content/blog` – blog posts (markdown)
- `src/styles/global.css` – design tokens (lagoon teal, lotus pink, ivory)

## Before launch
1. Stock photos are licensed (Shutterstock Unlimited) and saved, resized, in `public/images/stock/`. The key-to-ID list is in `src/data/images.ts`. Keep the license records for your client.
2. Provider photos and insurance logos currently load from the live site's CDN. Download them into `public/images/` and update `src/data/providers.ts` and `insurance.ts`.
3. Connect the contact form (`ContactForm.tsx`) to Formspree, Resend or your backend.
4. Replace the 3 sample blog posts.
