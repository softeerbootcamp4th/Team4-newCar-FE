import { createBrowserRouter, RouteObject } from 'react-router-dom';
import RoutePaths from 'src/constants/routePath';
import AppLayout from 'src/layouts/appLayout';
import EventPage from 'src/pages/events/EventsPage';
import QuizWinnerDraw from 'src/pages/winner/QuizWinnerDraw';
import WinnerResult from 'src/pages/winner/WinnerResult';

const routes: RouteObject[] = [
	{
		path: RoutePaths.ROOT,
		element: <AppLayout />,
		children: [
			{ index: true, element: <EventPage /> },
			{
				path: RoutePaths.QUIZ_WINNER_DRAW,
				element: <QuizWinnerDraw />,
			},
			{
				path: RoutePaths.WINNER_RESULT,
				element: <WinnerResult />,
			},
		],
	},
];

const router = createBrowserRouter(routes);

export default router;
