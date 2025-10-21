import { BaseComponent } from "../components/BaseComponent";
import { LookupComponent } from "../components/LookupComponent";
import type { Cocktail } from "../types/index";
import getCocktail  from "../api/getCocktail";

export class LookupPage extends BaseComponent {
  constructor(root: HTMLElement, routeParams?: Record<string, string>) {
    super(root, routeParams);
  }

  render(): string {
    return `
      <div id="lookup-area"></div>
    `;
  }

  protected async bindEvents(): Promise<void> {
    const {cocktailLookup} = this.getGlobalState() as { cocktailLookup: Cocktail | null };

    if (this.routeParams?.id && !cocktailLookup) {
      const cocktail = await getCocktail(this.routeParams.id);
      this.setGlobalState({ cocktailLookup: cocktail });
    }
    const lookupRoot = this.root.querySelector("#lookup-area") as HTMLElement;
    const lookup = new LookupComponent(lookupRoot);
    lookup.mount();
  }
}
