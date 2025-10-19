import type { Drink, ApiResponse } from '../types/drink';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export class CocktailAPI {
  static async searchCocktails(query: string): Promise<Drink[]> {
    if (!query.trim()) {
      return [];
    }

    try {
      const url = `${BASE_URL}/search.php?s=${encodeURIComponent(query.trim())}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data: ApiResponse = await response.json();
      return data.drinks || [];
    } catch (error) {
      console.error('API call error:', error);
      return [];
    }
  }

  static async getCocktailById(id: string): Promise<Drink | null> {
    if (!id || !/^\d+$/.test(id)) {
      return null;
    }

    try {
      const url = `${BASE_URL}/lookup.php?i=${encodeURIComponent(id)}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data: ApiResponse = await response.json();

      if (data.drinks && data.drinks.length > 0) {
        return data.drinks[0];
      }

      return null;
    } catch (error) {
      console.error('Error loading cocktail:', error);
      throw error;
    }
  }
}
