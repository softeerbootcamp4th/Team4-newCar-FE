import { createBrowserRouter, RouteObject } from 'react-router-dom';
import RoutePaths from 'src/constants/routePath';

const routes:RouteObject[] = [{
  path: RoutePaths.HOME,
  element: <>home</>,
}];

const router = createBrowserRouter(routes);

export default router;
