# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern React + TypeScript application built with Vite. The project uses pnpm as the package manager and includes comprehensive testing, linting, and CI/CD infrastructure.

## Commands

### Development
- `pnpm run dev` - Start Vite development server on http://localhost:5173
- `pnpm run build` - TypeScript compile + ESLint + Vite production build
- `pnpm run preview` - Preview production build locally

### Code Quality
- `pnpm run lint` - Run ESLint on TypeScript/React files
- `pnpm run lint:fix` - Run ESLint with auto-fix
- `pnpm run format` - Format code with Prettier
- `pnpm run format:check` - Check code formatting

### Testing
- `pnpm run test` - Run Jest tests in watch mode
- `pnpm run test:ci` - Run tests with coverage for CI

### Package Management
- Uses pnpm (pnpm-lock.yaml present)
- All scripts use pnpm for consistency

## Architecture

### Project Structure
- **Vite + React + TypeScript** modern build setup
- **ESM modules** with `"type": "module"` in package.json
- Main application component: `src/App.tsx`
- Entry point: `src/index.tsx` with React.StrictMode
- Root HTML template: `index.html` (Vite convention)

### Key Files
- `src/App.tsx` - Main React component with retro terminal UI
- `src/index.tsx` - Application entry point
- `src/components/` - React components (RetroWindow, Terminal, Socials)
- `index.html` - Root HTML with SEO meta tags and schema.org data
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint 9.x flat config
- `jest.config.js` - Jest testing configuration

### Development Tools
- **TypeScript 5.x** - Full type checking
- **ESLint 9.x** - Modern flat config with React, TypeScript, a11y rules
- **Prettier** - Code formatting
- **Jest + Testing Library** - Unit testing with jsdom environment
- **Vite 5.x** - Fast build tool and dev server

### Testing
- Uses Jest with TypeScript support (ts-jest)
- React Testing Library for component testing
- jsdom environment for DOM testing
- Coverage reporting enabled

### CI/CD
- **GitHub Actions** for CI and automated releases
- **Vercel** deployment with optimized build settings
- **Code quality gates** - formatting, linting, testing, and building must pass

## Deployment
- Configured for Vercel deployment with Vite framework
- Production builds include TypeScript compilation and linting
- SEO optimized with Open Graph, Twitter Cards, and Schema.org structured data
- PWA manifest and favicon support

## SEO & Performance
- Complete meta tag optimization (title, description, keywords)
- Open Graph and Twitter Card support for social sharing
- Schema.org structured data for rich snippets
- Sitemap.xml and robots.txt for search engines
- Optimized CA logo favicon in multiple formats

## Important Notes
- **Migration Complete**: Project fully migrated from Create React App to Vite
- **No CRA remnants**: All react-scripts dependencies and configurations removed
- **Modern tooling**: Uses latest versions of React, TypeScript, and build tools
- **Type safety**: Strict TypeScript configuration with comprehensive linting