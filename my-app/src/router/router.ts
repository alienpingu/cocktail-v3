type RouteHandler = () => void;

interface Route {
  pattern: RegExp;
  handler: RouteHandler;
}

export class Router {
  private routes: Route[] = [];
  private notFoundHandler: RouteHandler = () => {
    console.warn('Route not found, redirecting to home');
    window.history.replaceState(null, '', '/');
    this.navigate('/');
  };

  addRoute(pattern: string, handler: RouteHandler): void {
    this.routes.push({
      pattern: new RegExp(pattern),
      handler
    });
  }

  setNotFoundHandler(handler: RouteHandler): void {
    this.notFoundHandler = handler;
  }

  navigate(path: string): void {
    const route = this.routes.find(r => r.pattern.test(path));

    if (route) {
      route.handler();
    } else {
      this.notFoundHandler();
    }
  }

  getCurrentPath(): string {
    return window.location.pathname;
  }

  goBack(): void {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      this.navigate('/');
    }
  }
}
