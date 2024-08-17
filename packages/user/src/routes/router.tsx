import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Layout from 'src/components/layout/index.tsx';
import RoutePaths from 'src/constants/routePath.ts';
import AuthProvider from 'src/context/auth/index.tsx';
import ErrorPage from 'src/pages/ErrorPage.tsx';
import EventPage from 'src/pages/EventPage.tsx';
import HomePage from 'src/pages/HomePage.tsx';
import KakaoRedirectPage from 'src/pages/KakaoRedirectPage.tsx';
import NotFoundErrorPage from 'src/pages/NotFoundErrorPage.tsx';

const routes: RouteObject[] = [
	{
		path: RoutePaths.Index,
		element: (
			<AuthProvider>
				<Layout />
			</AuthProvider>
		),
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: RoutePaths.Event,
				element: <EventPage />,
			},
		],
	},
	{ path: RoutePaths.KakaoOauthRedirect, element: <KakaoRedirectPage /> },
	{ path: '*', element: <NotFoundErrorPage /> },
];

const router = createBrowserRouter(routes);

export default router;
