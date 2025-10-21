import { BaseComponent } from "../components/BaseComponent";
import { HomePage } from "../pages/HomePage";
import { SearchPage } from "../pages/SearchPage";
import { AboutPage } from "../pages/AboutPage";
import { LookupPage } from "../pages/LookupPage";

export interface Route {
  path: string;
  component: new (root: HTMLElement) => BaseComponent;
}
export const routes: Route[] = [
  { path: "/", component: HomePage },
  { path: "/search", component: SearchPage },
  { path: "/about", component: AboutPage },
  { path: "/lookup/:id", component: LookupPage },
];

