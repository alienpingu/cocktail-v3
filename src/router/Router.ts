import { routes } from "./routes.js";
import type { Route, RouteMatch } from "../types/index.js";
import { BaseComponent } from "../components/BaseComponent.js";

export class Router {
  private outlet: HTMLElement;
  private currentPage: BaseComponent | null = null;

  constructor(outlet: HTMLElement) {
    this.outlet = outlet;
    window.addEventListener("popstate", () => this.handleRoute());
    document.addEventListener("click", (e: MouseEvent) => this.onLinkClick(e));
  }

  init(): void {
    this.handleRoute();
  }

  private onLinkClick(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    const link = target.closest("a");

    if (link && link.getAttribute("href")?.startsWith("/")) {
      e.preventDefault();
      const href = link.getAttribute("href")!;
      history.pushState({}, "", href);
      this.handleRoute();
    }
  }

  private handleRoute(): void {
    const path = window.location.pathname;
    const match = this.matchRoute(path);

    if (!match) {
      this.outlet.innerHTML = "<h2>404 - Pagina non trovata</h2>";
      return;
    }

    if (this.currentPage) {
      this.currentPage.unmount();
    }

    const Page = match.route.component;
    const page = new Page(this.outlet);
    page.mount();
    this.currentPage = page;
  }

  private matchRoute(pathname: string): RouteMatch | null {
    for (const route of routes) {
      const routeParts = route.path.split("/").filter(Boolean);
      const pathParts = pathname.split("/").filter(Boolean);

      if (routeParts.length !== pathParts.length) continue;

      const params: Record<string, string> = {};
      let match = true;

      for (let i = 0; i < routeParts.length; i++) {
        const routePart = routeParts[i];
        const pathPart = pathParts[i];

        if (routePart.startsWith(":")) {
          params[routePart.slice(1)] = decodeURIComponent(pathPart);
        } else if (routePart !== pathPart) {
          match = false;
          break;
        }
      }

      if (match) return { route, params };
    }

    return null;
  }
}
