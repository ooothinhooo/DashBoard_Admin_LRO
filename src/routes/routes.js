import Dashboard from "pages/Dashboard.js";
import config from "../config";

// Layouts
// import { HeaderOnly } from '~/layouts';

// Pages
import {
  AccountManagement,
  ArticleManagement,
  DocumentManagement,
} from "../pages/index.js";

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Dashboard },
  //   { path: config.routes.following, component: Following },
  { path: config.routes.acc, component: AccountManagement },
  { path: config.routes.articles, component: ArticleManagement },
  { path: config.routes.docs, component: DocumentManagement },
  // { path: config.routes.live, component: Live },
  // { path: config.routes.profile, component: Profile },
  // { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  // { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
