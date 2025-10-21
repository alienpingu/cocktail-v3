import { BaseComponent } from "./BaseComponent";
import { CardComponent } from "./CardComponent";
import { LoadingCardComponent } from "./LoadingCardComponent";
import type { Cocktail } from "../types/index";

export class GridComponent extends BaseComponent {
  constructor(root: HTMLElement) {
    super(root);
  }

  protected bindEvents(): void {
    const cards = document.querySelectorAll("#grid-component .card");
    cards.forEach(card => {
      this.addEventListener(card, "click", () => {
        const state = this.getGlobalState() as { cocktails: Cocktail[] };
        const { cocktails } = state;
        const index = card.getAttribute("data-index");

        if (index !== null) {
          const cocktail = cocktails[parseInt(index)];
          this.setGlobalState({ cocktailLookup: cocktail });
        }
      });
    });
  }

  render(): string {
    const state = this.getGlobalState() as { cocktails: Cocktail[]; isLoading: boolean; searchQuery: string };
    const { cocktails, isLoading, searchQuery } = state;

    if (isLoading) {
      return `
        <div id="grid-component">
          ${Array.from({ length: 12 }, (_, index) =>
            new LoadingCardComponent(document.createElement("div"), index).render()
          ).join("")}
        </div>
      `;
    }

    if (cocktails.length === 0 && !isLoading && searchQuery.trim() !== "") {
      return `
        <div id="grid-component">
          <p>No cocktails found.</p>
        </div>
      `;
    }

    return `
      <div id="grid-component">
        ${cocktails
          .map((cocktail: Cocktail, index: number) =>
            new CardComponent(document.createElement("div"), cocktail, index).render()
          )
          .join("")}
      </div>
    `;
  }
}
