# Ravindra IAS — Official Website

> **Best IAS Coaching in Gwalior** | UPSC & MPPSC Preparation Institute

A premium, fully responsive website for **Ravindra's Institute (Ravindra IAS)**, built with a modern tech stack, smooth animations, and a polished blue & yellow brand identity.

---

## 🚀 Live Preview

Run locally at `http://localhost:8080` after following the setup steps below.

---

## ✨ Features

- **Premium Blue & Yellow Theme** — Light & Dark mode with a fully managed, consistent color system
- **Animated Hero Section** — Auto-cycling background slideshow with mouse parallax effect
- **Smooth Page Transitions** — Apple-tier Framer Motion animations between all routes
- **Scroll Story Section** — Auto-advancing phase-by-phase showcase (Aspiration → Preparation → Execution)
- **Director Section** — Dedicated founder/director profile with scroll-reveal animation
- **Courses Page** — Full UPSC & MPPSC course catalog
- **Our Selections Page** — Top rankers grid with UPSC/MPPSC achievers + student testimonials
- **Student Testimonials** — Real UPSC/MPPSC student reviews with horizontal scroll carousel
- **Coming Soon Pages** — Styled "Coming Soon" for Test Series, Blog, and Download App
- **Contact Page** — Enquiry form with institute contact details
- **Fully Responsive** — Works on mobile, tablet, and desktop
- **SEO Ready** — Proper page titles, meta descriptions, and semantic HTML

---

## 🛠 Technologies Used

| Category | Technology |
|---|---|
| Framework | React 18 |
| Build Tool | Vite |
| Language | TypeScript |
| Styling | Tailwind CSS + Custom CSS Variables |
| Animations | Framer Motion |
| Routing | React Router DOM v6 |
| Icons | Lucide React |
| UI Components | shadcn/ui (Radix UI) |
| Data Fetching | TanStack React Query |

---

## 📁 Project Structure

```
src/
├── assets/          # Images (hero-bg, director, etc.)
├── components/      # Reusable UI components
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── DirectorSection.tsx
│   ├── ScrollStory.tsx
│   ├── TestimonialsSection.tsx
│   ├── WhyChooseUs.tsx
│   ├── Footer.tsx
│   └── AnimatedRoutes.tsx
├── pages/           # Route-level page components
│   ├── Index.tsx
│   ├── About.tsx
│   ├── Courses.tsx
│   ├── Selections.tsx
│   ├── Contact.tsx
│   ├── ComingSoon.tsx
│   └── NotFound.tsx
├── index.css        # Global theme variables & utilities
└── main.tsx         # App entry point
public/
├── Ravindraiaslogo.png
└── RAVINDERSIRIMAGE.PNG
```

---

## ⚙️ Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or above) installed.

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

---

## 🎨 Theme

The site uses a **Blue & Yellow** color palette managed via CSS custom properties in `src/index.css`:

- **Primary**: Deep Navy Blue (`hsl(230, 60%, 20%)`)
- **Accent**: Vibrant Yellow (`hsl(45, 100%, 51%)`)
- **Dark Mode**: Automatically managed via the `ThemeProvider`

---

## 📞 Contact

**Ravindra's Institute (Ravindra IAS)**  
📍 Gwalior, Madhya Pradesh  
📞 +91 7042027486  
📧 ravindrasiasdelhi@gmail.com

---

*Built with ❤️ for UPSC & MPPSC aspirants of Gwalior*
