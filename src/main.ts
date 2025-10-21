import { Router } from "./router/Router";

window.addEventListener("DOMContentLoaded", (): void => {
  const appRoot = document.getElementById("app")!;
  const router = new Router(appRoot);
  router.init();
});
