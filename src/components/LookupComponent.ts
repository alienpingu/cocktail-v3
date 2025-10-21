import { BaseComponent } from "./BaseComponent";

export class LookupComponent extends BaseComponent {
  constructor(root: HTMLElement) {
    super(root);
  }

  protected bindEvents(): void {}

  render(): string {
    const { cocktailLookup } = this.getGlobalState();
    return `
      <div id="lookup-component">
        ${
            cocktailLookup
            ? `
            <h2>${cocktailLookup.strDrink}</h2>
            <img src="${cocktailLookup.strDrinkThumb}/large" alt="${cocktailLookup.strDrink}" />
            <p>${cocktailLookup.strInstructions}</p>
        `
            : `<p>Nessun cocktail selezionato.</p>`
        }
      </div>
    `;
  }
}
