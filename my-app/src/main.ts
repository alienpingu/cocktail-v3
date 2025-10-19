import { Router } from './router/router';
import { UIRenderer } from './services/ui';
import { SearchBar } from './components/SearchBar';
import { loadCocktailDetails } from './components/CocktailLookup';

const router = new Router();

function setupRoutes(): void {
  router.addRoute('^/$', () => {
    UIRenderer.renderHomePage();
    new SearchBar();
  });

  router.addRoute('^/lookup/\\d+$', async () => {
    try {
      await loadCocktailDetails();
    } catch (error) {
      console.error('Error loading cocktail details:', error);
      UIRenderer.renderHomePage();
      new SearchBar();
    }
  });

  router.setNotFoundHandler(() => {
    UIRenderer.renderHomePage();
    new SearchBar();
  });
}

function init(): void {
  setupRoutes();
  router.navigate(router.getCurrentPath());
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
