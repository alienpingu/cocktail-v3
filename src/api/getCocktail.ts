import type { Cocktail } from "../types/index";

export interface LookupCocktailResponse {
  drinks: Cocktail[] | null;
}

const getCocktail = async (id: string): Promise<Cocktail | null> => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${encodeURIComponent(id)}`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: LookupCocktailResponse = await response.json();
  return data.drinks ? data.drinks[0] : null;
};

export default getCocktail;
