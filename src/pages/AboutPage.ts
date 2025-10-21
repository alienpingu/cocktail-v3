import { BaseComponent } from "../components/BaseComponent";

export class AboutPage extends BaseComponent {
  render(): string {
    return `
      <h1>About</h1>
      <p>Lorem ipsum</p>
    `;
  }

  protected bindEvents(): void {}
}
