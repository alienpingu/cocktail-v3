# Cocktail Search App

A modern, well-organized cocktail search application built with vanilla TypeScript and HTML - no external dependencies required!

## 🏗️ Project Structure

```
src/
├── api/
│   └── searchCocktails.ts    # API service for cocktail data fetching
├── components/
│   ├── BaseComponent.ts     # Base component class
│   ├── CardComponent.ts     # Cocktail card component with progressive image sizing
│   ├── GridComponent.ts     # Grid layout component
│   ├── LookupComponent.ts    # Cocktail detail view component
│   └── SearchComponent.ts   # Search interface component
├── core/
│   └── store.ts             # Global state management
├── pages/
│   ├── AboutPage.ts         # About page component
│   ├── HomePage.ts          # Home page component
│   ├── LookupPage.ts        # Cocktail lookup page
│   └── SearchPage.ts        # Search results page
├── router/
│   ├── Router.ts           # Custom routing system
│   └── routes.ts           # Route definitions
├── styles/
│   └── style.css           # Application styles
└── main.ts                 # Application entry point
```

## ✨ Features

- **Type-safe**: Full TypeScript support with proper interfaces
- **Modular Architecture**: Clean separation of concerns
- **Custom Routing**: Lightweight client-side routing system
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Responsive Design**: Clean, unstyled HTML structure ready for CSS

## 🚀 Getting Started

This project uses Vite for development serving and building, but the core application code has no external dependencies.

### For Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server with hot reload:
   ```bash
   npm run dev
   ```

3. The application will be available at `http://localhost:5173`

### For Production

1. Build the application:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist/` directory

3. Serve the `dist/index.html` file using any web server

## 📁 Key Components

### API (`api/searchCocktails.ts`)
- Handles all communication with [TheCocktailDB](https://www.thecocktaildb.com/) API
- Search cocktails by name functionality
- Error handling for API failures

### Core (`core/store.ts`)
- Global state management system
- Centralized data store for cocktail information
- State synchronization across components

### Router (`router/Router.ts`, `router/routes.ts`)
Custom routing system that handles:
- Client-side navigation
- Route pattern matching
- Page component rendering

### Components
- **BaseComponent** (`components/BaseComponent.ts`): Base class for all components
- **CardComponent** (`components/CardComponent.ts`): Individual cocktail card with progressive image sizing
- **GridComponent** (`components/GridComponent.ts`): Grid layout for cocktail cards
- **LookupComponent** (`components/LookupComponent.ts`): Detailed cocktail view
- **SearchComponent** (`components/SearchComponent.ts`): Search interface

### Pages
- **HomePage** (`pages/HomePage.ts`): Main landing page
- **SearchPage** (`pages/SearchPage.ts`): Search results page
- **LookupPage** (`pages/LookupPage.ts`): Individual cocktail detail page
- **AboutPage** (`pages/AboutPage.ts`): Information about the application

## 🔧 API Integration

The app integrates with [TheCocktailDB](https://www.thecocktaildb.com/) API:
- Search cocktails by name
- Get detailed cocktail information by ID
- Proper error handling for API failures

## 🎯 Usage

```typescript
import { CocktailAPI, Router, UIRenderer } from './src';

// Search for cocktails
const cocktails = await CocktailAPI.searchCocktails('margarita');

// Setup routing
const router = new Router();
router.addRoute('^/$', () => UIRenderer.renderHomePage());
router.navigate('/');
