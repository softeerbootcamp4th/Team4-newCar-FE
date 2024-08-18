import { Suspense } from 'react';
import { createBrowserRouter, Outlet, RouteObject } from 'react-router-dom';
import Layout from 'src/components/layout/index.tsx';
import LayoutSuspenseFallback from 'src/components/layout/LayoutSuspenseFallback.tsx';
import RoutePaths from 'src/constants/routePath.ts';
import AuthProvider from 'src/context/auth/index.tsx';
import ErrorPage from 'src/pages/ErrorPage.tsx';
import EventPage from 'src/pages/EventPage.tsx';
import HomePage from 'src/pages/HomePage.tsx';
import KakaoRedirectPage from 'src/pages/KakaoRedirectPage.tsx';
import NotFoundErrorPage from 'src/pages/NotFoundErrorPage.tsx';
import NotStartedEventErrorPage from 'src/pages/NotStartedEventErrorPage.tsx';
import ShareRedirectPage from 'src/pages/ShareRedirectPage.tsx';
import indexLoader from 'src/routes/loader/index.ts';

const routes: RouteObject[] = [
	{
		path: RoutePaths.Index,
		loader: indexLoader,
		errorElement: <NotStartedEventErrorPage />,
		element: (
			<Suspense fallback={<LayoutSuspenseFallback />}>
				<Outlet />
			</Suspense>
		),
		children: [
			{
				path: '/:id',
				element: <ShareRedirectPage />,
			},
			{
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
		],
	},
	{ path: '*', element: <NotFoundErrorPage /> },
];

const router = createBrowserRouter(routes);

export default router;
