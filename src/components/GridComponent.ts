import { BaseComponent } from "./BaseComponent";

export class GridComponent extends BaseComponent {
  constructor(root: HTMLElement) {
    super(root);
  }

  protected bindEvents(): void {
    document.querySelectorAll(".card").forEach((card) => {
      this.addEventListener(card, "click", () => {
        const { cocktails } = this.getGlobalState();
        const index = card.getAttribute("data-index");
        if (index !== null) {
          const cocktail = cocktails[parseInt(index)];
          this.setGlobalState({ cocktailLookup: cocktail });
        }
      });
    });
  }

  render(): string {
    const { cocktails } = this.getGlobalState();
    return `
      <div id="grid-component">
            ${cocktails
              .map(
                (cocktail, index) => `
                <a href="/lookup/${cocktail.idDrink}" class="card" data-index="${index}">
                    <h3>${cocktail.strDrink}</h3>
                    <img src="${cocktail.strDrinkThumb}/small" alt="${cocktail.strDrink}" />
                </a>
                `
              )
              .join("")}
      </div>
    `;
  }
}
