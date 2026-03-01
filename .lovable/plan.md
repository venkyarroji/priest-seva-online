

## Priest Seva — Vedic Priest Services Website

### Design System
- **Colors**: Deep Maroon (#7A0E0E), Gold (#D4AF37), Soft Cream (#FFF8E7), Dark (#5A0C0C)
- **Fonts**: Playfair Display (headings), Inter (body)
- **Style**: Elegant, premium, clean spacing, minimal animations, fully responsive

### Pages
1. **Homepage** — All sections below in one scrollable page
2. **About** — Dedicated page with detailed bio
3. **Services** — Full services listing
4. **Contact** — Contact form + phone numbers

### Homepage Sections

1. **Hero** — Full-screen with temple background, dark overlay, centered title "Priest Seva", subtitle with 30+ years experience, priest name, "10,000+ Happy Devotees" badge, gold "Book Puja Now" button + maroon outline "Call Now" button

2. **About** — Two-column: priest image (left), experience description (right)

3. **Services** — 3-column responsive grid with icon cards for: Navagraha Pooja, Sarpa Dosha Shanti, Kundali Reading, Marriage Pujas, Santan Pujas, Graha Dosha Remedies, All Types of Pujas. Gold border hover effect.

4. **Problems We Help** — Dark maroon background, gold icons listing: Financial Problems, Marriage Delay, Health Issues, Family Disputes, Negative Energies

5. **Testimonials** — 3 cards with star ratings, devotee names, short reviews

6. **Contact** — Form with Name, Phone, Service dropdown, Message fields. Phone numbers displayed: 8897319822, 9676956436

### Persistent UI Elements
- **Navbar** — Sticky, with links to sections/pages
- **Footer** — Contact info, quick links
- **Floating WhatsApp button** — Bottom-right corner
- **Sticky call button** — Mobile only

### Backend (Lovable Cloud / Supabase)
- **Table: `inquiries`** — id (uuid), name (text), phone (text), service (text), message (text), created_at (timestamp)
- RLS enabled, public insert allowed
- Contact form validates inputs with Zod, inserts into `inquiries`, shows success/error feedback

### SEO & Accessibility
- Proper page title and meta description
- Semantic HTML throughout
- Alt tags on all images
- Accessible form labels and focus states

