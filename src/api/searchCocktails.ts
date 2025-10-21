import type { Cocktail, SearchCocktailsResponse } from "../types/index.js";

const searchCocktails = async (query: string): Promise<Cocktail[]> => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: SearchCocktailsResponse = await response.json();
  return data.drinks || [];
};

export default searchCocktails;
