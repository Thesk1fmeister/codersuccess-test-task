# CoderSuccess - Plumbing Services Website

A modern, responsive plumbing services website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- 🎭 Animated loading screen with Framer Motion
- 🧭 React Router for navigation
- 🎯 Custom service cards and components
- 📦 Path aliases for clean imports (`@/`)

## Prerequisites

Before you begin, ensure you have installed:
- **Node.js** (version 18.x or higher recommended)
- **npm** (comes with Node.js)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Thesk1fmeister/codersuccess-test-task.git
cd CoderSuccess
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

The application will start at `http://localhost:5173/` (or another port if 5173 is in use).

### 4. Build for production

```bash
npm run build
```

The build output will be in the `dist/` folder.

### 5. Preview production build

```bash
npm run preview
```

## Project Structure

```
src/
├── assets/          # Images, icons, and other static files
├── components/      # Reusable React components
│   ├── Button/
│   ├── Header/
│   ├── Hero/
│   ├── Loader/
│   ├── ServiceCard/
│   └── Services/
├── pages/          # Page components
│   ├── Home/
│   └── ComingSoon/
├── router/         # React Router configuration
├── utils/          # Utility functions
├── index.css       # Global styles & Tailwind imports
├── App.tsx         # Main app component with loader
└── main.tsx        # Application entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
