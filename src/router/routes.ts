import type { BaseComponent } from "../components/BaseComponent.js";
import { HomePage } from "../pages/HomePage.js";
import { SearchPage } from "../pages/SearchPage.js";
import { AboutPage } from "../pages/AboutPage.js";
import { LookupPage } from "../pages/LookupPage.js";
import type { Route } from "../types/index.js";

export const routes: Route[] = [
  { path: "/", component: HomePage },
  { path: "/search", component: SearchPage },
  { path: "/about", component: AboutPage },
  { path: "/lookup/:id", component: LookupPage },
];
