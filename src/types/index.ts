import type { BaseComponent } from "../components/BaseComponent.js";

export interface ComponentState {
  [key: string]: unknown;
}

export interface EventListenerRecord {
  element: Element;
  type: string;
  listener: EventListener;
}

export interface GlobalStoreState {
  [key: string]: unknown;
}

export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  strTags?: string;
  strCategory?: string;
  strIBA?: string;
  strAlcoholic?: string;
  strGlass?: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
  strIngredient11?: string;
  strIngredient12?: string;
  strIngredient13?: string;
  strIngredient14?: string;
  strIngredient15?: string;
  strMeasure1?: string;
  strMeasure2?: string;
  strMeasure3?: string;
  strMeasure4?: string;
  strMeasure5?: string;
  strMeasure6?: string;
  strMeasure7?: string;
  strMeasure8?: string;
  strMeasure9?: string;
  strMeasure10?: string;
  strMeasure11?: string;
  strMeasure12?: string;
  strMeasure13?: string;
  strMeasure14?: string;
  strMeasure15?: string;
}

export interface Route {
  path: string;
  component: new (root: HTMLElement) => BaseComponent;
}

export interface RouteMatch {
  route: Route;
  params: Record<string, string>;
}

export interface SearchCocktailsResponse {
  drinks: Cocktail[] | null;
}

export interface IngredientData {
  name: string;
  measure?: string;
  imageUrl: string;
}
