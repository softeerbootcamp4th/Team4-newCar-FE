import { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet, RouteObject } from 'react-router-dom';
import GlobalFallback from 'src/components/layout/fallback/GlobalFallback.tsx';
import LayoutFallback from 'src/components/layout/fallback/LayoutFallback.tsx';
import PageFallback from 'src/components/layout/fallback/PageFallback.tsx';
import RoutePaths from 'src/constants/routePath.ts';
import {
	kakaoRedirectLoader,
	layoutLoader,
	rootLoader,
	shareRedirectLoader,
} from 'src/routes/loader/index.ts';

const AuthProvider = lazy(() => import('src/context/auth/index.tsx'));
const Layout = lazy(() => import('src/components/layout/index.tsx'));
const HomePage = lazy(() => import('src/pages/HomePage.tsx'));
const EventPage = lazy(() => import('src/pages/EventPage.tsx'));
const ErrorPage = lazy(() => import('src/pages/error/ErrorPage.tsx'));
const NotFoundErrorPage = lazy(() => import('src/pages/error/NotFoundErrorPage.tsx'));
const NotStartedEventPage = lazy(() => import('src/pages/NotStartedEventPage.tsx'));

const routes: RouteObject[] = [
	{
		path: RoutePaths.Index,
		loader: rootLoader,
		errorElement: (
			<Suspense>
				<NotStartedEventPage />
			</Suspense>
		),
		element: (
			<Suspense fallback={<GlobalFallback />}>
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
				loader: layoutLoader,
				element: (
					<Suspense fallback={<LayoutFallback />}>
						<AuthProvider>
							<Layout />
						</AuthProvider>
					</Suspense>
				),
				errorElement: (
					<Suspense>
						<ErrorPage />
					</Suspense>
				),
				children: [
					{
						index: true,
						element: (
							<Suspense fallback={<PageFallback />}>
								<HomePage />
							</Suspense>
						),
					},
					{
						path: RoutePaths.Event,
						element: (
							<Suspense fallback={<PageFallback />}>
								<EventPage />
							</Suspense>
						),
					},
				],
			},
			{
				loader: kakaoRedirectLoader,
				path: RoutePaths.KakaoOauthRedirect,
				errorElement: (
					<Suspense fallback={<GlobalFallback />}>
						<ErrorPage />
					</Suspense>
				),
				element: null,
			},
		],
	},
	{
		path: '*',
		element: (
			<Suspense fallback={<GlobalFallback />}>
				<NotFoundErrorPage />
			</Suspense>
		),
	},
];

const router = createBrowserRouter(routes);

export default router;
