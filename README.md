# Vetro Frontend

A premium frontend for Vetro, a creative education brand in Río Cuarto that offers in-person workshops in porcelanato líquido, epoxy resin and UV resin.

This site is built with React, TypeScript and Vite, and it is designed to deliver a polished storytelling experience for learners and institutions.

---

## 🌟 Project overview

This repository contains the Vetro website, built to showcase creative workshops, hands-on learning and professional resin techniques.

The brand is positioned around:

- learning creative craftsmanship
- enjoying a calm, inspiring workshop experience
- developing artistic skills with professional guidance
- building trust for individuals and organizations
- presenting business interest as a secondary advantage

---

## 🧩 Architecture

The app is organized into reusable components, content-driven pages, and hash routing to support static hosting without 404 issues.

~~~text
src/
├── App.tsx                # Application shell and route outlet
├── main.tsx               # React entry point and router provider
├── router/index.tsx       # HashRouter route definitions
├── pages/                 # Site pages
│   ├── HomePage.tsx
│   ├── CoursesPage.tsx
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   ├── MaterialsPage.tsx
│   └── CourseDetailPage.tsx
├── components/            # Shared UI components
│   ├── layout/
│   ├── ui/
│   ├── course/
│   └── backgrounds/
├── constants/             # Copy and content definitions
│   ├── courses.ts
│   ├── faq.ts
│   └── site.ts
└── styles/                # Global styling and layout rules
~~~

### Routing diagram

~~~text
HashRouter
 ├── /                    → HomePage
 ├── /courses             → CoursesPage
 ├── /about               → AboutPage
 ├── /contact             → ContactPage
 ├── /materials           → MaterialsPage
 └── /courses/:courseId   → CourseDetailPage
~~~

---

## ✨ Key features

- premium hero presentation with animated background
- video showcase section with guided workshop copy
- gallery and showcase cards for real visual storytelling
- course preview grid with clear, educational copy
- instructor and testimonials sections with trust-focused copy
- FAQ and final WhatsApp CTA for easy contact
- responsive mobile navigation with an accessible drawer
- strong SEO foundation with Open Graph and Twitter metadata

---

## 🛠️ Tech stack

- React 19
- TypeScript
- Vite
- React Router DOM 7
- react-helmet-async
- framer-motion
- lucide-react
- ESLint

---

## 📁 Important files

- src/main.tsx — App entry and router provider
- src/App.tsx — main application shell
- src/router/index.tsx — route definitions
- src/constants/courses.ts — course data and workshop descriptions
- src/constants/faq.ts — FAQ content
- src/constants/site.ts — site metadata and WhatsApp config
- src/components/ui/Seo.tsx — SEO helper component
- src/components/Hero.tsx — hero section wrapper
- src/components/ui/MediaShowcase.tsx — video section
- src/components/layout/MobileDrawer.tsx — mobile navigation drawer
- src/layouts/Layout.tsx — footer and page wrapper

---

## 📖 Content strategy

The Vetro site is focused on:

- learning professional resin techniques
- enjoying a creative and relaxing workshop
- developing visual and tactile skills
- feeling welcomed by a supportive instructor
- showing quality and trust for both learners and workshop hosts

---

## 🚀 Development

### Install dependencies

`ash
pnpm install
`

### Run locally

`ash
pnpm run dev
`

### Build for production

`ash
pnpm run build
`

### Preview production build

`ash
pnpm run preview
`

### Lint

`ash
pnpm run lint
`

---

## 📌 Notes

- Hash routing is used to avoid 404s on static hosts.
- WhatsApp is the primary contact channel on the site.
- Content is centralized in src/constants/ for easy updates.
- The homepage uses structured storytelling to support both individual learners and institutional workshop inquiries.

---

## 🚀 Potential next steps

- add a testimonials data file for easy management
- include a workshop schedule or calendar section
- support multilingual copy
- add a contact form alongside WhatsApp

---

## 📝 License

Private project — not publicly licensed.