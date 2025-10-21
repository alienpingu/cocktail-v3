import { BaseComponent } from "./BaseComponent";
import type { Cocktail } from "../types/index";

export class LookupComponent extends BaseComponent {
  constructor(root: HTMLElement) {
    super(root);
  }

  protected bindEvents(): void {}

  private buildIngredientsList(cocktail: Cocktail): string {
    const ingredients: string[] = [];

    for (let i = 1; i <= 15; i++) {
      const ingredient = cocktail[`strIngredient${i}` as keyof Cocktail] as string;
      const measure = cocktail[`strMeasure${i}` as keyof Cocktail] as string;

      if (ingredient) {
        const imgSrc = `https://www.thecocktaildb.com/images/ingredients/${encodeURIComponent(
          ingredient
        )}.png`;
        ingredients.push(`
          <li class="ingredient-item">
            <img class="ingredient-img" src="${imgSrc}" alt="${ingredient}" />
            <span class="ingredient-name">${ingredient}</span>
            ${measure ? `<span class="ingredient-measure">${measure}</span>` : ""}
          </li>
        `);
      }
    }

    return ingredients.join("");
  }

  render(): string {
    const state = this.getGlobalState() as { cocktailLookup: Cocktail | null };
    const { cocktailLookup } = state;

    if (!cocktailLookup) {
      return `
        <div id="lookup-component" class="lookup-component">
          <p class="no-cocktail">Nessun cocktail selezionato.</p>
        </div>
      `;
    }

    const ingredients = this.buildIngredientsList(cocktailLookup);

    return `
      <div id="lookup-component" class="lookup-component">
        <h2 class="cocktail-title">${cocktailLookup.strDrink}</h2>
        <img class="cocktail-thumb" src="${
          cocktailLookup.strDrinkThumb
        }/large" alt="${cocktailLookup.strDrink}" />
        <p class="cocktail-instructions">${cocktailLookup.strInstructions}</p>

        <div class="cocktail-meta">
          ${
            cocktailLookup.strTags
              ? `<p><strong>Tags:</strong> ${cocktailLookup.strTags}</p>`
              : ""
          }
          ${
            cocktailLookup.strCategory
              ? `<p><strong>Categoria:</strong> ${cocktailLookup.strCategory}</p>`
              : ""
          }
          ${
            cocktailLookup.strIBA
              ? `<p><strong>IBA:</strong> ${cocktailLookup.strIBA}</p>`
              : ""
          }
          ${
            cocktailLookup.strAlcoholic
              ? `<p><strong>Tipo:</strong> ${cocktailLookup.strAlcoholic}</p>`
              : ""
          }
          ${
            cocktailLookup.strGlass
              ? `<p><strong>Bicchiere:</strong> ${cocktailLookup.strGlass}</p>`
              : ""
          }
        </div>

        ${
          ingredients.length > 0
            ? `
              <h3 class="ingredients-title">Ingredienti</h3>
              <ul class="ingredients-list">
                ${ingredients}
              </ul>
            `
            : ""
        }
      </div>
    `;
  }
}
