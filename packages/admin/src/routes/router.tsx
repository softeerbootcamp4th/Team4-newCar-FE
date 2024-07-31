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
			{ path: RoutePaths.ROOT, element: <EventPage />, id: '이벤트 관리' },
			{
				path: RoutePaths.QUIZ_WINNER_DRAW,
				element: <QuizWinnerDraw />,
				id: '추첨하기',
			},
			{
				path: RoutePaths.WINNER_RESULT,
				element: <WinnerResult />,
				id: '당첨자 목록',
			},
		],
	},
];

const router = createBrowserRouter(routes);

export default router;
