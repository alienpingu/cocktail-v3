import { BaseComponent } from "./BaseComponent";

export class CardComponent extends BaseComponent {
    private cocktail: any;
    private index: number;
  constructor(root: HTMLElement, cocktail:any, index:number) {
    super(root);
    this.cocktail = cocktail;
    this.index = index;
  }

  protected bindEvents(): void {}

  render(): string {
    return `
       <a href="/lookup/${this.cocktail.idDrink}" class="card" data-index="${this.index}">
            <img src="${this.cocktail.strDrinkThumb}/small" alt="${this.cocktail.strDrink}" />
            <p>${this.cocktail.strDrink}</p>
        </a>
    `;
  }
}
