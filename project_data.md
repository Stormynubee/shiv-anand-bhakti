# Shiv Anand Bhakti - Project Documentation

## 1. Project Overview
**Name**: `shiv-anand-bhakti`
**Description**: An e-commerce and consultation web application for spiritual and religious products (Rudrakshas, Murtis, Yantras, Gemstones, Puja Kits, etc.) associated with Pt. Shiwanand Tiwari. 
**Tech Stack**: 
- **Framework**: React 19 + Vite
- **Routing**: React Router DOM v7
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Styling**: Vanilla CSS (modular approach)
- **State Management**: React Context API (`CartContext`)

## 2. Architecture & File Structure
The project is located at `src/` and is divided into several clear directories:

### Pages (`src/pages/`)
- `Home.jsx`: The landing page with Hero, Lineage, Featured Products, Services, and YouTube Feed sections.
- `Shop.jsx`: The main e-commerce browsing page.
- `ProductDetail.jsx`: Dynamic route for viewing a single product's detailed information.
- `Consultation.jsx`: Page for booking astrological or spiritual consultations.
- `About.jsx`: Information about the lineage and Pt. Shiwanand Tiwari.
- `Cart.jsx`: A full-page cart view (in addition to the drawer).

### Components (`src/components/`)
- **Layout (`layout/`)**:
  - `Navbar.jsx`: Global navigation menu.
  - `Footer.jsx`: Global footer with links and contact info.
  - `PageTransition.jsx`: Wrapper for Framer Motion page transitions.
- **Sections (`sections/`)**:
  - Modular UI blocks used primarily on the Home page (`Hero.jsx`, `FeaturedProducts.jsx`, `Lineage.jsx`, `Services.jsx`, `YouTubeFeed.jsx`).
- **UI (`ui/`)**:
  - Reusable, atomic components (`Button.jsx`, `CartDrawer.jsx`, `ProductCard.jsx`, `ScrollToTop.jsx`, `WhatsAppFAB.jsx`).

### State & Context (`src/context/`)
- `CartContext.jsx`: Handles global cart state including adding, removing, updating quantity, calculating totals, and managing the `isCartOpen` state. It persists the cart data to the browser's `localStorage` under the key `'sri-cart'`.

### Data (`src/data/`)
- `products.json`: A local JSON file serving as the mock database for the store. Products include details like `id`, `name`, `nameHi` (Hindi name), `price`, `category`, `description`, `longDescription`, `benefits`, `inStock`, `rating`, and `reviews`. 

Categories include: `rudraksha`, `murtis`, `puja-kits`, `yantras`, `gemstones`, `herbs`.

## 3. Core Functionalities
1. **E-commerce Cart System**:
   - Add/Remove/Update items.
   - Synchronizes across tabs using `localStorage`.
   - Accessible via a side-drawer (`CartDrawer.jsx`) or the dedicated cart page (`Cart.jsx`).
2. **Page Transitions**: 
   - Uses `framer-motion`'s `<AnimatePresence>` in `App.jsx` and `PageTransition.jsx` to smoothly fade/slide between routes.
3. **WhatsApp Integration**:
   - Global Floating Action Button (`WhatsAppFAB.jsx`) for instant customer support.
4. **Responsive Design**:
   - Built with custom CSS to support both mobile and desktop viewports.
5. **Localization (Partial)**:
   - Products database supports dual nomenclature (English and Hindi, e.g., `name` and `nameHi`).
