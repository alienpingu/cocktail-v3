import { BaseComponent } from "./BaseComponent";
import {CardComponent} from "./CardComponent";

export class GridComponent extends BaseComponent {
  constructor(root: HTMLElement) {
    super(root);
  }

  protected bindEvents(): void {
    document.querySelectorAll("#grid-component .card").forEach((card) => {
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
              .map((cocktail, index) => new CardComponent(document.createElement("div"), cocktail, index).render())
              .join("")
            }
      </div>
    `;
  }
}
