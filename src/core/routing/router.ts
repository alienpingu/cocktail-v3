type RouteHandler = () => void | Promise<void>;

interface Route { pattern: RegExp; handler: RouteHandler; }

export class Router {
  private routes: Route[] = [];
  private notFoundHandler: RouteHandler = () => {};

  addRoute(pattern: string, handler: RouteHandler): void {
    this.routes.push({ pattern: new RegExp(pattern), handler });
  }

  setNotFoundHandler(handler: RouteHandler): void {
    this.notFoundHandler = handler;
  }

  async navigate(path: string): Promise<void> {
    const route = this.routes.find(r => r.pattern.test(path));
    await (route ? route.handler : this.notFoundHandler)();
  }

  getCurrentPath(): string {
    return window.location.pathname;
  }
}
