import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Button } from 'src/components/ui/button';
import RoutePaths from 'src/constants/routePath';
import FastestWinnerDraw from 'src/pages/winner/FastestWinnerDraw';

const routes: RouteObject[] = [
	{
		path: RoutePaths.HOME,
		element: <Button>hi</Button>,
	},
	{
		path: RoutePaths.FASTEST_WINNER_DRAW,
		element: <FastestWinnerDraw />,
	},
];

const router = createBrowserRouter(routes);

export default router;
