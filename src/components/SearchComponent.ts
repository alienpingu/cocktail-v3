import { BaseComponent } from "./BaseComponent";
import searchCocktails from "../api/searchCocktails";

export class SearchComponent extends BaseComponent {
  constructor(root: HTMLElement) {
    super(root);
  }

  protected bindEvents(): void {
    const searchbar = this.root.querySelector("#searchbar") as HTMLInputElement;
    const submitBtn = this.root.querySelector("#submit-btn") as HTMLInputElement;

    this.addEventListener(submitBtn, "click", async () => {
      const {searchQuery} = this.getGlobalState();
      const results = await searchCocktails(searchQuery);
      this.setGlobalState({ cocktails: results });
      this.mount();
    });

    this.addEventListener(searchbar, "change", async (event) => {
      const target = event.target as HTMLInputElement;
      this.setGlobalState({ searchQuery:  target.value});
      this.mount();
    })
  }

  render(): string {
    const { searchQuery } = this.getGlobalState();
    return `
        <input id="searchbar" type="text" placeholder="Search..." value="${searchQuery}" />
        <input id="submit-btn" type="button" value="Search" />
    `;
  }
}
