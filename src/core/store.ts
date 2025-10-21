type Listener = () => void;

class Store<T extends Record<string, any>> {
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
    this.listeners.forEach((l) => l());
  }

  subscribe(listener: Listener): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }
}

export const GlobalStore = new Store({
  theme: "light",
  counter: 0,
  searchQuery: "",
  cocktails: [] as Array<any>,
  cocktailLookup: null as any,
});