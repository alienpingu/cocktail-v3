import { BaseComponent } from "../components/BaseComponent";

export class HomePage extends BaseComponent {
  render(): string {
    return `
      <h1>CocktailKit</h1>
      <p>Welcome to CocktailKit, your go-to app for exploring and discovering cocktails!</p>
      <small>Built with TypeScript and Vanilla JS</small>
    `;
  }
}
