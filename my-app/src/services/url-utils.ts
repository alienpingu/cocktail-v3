export class URLUtils {
  static getCocktailIdFromPath(): string | null {
    const match = window.location.pathname.match(/^\/lookup\/(\d+)$/);
    return match ? match[1] : null;
  }

  static isValidCocktailId(id: string | null): boolean {
    return id !== null && /^\d+$/.test(id) && parseInt(id) > 0;
  }

  static isHomeRoute(): boolean {
    return window.location.pathname === '/' || window.location.pathname === '';
  }

  static isLookupRoute(): boolean {
    return /^\/lookup\/\d+$/.test(window.location.pathname);
  }

  static buildCocktailUrl(id: string): string {
    return `/lookup/${id}`;
  }
}
