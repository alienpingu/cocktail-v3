import type { Drink } from '../types/drink';
import { CocktailAPI } from '../services/api';
import { renderResults } from './ResultsContainer';

export class SearchBar {
  private searchbar: HTMLInputElement | null = null;
  private submitBtn: HTMLButtonElement | null = null;

  constructor() {
    this.initializeElements();
    this.setupEventListeners();
  }

  private initializeElements(): void {
    this.searchbar = document.getElementById('searchbar') as HTMLInputElement;
    this.submitBtn = document.getElementById('submit-btn') as HTMLButtonElement;
  }

  private setupEventListeners(): void {
    this.submitBtn?.addEventListener('click', () => this.handleSearch());
  }

  private async handleSearch(): Promise<void> {
    const query = this.searchbar?.value.trim();
    if (!query) return;

    try {
      const drinks: Drink[] = await CocktailAPI.searchCocktails(query);
      renderResults(drinks);
    } catch (error) {
      console.error('Search error:', error);
      renderResults([]);
    }
  }

  public static render(): string {
    return `
      <div>
        <input type="text" id="searchbar" placeholder="Search for a cocktail..." />
        <button id="submit-btn">Search</button>
      </div>
    `;
  }
}

export function setupSearchbar(): void {
  new SearchBar();
}
