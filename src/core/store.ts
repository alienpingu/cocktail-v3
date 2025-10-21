import type { GlobalStoreState, Cocktail } from "../types/index";

type Listener = () => void;

interface StoreState extends GlobalStoreState {
  theme: string;
  counter: number;
  searchQuery: string;
  cocktails: Cocktail[];
  cocktailLookup: Cocktail | null;
}

class Store<T extends Record<string, unknown>> {
  private state: T;
  private listeners: Listener[] = [];

  constructor(initialState: T) {
    this.state = { ...initialState };
  }

  getState(): T {
    return { ...this.state };
  }

  setState(partial: Partial<T>): void {
    this.state = { ...this.state, ...partial };
    this.listeners.forEach(listener => listener());
  }

  subscribe(listener: Listener): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }
}

export const GlobalStore = new Store<StoreState>({
  theme: "light",
  counter: 0,
  searchQuery: "",
  cocktails: [],
  cocktailLookup: null,
});
