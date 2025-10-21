import { routes } from "./routes";
import type { RouteMatch } from "../types/index";
import { BaseComponent } from "../components/BaseComponent";

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
    // Scroll to top immediately when route changes
    window.scrollTo(0, 0);

    const path = window.location.pathname;
    const match = this.matchRoute(path);

    if (!match) {
      this.outlet.innerHTML = "<h2>404 - Pagina non trovata</h2>";
      return;
    }

    if (this.currentPage) {
      // Add fade-out animation to current page
      this.currentPage.unmount();
      this.outlet.style.opacity = '0';
      this.outlet.style.transform = 'translateY(-20px)';

      // Wait for fade-out animation to complete before mounting new page
      setTimeout(() => {
        this.mountNewPage(match);
      }, 300); // Match the CSS animation duration
    } else {
      // No current page, mount immediately
      this.mountNewPage(match);
    }
  }

  private mountNewPage(match: RouteMatch): void {
    const Page = match.route.component;
    const page = new Page(this.outlet, match.params);
    page.mount();
    this.currentPage = page;

    // Apply fade-in animation
    this.outlet.style.transition = 'opacity 0.6s cubic-bezier(.39,.575,.565,1.000), transform 0.6s cubic-bezier(.39,.575,.565,1.000)';
    this.outlet.style.opacity = '1';
    this.outlet.style.transform = 'translateY(0)';
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
