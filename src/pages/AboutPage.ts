import { BaseComponent } from "../components/BaseComponent.js";

export class AboutPage extends BaseComponent {
  render(): string {
    return `
      <h1>About</h1>
      <p>Every now and then, I find myself building the same simple search engine for the CocktailDB API. As I keep learning new things, this time I decided to develop it without using any frameworks. My goal is to create a minimal progressive web app (PWA) featuring:</p>
      <ul>
        <li>Virtual routing</li>
        <li>Global state management</li>
        <li>Abstract components</li>
        <li>Minimal use of css</li>
      </ul>
    `;
  }

  protected bindEvents(): void {}
}
