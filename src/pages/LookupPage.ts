import { BaseComponent } from "../components/BaseComponent.js";
import { LookupComponent } from "../components/LookupComponent.js";
export class LookupPage extends BaseComponent {

  constructor(root: HTMLElement) {
    super(root);
  }
  
  render(): string {
    return `
        <div id="lookup-area"></div>
    `;
  }

   protected bindEvents(): void {
      const lookupRoot = this.root.querySelector("#lookup-area") as HTMLElement;
      const lookup = new LookupComponent(lookupRoot);
      lookup.mount();
    }
}