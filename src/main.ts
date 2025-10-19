import { Router, renderHomePage, setupSearch, loadCocktailDetails } from './core';

const router = new Router();

router.addRoute('^/$', () => {
  renderHomePage();
  setupSearch();
});

router.addRoute('^/lookup/\\d+$', () => loadCocktailDetails());

router.setNotFoundHandler(() => {
  renderHomePage();
  setupSearch();
});

const init = () => {
  router.navigate(router.getCurrentPath());
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
