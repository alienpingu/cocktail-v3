import { BaseComponent } from "./BaseComponent";

export class LoadingCardComponent extends BaseComponent {
  private index: number;

  constructor(root: HTMLElement, index: number) {
    super(root);
    this.index = index;
  }

  protected bindEvents(): void {}

  render(): string {
    return `
      <div class="card loading-card" data-index="${this.index}">
        <div class="loading-image"></div>
        <div class="loading-text">
          <div class="loading-line loading-line-1"></div>
          <div class="loading-line loading-line-2"></div>
        </div>
      </div>
    `;
  }
}
