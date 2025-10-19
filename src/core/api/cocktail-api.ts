import type { Cocktail, ApiResponse } from '../../types/cocktail';

const API_BASE = 'https://www.thecocktaildb.com/api/json/v1/1';

export const searchCocktails = async (query: string): Promise<Cocktail[]> => {
  if (!query?.trim()) return [];
  try {
    const response = await fetch(`${API_BASE}/search.php?s=${encodeURIComponent(query.trim())}`);
    const data: ApiResponse = await response.json();
    return data.drinks || [];
  } catch {
    return [];
  }
};

export const getCocktail = async (id: string): Promise<Cocktail | null> => {
  if (!id || !/^\d+$/.test(id)) return null;
  try {
    const response = await fetch(`${API_BASE}/lookup.php?i=${encodeURIComponent(id)}`);
    const data: ApiResponse = await response.json();
    return data.drinks?.[0] || null;
  } catch {
    return null;
  }
};
