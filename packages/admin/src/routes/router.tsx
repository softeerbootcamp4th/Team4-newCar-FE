import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Button } from 'src/components/ui/button';
import RoutePaths from 'src/constants/routePath';

const routes:RouteObject[] = [{
  path: RoutePaths.HOME,
  element: <Button>hi</Button>,
}];

const router = createBrowserRouter(routes);

export default router;
