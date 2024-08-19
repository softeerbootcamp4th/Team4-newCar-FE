import { Suspense } from 'react';
import { createBrowserRouter, Outlet, RouteObject } from 'react-router-dom';
import Layout from 'src/components/layout/index.tsx';
import LayoutSuspenseFallback from 'src/components/layout/LayoutSuspenseFallback.tsx';
import RoutePaths from 'src/constants/routePath.ts';
import AuthProvider from 'src/context/auth/index.tsx';
import {
	ErrorPage,
	EventPage,
	HomePage,
	KakaoRedirectPage,
	NotFoundErrorPage,
	NotStartedEventPage,
} from 'src/pages/index.ts';

import indexLoader from 'src/routes/loader/index.ts';
import shareRedirectLoader from 'src/routes/loader/share-redirect.ts';

const routes: RouteObject[] = [
	{
		path: RoutePaths.Index,
		loader: indexLoader,
		errorElement: <NotStartedEventPage />,
		element: (
			<Suspense fallback={<LayoutSuspenseFallback />}>
				<Outlet />
			</Suspense>
		),
		children: [
			{
				path: '/:id',
				loader: shareRedirectLoader,
				element: null,
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
			{
				path: RoutePaths.KakaoOauthRedirect,
				errorElement: <ErrorPage />,
				element: <KakaoRedirectPage />,
			},
		],
	},
	{ path: '*', element: <NotFoundErrorPage /> },
];

const router = createBrowserRouter(routes);

export default router;
