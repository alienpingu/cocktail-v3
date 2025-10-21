import { BaseComponent } from "./BaseComponent.js";
import searchCocktails from "../api/searchCocktails.js";

export class SearchComponent extends BaseComponent {
  constructor(root: HTMLElement) {
    super(root);
  }

  protected bindEvents(): void {
    const searchbar = this.root.querySelector("#searchbar") as HTMLInputElement;
    const submitBtn = this.root.querySelector("#submit-btn") as HTMLButtonElement;

    this.addEventListener(submitBtn, "click", async () => {
      const state = this.getGlobalState() as { searchQuery: string };
      const { searchQuery } = state;

      if (searchQuery.length === 0) return;

      const results = await searchCocktails(searchQuery);
      this.setGlobalState({ cocktails: results });
      this.mount();
    });

    this.addEventListener(searchbar, "change", async (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.value.length === 0) return;

      const results = await searchCocktails(target.value);
      this.setGlobalState({
        cocktails: results,
        searchQuery: target.value
      });
      this.mount();
    });
  }

  render(): string {
    const state = this.getGlobalState() as { searchQuery: string };
    const { searchQuery } = state;

    return `
      <input id="searchbar" type="text" placeholder="Search..." value="${searchQuery}" />
      <button id="submit-btn" type="button">Search</button>
    `;
  }
}
