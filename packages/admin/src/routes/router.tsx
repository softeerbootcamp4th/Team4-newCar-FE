import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Button } from 'src/components/ui/button';
import RoutePaths from 'src/constants/routePath';
import FastestWinner from 'src/pages/FastestWinner';

const routes: RouteObject[] = [
	{
		path: RoutePaths.HOME,
		element: <Button>hi</Button>,
	},
	{
		path: RoutePaths.FASTEST_WINNER,
		element: <FastestWinner />,
	},
];

const router = createBrowserRouter(routes);

export default router;
