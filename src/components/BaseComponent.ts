import { GlobalStore } from "../core/store.js";

export abstract class BaseComponent {
  protected root: HTMLElement;
  protected state: Record<string, any> = {};
  private eventListeners: Array<{ element: Element; type: string; listener: EventListener }> = [];
  private unsubscribeGlobal?: () => void;

  constructor(root: HTMLElement) {
    this.root = root;
  }

  abstract render(): string;

  mount(): void {
    this.root.innerHTML = this.render();
    this.bindEvents();

    this.unsubscribeGlobal?.(); // se già iscritta, la resetta
    this.unsubscribeGlobal = GlobalStore.subscribe(() => this.onGlobalStateChange());
  }

  protected onGlobalStateChange(): void {
    this.mount();
  }

  protected bindEvents(): void {}

  protected addEventListener(element: Element, type: string, listener: EventListener): void {
    element.addEventListener(type, listener);
    this.eventListeners.push({ element, type, listener });
  }

  unmount(): void {
    this.onUnmount();
    for (const { element, type, listener } of this.eventListeners) {
      element.removeEventListener(type, listener);
    }
    this.eventListeners = [];

    this.unsubscribeGlobal?.();
    this.root.innerHTML = "";
  }

  protected onUnmount(): void {}

  protected getGlobalState() {
    return GlobalStore.getState();
  }

  protected setGlobalState(partial: Partial<ReturnType<typeof GlobalStore.getState>>) {
    GlobalStore.setState(partial);
  }
}
