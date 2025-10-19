export const renderHomePage = (): void => {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) return;

  app.innerHTML = `
    <div>
      <h1>Cocktail Search</h1>
      <div>
        <input type="text" id="searchbar" placeholder="Search for a cocktail..." />
        <button id="submit-btn">Search</button>
      </div>
      <div id="results-container"></div>
    </div>
  `;
};

export const renderLoading = (): void => {
  document.body.innerHTML = '<div><p>Loading cocktail...</p></div>';
};

export const renderError = (message: string, canRetry = false): void => {
  const retryButton = canRetry ? '<button id="retry-button">Retry</button>' : '';
  document.body.innerHTML = `
    <div>
      <h1>Error</h1>
      <p>${message}</p>
      ${retryButton}
      <a href="/">← Back to search</a>
    </div>
  `;

  if (canRetry) {
    document.getElementById('retry-button')?.addEventListener('click', () => window.location.reload());
  }
};

export const renderNotFound = (id: string): void => {
  document.body.innerHTML = `
    <div>
      <h1>Cocktail not found</h1>
      <p>The cocktail with ID ${id} was not found in the database.</p>
      <a href="/">← Back to search</a>
    </div>
  `;
};

export const renderInvalidId = (): void => {
  document.body.innerHTML = `
    <div>
      <h1>Invalid Cocktail ID</h1>
      <p>The cocktail ID specified in the URL is not valid.</p>
      <a href="/">← Back to search</a>
    </div>
  `;
};
