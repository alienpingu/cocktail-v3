import { BaseComponent } from "./BaseComponent";
import type { Cocktail } from "../types/index";

export class CardComponent extends BaseComponent {
  private cocktail: Cocktail;
  private index: number;

  constructor(root: HTMLElement, cocktail: Cocktail, index: number) {
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
