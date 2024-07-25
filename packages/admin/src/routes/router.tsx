import { createBrowserRouter, RouteObject } from 'react-router-dom';
import RoutePaths from 'src/constants/routePath';
import AppLayout from 'src/layouts/appLayout';
import EventPage from 'src/pages/events/eventPage';
import QuizWinnerDraw from 'src/pages/winner/QuizWinnerDraw';
import WinnerResult from 'src/pages/winner/WinnerResult';

const routes: RouteObject[] = [
	{
		path: RoutePaths.HOME,
		element: <AppLayout />,
		children: [
			{ index: true, element: <EventPage /> },
			/* 페이지 컴포넌트 추가 */
		],
	},
	{
		path: RoutePaths.QUIZ_WINNER_DRAW,
		element: <AppLayout />,
		children: [
			{ index: true, element: <QuizWinnerDraw /> },
		],
	},
	{
		path: RoutePaths.WINNER_RESULT,
		element: <AppLayout />,
		children: [
			{ index: true, element: <WinnerResult /> },
		],
	},
];

const router = createBrowserRouter(routes);

export default router;
