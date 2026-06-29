# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




#############################################################################

Dependencias del porfolio:


React
Vite

Tailwind CSS

shadcn/ui

React Router

Framer Motion

React Icons

React Scroll



La arquitectura que usaría para un portfolio "de nivel empresa"

src/
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── pdf/
│
├── components/
│   ├── common/
│   │   ├── Button/
│   │   ├── SectionTitle/
│   │   ├── Container/
│   │   ├── Badge/
│   │   └── SocialLinks/
│   │
│   ├── layout/
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   └── MainLayout/
│   │
│   ├── sections/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   ├── Experience/
│   │   ├── Education/
│   │   └── Contact/
│   │
│   └── ui/
│       ├── ProjectCard/
│       ├── SkillCard/
│       └── Timeline/
│
├── data/
│   ├── projects.js
│   ├── skills.js
│   ├── experience.js
│   └── education.js
│
├── hooks/
│
├── pages/
│   └── Home.jsx
│
├── styles/
│
├── App.jsx
├── main.jsx
└── index.css









