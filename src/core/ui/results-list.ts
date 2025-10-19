import type { Cocktail } from '../../types/cocktail';
import { buildCocktailUrl } from '../../utils/url-utils';

export const renderResults = (drinks: Cocktail[]): void => {
  const container = document.getElementById('results-container');
  if (!container) return;

  container.innerHTML = drinks?.length ?
    drinks.map(drink => `
      <div class="cocktail-card">
        <a href="${buildCocktailUrl(drink.idDrink)}" class="cocktail-link">
          <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" loading="lazy" />
          <div>${drink.strDrink}</div>
        </a>
      </div>
    `).join('') :
    '<p>No results found.</p>';
};
