import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Button } from 'src/components/ui/button';
import RoutePaths from 'src/constants/routePath';
import QuizWinnerDraw from 'src/pages/winner/QuizWinnerDraw';

const routes: RouteObject[] = [
	{
		path: RoutePaths.HOME,
		element: <Button>hi</Button>,
	},
	{
		path: RoutePaths.QUIZ_WINNER_DRAW,
		element: <QuizWinnerDraw />,
	},
];

const router = createBrowserRouter(routes);

export default router;
