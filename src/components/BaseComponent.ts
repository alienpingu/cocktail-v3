import { GlobalStore } from "../core/store.js";
import type { ComponentState, EventListenerRecord, GlobalStoreState } from "../types/index.js";

export abstract class BaseComponent {
  protected root: HTMLElement;
  protected state: ComponentState = {};
  private eventListeners: EventListenerRecord[] = [];
  private unsubscribeGlobal?: () => void;

  constructor(root: HTMLElement) {
    this.root = root;
  }

  abstract render(): string;

  mount(): void {
    this.root.innerHTML = this.render();
    this.bindEvents();
    this.unsubscribeGlobal?.();
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
    this.eventListeners.forEach(({ element, type, listener }) => {
      element.removeEventListener(type, listener);
    });
    this.eventListeners = [];
    this.unsubscribeGlobal?.();
    this.root.innerHTML = "";
  }

  protected onUnmount(): void {}

  protected getGlobalState(): GlobalStoreState {
    return GlobalStore.getState();
  }

  protected setGlobalState(partial: Partial<GlobalStoreState>): void {
    GlobalStore.setState(partial);
  }
}
