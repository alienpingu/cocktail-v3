import type { Drink } from '../types/drink';

export class CocktailDetails {
  private goBack(): void {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  }

  private getIngredientsList(drink: Drink): string {
    const ingredients: string[] = [];

    for (let i = 1; i <= 15; i++) {
      const ingredient = drink[`strIngredient${i}` as keyof Drink] as string;
      const measure = drink[`strMeasure${i}` as keyof Drink] as string;

      if (ingredient) {
        ingredients.push(`${ingredient}${measure ? ` - ${measure}` : ''}`);
      }
    }

    return ingredients.map(ing => `<li>${ing}</li>`).join('');
  }

  public render(drink: Drink): void {
    const goBackFunction = this.goBack;

    document.body.innerHTML = `
      <div>
        <div>
          <button id="back-button">← Back to search</button>
        </div>
        <div>
          <h1>${drink.strDrink}</h1>
          <div>
            <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" />
          </div>

          <div>
            <div>
              <h2>Ingredients</h2>
              <ul>
                ${this.getIngredientsList(drink)}
              </ul>
            </div>

            <div>
              <h2>Instructions</h2>
              <p>${drink.strInstructionsIT || drink.strInstructions || 'No instructions available.'}</p>
            </div>
          </div>

          ${drink.strAlcoholic ? `
            <div>
              <strong>Type:</strong> ${drink.strAlcoholic === 'Alcoholic' ? 'Alcoholic' : 'Non-alcoholic'}
            </div>
          ` : ''}

          ${drink.strCategory ? `
            <div>
              <strong>Category:</strong> ${drink.strCategory}
            </div>
          ` : ''}

          ${drink.strGlass ? `
            <div>
              <strong>Glass:</strong> ${drink.strGlass}
            </div>
          ` : ''}
        </div>
      </div>
    `;

    const backButton = document.getElementById('back-button');
    if (backButton) {
      backButton.addEventListener('click', goBackFunction);
    }
  }

  public static render(): string {
    return `
      <div>
        <div>
          <button>← Back to search</button>
        </div>
        <div>
          <h1>Cocktail Details</h1>
          <div id="cocktail-content"></div>
        </div>
      </div>
    `;
  }
}

export function renderDetails(drink: Drink): void {
  const details = new CocktailDetails();
  details.render(drink);
}
