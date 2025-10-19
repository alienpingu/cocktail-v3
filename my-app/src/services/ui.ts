import { SearchBar } from '../components/SearchBar';
import { ResultsContainer } from '../components/ResultsContainer';

export class UIRenderer {
  static renderHomePage(): void {
    const appElement = document.querySelector<HTMLDivElement>('#app');
    if (!appElement) {
      console.error('App element not found');
      return;
    }

    appElement.innerHTML = `
      <div>
        <h1>Cocktail Search</h1>
        ${SearchBar.render()}
        ${ResultsContainer.render()}
      </div>
    `;
  }

  static renderLoadingState(): void {
    document.body.innerHTML = `
      <div>
        <p>Loading cocktail...</p>
      </div>
    `;
  }

  static renderError(message: string, canRetry: boolean = false): void {
    const retryButton = canRetry
      ? '<button id="retry-button">Retry</button>'
      : '';

    document.body.innerHTML = `
      <div>
        <h1>Error</h1>
        <p>${message}</p>
        ${retryButton}
        <a href="/">← Back to search</a>
      </div>
    `;

    if (canRetry) {
      const retryBtn = document.getElementById('retry-button');
      if (retryBtn) {
        retryBtn.addEventListener('click', () => window.location.reload());
      }
    }
  }

  static renderNotFound(id: string): void {
    document.body.innerHTML = `
      <div>
        <h1>Cocktail not found</h1>
        <p>The cocktail with ID ${id} was not found in the database.</p>
        <a href="/">← Back to search</a>
      </div>
    `;
  }

  static renderInvalidId(): void {
    document.body.innerHTML = `
      <div>
        <h1>Invalid Cocktail ID</h1>
        <p>The cocktail ID specified in the URL is not valid.</p>
        <a href="/">← Back to search</a>
      </div>
    `;
  }
}
