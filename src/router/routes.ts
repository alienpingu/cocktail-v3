import { HomePage } from "../pages/HomePage";
import { SearchPage } from "../pages/SearchPage";
import { AboutPage } from "../pages/AboutPage";
import { LookupPage } from "../pages/LookupPage";
import type { Route } from "../types/index";

export const routes: Route[] = [
  { path: "/", component: HomePage },
  { path: "/search", component: SearchPage },
  { path: "/about", component: AboutPage },
  { path: "/lookup/:id", component: LookupPage},
];
