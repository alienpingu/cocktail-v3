import { getCocktail } from '../api/cocktail-api';
import { getCocktailId, isValidId } from '../../utils/url-utils';
import { renderLoading, renderError, renderNotFound, renderInvalidId } from './app-shell';
import { renderCocktailDetails } from './cocktail-display';

export const loadCocktailDetails = async (): Promise<void> => {
  const id = getCocktailId();

  if (!isValidId(id)) {
    renderInvalidId();
    return;
  }

  renderLoading();

  try {
    const drink = await getCocktail(id!);
    drink ? renderCocktailDetails(drink) : renderNotFound(id!);
  } catch {
    renderError('An error occurred while loading the cocktail. Please check your internet connection and try again.', true);
  }
};
