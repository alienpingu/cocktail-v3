import { routes } from "./routes";
import type { Route } from "./routes";
import { BaseComponent } from "../components/BaseComponent";

export class Router {
  private outlet: HTMLElement;
  private currentPage: BaseComponent | null = null;

  constructor(outlet: HTMLElement) {
    this.outlet = outlet;
    window.addEventListener("popstate", () => this.handleRoute());
    document.addEventListener("click", (e) => this.onLinkClick(e));
  }

  init() {
    this.handleRoute();
  }

  private onLinkClick(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const link = target.closest("a");

    if (link && link.getAttribute("href")?.startsWith("/")) {
      e.preventDefault();
      const href = link.getAttribute("href")!;
      history.pushState({}, "", href);
      this.handleRoute();
    }
  }

  private handleRoute() {
    const path = window.location.pathname;
    const match = this.matchRoute(path);

    if (!match) {
      this.outlet.innerHTML = `<h2>404 - Pagina non trovata</h2>`;
      return;
    }

    if (this.currentPage) {
      this.currentPage.unmount?.();
    }

    const Page = match.route.component;
    const page = new Page(this.outlet);
    page.mount();
    this.currentPage = page;
  }

  private matchRoute(pathname: string): { route: Route; params: Record<string, string> } | null {
    for (const route of routes) {
      const routeParts = route.path.split("/").filter(Boolean);
      const pathParts = pathname.split("/").filter(Boolean);

      if (routeParts.length !== pathParts.length) continue;

      const params: Record<string, string> = {};
      let match = true;

      for (let i = 0; i < routeParts.length; i++) {
        const rp = routeParts[i];
        const pp = pathParts[i];
        if (rp.startsWith(":")) {
          params[rp.slice(1)] = decodeURIComponent(pp);
        } else if (rp !== pp) {
          match = false;
          break;
        }
      }

      if (match) return { route, params };
    }

    return null;
  }
}
