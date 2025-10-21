import { BaseComponent } from "../components/BaseComponent.js";
import { SearchComponent } from "../components/SearchComponent.js";
import { GridComponent } from "../components/GridComponent.js";

export class SearchPage extends BaseComponent {
  render(): string {
    return `
      <h1>Search</h1>
      <div id="search-area"></div>
      <div id="grid-area"></div>
    `;
  }

  protected bindEvents(): void {
    const searchRoot = this.root.querySelector("#search-area") as HTMLElement;
    const search = new SearchComponent(searchRoot);
    search.mount();

    const gridRoot = this.root.querySelector("#grid-area") as HTMLElement;
    const grid = new GridComponent(gridRoot);
    grid.mount();
  }
}
