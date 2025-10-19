import type { Cocktail } from '../../types/cocktail';
import { buildCocktailUrl } from '../../utils/url-utils';

export const renderResults = (drinks: Cocktail[]): void => {
  const container = document.getElementById('results-container');
  if (!container) return;

  container.innerHTML = drinks?.length ?
    drinks.map(drink => `
      <div class="col-6">
        <a href="${buildCocktailUrl(drink.idDrink)}">
          <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" />
          <h3 class="bg-light text-primary" style="margin-top:-1rem;">${drink.strDrink}</h3>
        </a>
      </div>
    `).join('') :
    '<p>No results found.</p>';
};
