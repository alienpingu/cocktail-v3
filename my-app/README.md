# Cocktail Search App

A modern, well-organized cocktail search application built with TypeScript and Vite.

## 🏗️ Project Structure

```
src/
├── types/
│   └── drink.ts          # TypeScript interfaces for cocktail data
├── services/
│   ├── api.ts           # API service for cocktail data fetching
│   ├── ui.ts            # UI rendering utilities
│   └── url-utils.ts     # URL parsing and validation utilities
├── router/
│   └── router.ts        # Custom routing system
├── components/
│   ├── SearchBar.ts     # Search bar component
│   ├── ResultsContainer.ts # Search results component
│   ├── CocktailDetails.ts  # Cocktail details component
│   └── CocktailLookup.ts   # Cocktail lookup component
├── main.ts              # Application entry point with routing setup
└── index.ts             # Barrel exports for easy imports
```

## ✨ Features

- **Type-safe**: Full TypeScript support with proper interfaces
- **Modular Architecture**: Clean separation of concerns
- **Custom Routing**: Lightweight client-side routing system
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Responsive Design**: Clean, unstyled HTML structure ready for CSS

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## 📁 Key Components

### Types (`types/drink.ts`)
- `Drink`: Interface for cocktail data structure
- `ApiResponse`: Interface for API responses
- `CocktailError`: Interface for error handling

### Services
- **API Service** (`services/api.ts`): Handles all API communication
- **UI Service** (`services/ui.ts`): Manages UI rendering and state
- **URL Utils** (`services/url-utils.ts`): URL parsing and validation utilities

### Router (`router/router.ts`)
Custom routing system that handles:
- Route pattern matching
- Navigation handling
- Fallback for unknown routes

### Components
- **SearchBar** (`components/SearchBar.ts`): Interactive search component
- **ResultsContainer** (`components/ResultsContainer.ts`): Displays search results
- **CocktailDetails** (`components/CocktailDetails.ts`): Shows detailed cocktail information
- **CocktailLookup** (`components/CocktailLookup.ts`): Handles cocktail detail page logic

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
