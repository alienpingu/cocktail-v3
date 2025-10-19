import { CocktailAPI } from '../services/api';
import { UIRenderer } from '../services/ui';
import { URLUtils } from '../services/url-utils';
import { renderDetails } from './CocktailDetails';

export class CocktailLookup {
  public static async loadCocktailDetails(): Promise<void> {
    const id = URLUtils.getCocktailIdFromPath();

    if (!URLUtils.isValidCocktailId(id)) {
      UIRenderer.renderInvalidId();
      return;
    }

    UIRenderer.renderLoadingState();

    try {
      const drink = await CocktailAPI.getCocktailById(id!);

      if (drink) {
        renderDetails(drink);
      } else {
        UIRenderer.renderNotFound(id!);
      }
    } catch (error) {
      UIRenderer.renderError(
        'An error occurred while loading the cocktail. Please check your internet connection and try again.',
        true
      );
    }
  }
}

export async function loadCocktailDetails(): Promise<void> {
  await CocktailLookup.loadCocktailDetails();
}
