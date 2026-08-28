# 🌴 Lafina Beach Resort

A modern, responsive **beach resort website** built with **React** and **Vite**. It features a luxurious ocean-themed design, room listings, amenities, a photo gallery, guest reviews, and a reservation request form.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?logo=javascript&logoColor=black)

---

## ✨ Features

- 🏝️ **Hero section** with full-screen beach imagery and animated stats
- 🏨 **Rooms & Suites** — 6 room cards with pricing, capacity, and tags
- 🛟 **Amenities** — pool, beach access, spa, dining, Wi-Fi, and gym
- 🖼️ **Photo gallery** with a masonry-style responsive grid
- ⭐ **Guest testimonials** with star ratings
- 📅 **Reservation form** with a confirmation success state
- 📱 **Fully responsive** — mobile hamburger menu and adaptive layouts
- ♿ Accessible markup (ARIA labels, semantic HTML, reduced-motion support)

## 🧰 Tech Stack

| Layer       | Technology                                  |
| ----------- | ------------------------------------------- |
| UI library  | [React 19](https://react.dev/)              |
| Build tool  | [Vite 8](https://vite.dev/)                 |
| Styling     | Pure CSS (design tokens, custom properties) |
| Linting     | [ESLint](https://eslint.org/)               |
| Fonts       | Google Fonts — Playfair Display & Poppins   |
| Images      | [Unsplash](https://unsplash.com/)           |

## 📁 Project Structure

```
lafinabeach/
├── index.html              # HTML entry point
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite configuration
├── public/
│   └── wave.svg            # Custom favicon
└── src/
    ├── main.jsx            # React root
    ├── App.jsx             # Page composition
    ├── index.css           # Global styles & design tokens
    ├── data/
    │   └── content.js      # Rooms, amenities, gallery, testimonials
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Rooms.jsx
        ├── Amenities.jsx
        ├── Gallery.jsx
        ├── Testimonials.jsx
        ├── Booking.jsx
        ├── Footer.jsx
        └── Icons.jsx       # Inline SVG icon set
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (the project was built with Node 26)
- npm (bundled with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/lafinabeach.git
cd lafinabeach

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site.

## 📜 Available Scripts

| Command           | Description                                    |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with hot reload      |
| `npm run build`   | Create an optimized production build in `dist/`|
| `npm run preview` | Preview the production build locally           |
| `npm run lint`    | Run ESLint on the source code                  |

## 🎨 Customization

All site content lives in one place — [`src/data/content.js`](src/data/content.js). Edit it to:

- Change the resort name, contact info, and social links (`site`)
- Add or remove navigation links (`navLinks`)
- Update room listings and prices (`rooms`)
- Modify amenities (`amenities`)
- Swap gallery images (`gallery`)
- Update guest reviews (`testimonials`)

Design colors and fonts are defined as CSS custom properties in `:root` at the top of [`src/index.css`](src/index.css).

## 📝 Notes

- The reservation form is **front-end only** — it shows a confirmation message but does not send data to a server. To make it functional, connect the form submission in [`src/components/Booking.jsx`](src/components/Booking.jsx) to a backend or form service (e.g. Formspree, EmailJS, or your own API).
- Images are loaded from Unsplash. For production, consider downloading and hosting them locally.

## 📄 License

This project is for demonstration purposes. You are free to use and modify it for your own resort or portfolio.

---

Made with ☀️ by the Lafina Beach team.

