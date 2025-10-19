import type { Drink } from '../types/drink';
import { URLUtils } from '../services/url-utils';

export class ResultsContainer {
  private container: HTMLElement | null = null;

  constructor() {
    this.container = document.getElementById('results-container');
  }

  public render(drinks: Drink[]): void {
    if (!this.container) return;

    this.container.innerHTML = '';

    if (drinks && drinks.length > 0) {
      drinks.forEach((drink: Drink) => {
        const card = document.createElement('div');

        const img = document.createElement('img');
        img.src = drink.strDrinkThumb;
        img.alt = drink.strDrink;

        const link = document.createElement('a');
        link.href = URLUtils.buildCocktailUrl(drink.idDrink);
        link.textContent = drink.strDrink;

        card.appendChild(img);
        card.appendChild(link);
        this.container!.appendChild(card);
      });
    } else {
      this.container.innerHTML = '<p>No results found.</p>';
    }
  }

  public static render(): string {
    return '<div id="results-container"></div>';
  }
}

export function renderResults(drinks: Drink[]): void {
  const resultsContainer = document.getElementById('results-container');
  if (!resultsContainer) return;

  resultsContainer.innerHTML = '';

  if (drinks && drinks.length > 0) {
    drinks.forEach((drink: Drink) => {
      const card = document.createElement('div');

      const img = document.createElement('img');
      img.src = drink.strDrinkThumb;
      img.alt = drink.strDrink;

      const link = document.createElement('a');
      link.href = URLUtils.buildCocktailUrl(drink.idDrink);
      link.textContent = drink.strDrink;

      card.appendChild(img);
      card.appendChild(link);
      resultsContainer.appendChild(card);
    });
  } else {
    resultsContainer.innerHTML = '<p>No results found.</p>';
  }
}
