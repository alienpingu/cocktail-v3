import type { Cocktail } from '../../types/cocktail';

export const renderCocktailDetails = (drink: Cocktail): void => {
  const goBack = () => window.history.length > 1 ? window.history.back() : window.location.href = '/';

  document.body.innerHTML = `
    <div>
      <div>
        <button id="back-button">← Back to search</button>
      </div>
      <div>
        <div class="flex-center">
          <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" class=""/>
        </div>
        <div class="container">
          <h1>${drink.strDrink}</h1>
          <div>
            <h2>Ingredients</h2>
            <ul>
              ${Array.from({length: 15}, (_, i) => {
                const ingredient = drink[`strIngredient${i+1}` as keyof Cocktail] as string;
                const measure = drink[`strMeasure${i+1}` as keyof Cocktail] as string;
                return ingredient ? `<li>${ingredient}${measure ? ` - ${measure}` : ''}</li>` : '';
              }).join('')}
            </ul>
          </div>
          <div>
            <h2>Instructions</h2>
            <p>${drink.strInstructionsIT || drink.strInstructions || 'No instructions available.'}</p>
          </div>
        </div>
        ${drink.strAlcoholic ? `<div><strong>Type:</strong> ${drink.strAlcoholic === 'Alcoholic' ? 'Alcoholic' : 'Non-alcoholic'}</div>` : ''}
        ${drink.strCategory ? `<div><strong>Category:</strong> ${drink.strCategory}</div>` : ''}
        ${drink.strGlass ? `<div><strong>Glass:</strong> ${drink.strGlass}</div>` : ''}
      </div>
    </div>
  `;

  document.getElementById('back-button')?.addEventListener('click', goBack);
};
