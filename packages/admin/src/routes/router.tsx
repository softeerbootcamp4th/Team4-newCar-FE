import { createBrowserRouter, RouteObject } from 'react-router-dom';
import RoutePaths from 'src/constants/routePath.ts';
import AppLayout from 'src/layouts/appLayout.tsx';
import EventPage from 'src/pages/events/EventsPage.tsx';
import LoginPage from 'src/pages/start/LoginPage.tsx';
import RaceWinnerDraw from 'src/pages/winner/RaceWinnerDraw.tsx';
import WinnerResult from 'src/pages/winner/WinnerResult.tsx';

const routes: RouteObject[] = [
	{
		path: RoutePaths.ROOT,
		element: <AppLayout />,
		children: [
			{ path: RoutePaths.ROOT, element: <LoginPage />, id: '로그인' },
			{ path: RoutePaths.EVENT_PAGE, element: <EventPage />, id: '이벤트 관리' },
			{
				path: RoutePaths.RACE_WINNER_DRAW,
				element: <RaceWinnerDraw />,
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
