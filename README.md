# Regional Hub Template

A plug-and-play Next.js template for local pest control websites. Every site-specific value flows from a single config file — zero hardcoded content.

## Quick Start — New Site in 5 Minutes

### 1. Create Repo
Create a new GitHub repo from this template, or fork it.

### 2. Edit `hub.config.ts`
This is the **ONLY** file you need to customize. Set:
- **Brand** — name, domain, phone, email, tagline
- **Region** — descriptive name for your coverage area (e.g., "Long Island", "Hudson Valley & Bronx")
- **Brand colors** — primary, secondary, accent (update in `tailwind.config.ts` too)
- **Year founded** — used to auto-calculate "X+ Years Serving..."
- **Regions** — one entry per county/area with slug, name, state, primary pests, hero content
- **Reviews** — curated Google reviews (empty array = section hidden)
- **Network sites** — sister sites for cross-linking (empty array = section hidden)
- **GMBs** — Google Business profiles (empty array = no NAP/schema)

### 3. Create `data/towns.json`
Generate your town data file with this structure:

```json
{
  "regions": [
    {
      "regionSlug": "suffolk",
      "county": "Suffolk County",
      "state": "New York",
      "stateCode": "NY",
      "towns": [
        { "name": "Babylon", "slug": "babylon" },
        { "name": "Huntington", "slug": "huntington" }
      ]
    }
  ],
  "totalTowns": 2
}
```

Each region maps to a county or area group. Towns are listed under their region. The `regionSlug` is used in URLs: `/{regionSlug}/{townSlug}`.

### 4. Update `tailwind.config.ts`
Set your brand colors to match the values in `hub.config.ts`:
```typescript
colors: {
  brand: {
    primary: '#1B6B3A',     // ← BRAND.primaryColor
    secondary: '#2D8B57',   // ← BRAND.secondaryColor
    accent: '#FF6B35',      // ← BRAND.accentColor
    dark: '#1A1A2E',
    light: '#F0F7F2',
  },
},
```

### 5. Set Vercel Environment Variables
| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_GA4_ID` | Optional | Google Analytics 4 measurement ID |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Yes | Cloudflare Turnstile site key (spam protection) |
| `TURNSTILE_SECRET_KEY` | Yes | Cloudflare Turnstile secret key |
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes | Supabase service role key |
| `CRM_WEBHOOK_URL` | Optional | Webhook for lead notifications |

### 6. Deploy
Push to GitHub → connect to Vercel → auto-deploys on every push.

```bash
npm install
npm run dev     # Local development
npm run build   # Production build
```

---

## Architecture

### Config Files
| File | Purpose | Edit? |
|---|---|---|
| `hub.config.ts` | All site-specific values | ✅ **Yes — this is the only file to edit** |
| `site.config.ts` | Auto-derived from hub.config | ❌ Never edit |
| `data/towns.json` | Town data per site | ✅ Yes — generate per site |
| `tailwind.config.ts` | Brand colors | ✅ Yes — match hub.config colors |

### How It Works
1. `hub.config.ts` defines brand, regions, reviews, network sites, and GMB data
2. `site.config.ts` imports from hub.config and derives all values components need (SITE_NAME, GEO, PHONE, SEO, etc.)
3. All components import from `site.config` — never hardcoded values
4. `lib/db.ts` reads from `data/towns.json` for town data
5. Region pages (`[region]/page.tsx`) use hub.config directly for region-specific data

### Key File Map
```
hub.config.ts              — Brand, regions, reviews, network sites, GMBs
site.config.ts             — Auto-derived config (DO NOT EDIT)
data/towns.json            — Town data file
tailwind.config.ts         — Brand colors
app/layout.tsx             — Root layout with dynamic schema
app/page.tsx               — Homepage with generic FAQs
app/[region]/page.tsx      — Region landing pages
app/[region]/[town]/page.tsx — Town landing pages
components/sections/       — Hero, Reviews, Services, Towns, CTA, Network
components/layout/         — TopBar, Header, Footer
components/forms/          — LeadForm
lib/db.ts                  — Town data access (multi-region)
lib/types.ts               — TypeScript interfaces
lib/services.ts            — Service definitions
lib/seo.ts                 — SEO schema helpers
```

### URL Structure
```
/                          — Homepage
/services                  — All services
/services/{slug}           — Service detail
/service-areas             — All service areas
/{regionSlug}/{townSlug}   — Town landing page
/about                     — About page
/contact                   — Contact page
/blog                      — Blog listing
/blog/{slug}               — Blog post
```

## Template Features
- 🔧 **Zero hardcoded content** — everything from config
- 📱 **Mobile-first responsive** design
- 🔍 **SEO-optimized** — dynamic schema, meta tags, sitemap
- 📊 **GA4 ready** — just add measurement ID
- 🛡️ **Spam protection** — Cloudflare Turnstile on forms
- 📝 **Lead capture** — Supabase + webhook integration
- ⭐ **Reviews section** — from hub.config (hidden when empty)
- 🌐 **Network cross-linking** — sister sites (hidden when empty)
- 🗺️ **Multi-region support** — multiple counties/areas per site
