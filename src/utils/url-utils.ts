export const getCocktailId = (): string | null => {
  const match = window.location.pathname.match(/^\/lookup\/(\d+)$/);
  return match ? match[1] : null;
};

export const isValidId = (id: string | null): boolean =>
  id !== null && /^\d+$/.test(id) && parseInt(id) > 0;

export const isHomeRoute = (): boolean =>
  window.location.pathname === '/' || window.location.pathname === '';

export const isLookupRoute = (): boolean =>
  /^\/lookup\/\d+$/.test(window.location.pathname);

export const buildCocktailUrl = (id: string): string => `/lookup/${id}`;
