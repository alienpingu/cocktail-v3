import { Router } from "./router/Router.js";

window.addEventListener("DOMContentLoaded", () => {
 const appRoot = document.getElementById("app")!;
  const router = new Router(appRoot);
  router.init();
});