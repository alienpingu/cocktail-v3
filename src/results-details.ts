import type { Drink } from './types/drink';

export function renderDetails(drink: Drink): void {
  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  const getIngredientsList = (drink: Drink): string => {
    const ingredients: string[] = [];

    for (let i = 1; i <= 15; i++) {
      const ingredient = drink[`strIngredient${i}` as keyof Drink] as string;
      const measure = drink[`strMeasure${i}` as keyof Drink] as string;

      if (ingredient) {
        ingredients.push(`${ingredient}${measure ? ` - ${measure}` : ''}`);
      }
    }

    return ingredients.map(ing => `<li>${ing}</li>`).join('');
  };

  document.body.innerHTML = `
    <div>
      <div>
        <button onclick="(${goBack.toString()})()">Back to search</button>
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
              ${getIngredientsList(drink)}
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
}
