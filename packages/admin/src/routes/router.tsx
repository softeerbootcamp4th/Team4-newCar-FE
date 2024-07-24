import { createBrowserRouter, RouteObject } from 'react-router-dom';
import RoutePaths from 'src/constants/routePath';
import AppLayout from 'src/layouts/appLayout';
import EventPage from 'src/pages/events/eventPage';

const routes: RouteObject[] = [
	{
		path: RoutePaths.HOME,
		element: <AppLayout />,
		children: [
			{ index: true, element: <EventPage /> },
			/* 페이지 컴포넌트 추가 */
		],
	},
	{},
];

const router = createBrowserRouter(routes);

export default router;
