# React State Management

A React TypeScript application demonstrating global state management with Context API, built with Vite and using Salt DS component library.

## Tech Stack

- **React 19.2** - UI library
- **TypeScript 5.9** - Type safety
- **Vite 7.x** - Fast build tool and dev server
- **Salt DS** - JPMorgan Chase's design system component library

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build the application for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

### Lint

Run ESLint to check code quality:

```bash
npm run lint
```

## Project Structure

```
├── src/
│   ├── App.tsx           # Main application component
│   ├── App.css           # Application styles
│   ├── main.tsx          # Entry point with Salt DS provider
│   └── index.css         # Global styles
├── public/               # Static assets
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

## Features

- ⚡️ Lightning fast development with Vite HMR
- 🎨 Salt DS component library integration
- 📝 TypeScript for type safety
- 🔍 ESLint for code quality
- 🚀 Optimized production builds

## About Salt DS

Salt DS is JPMorgan Chase's open-source design system built specifically for financial applications. It provides a comprehensive set of accessible, well-tested React components that follow design best practices.

Learn more: [Salt DS Documentation](https://github.com/jpmorganchase/salt-ds)
