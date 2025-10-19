import { searchCocktails } from '../api/cocktail-api';
import { renderResults } from './results-list';

export const setupSearch = (): void => {
  const searchbar = document.getElementById('searchbar') as HTMLInputElement;
  const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement;

  const handleSearch = async () => {
    const query = searchbar?.value.trim();
    if (!query) return;

    try {
      const drinks = await searchCocktails(query);
      renderResults(drinks);
    } catch {
      renderResults([]);
    }
  };

  submitBtn?.addEventListener('click', handleSearch);
  searchbar?.addEventListener('keydown', handleSearch);
  searchbar?.addEventListener('keypress', (e) => e.key === 'Enter' && handleSearch());
};
