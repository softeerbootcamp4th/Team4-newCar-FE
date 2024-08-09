import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Layout from 'src/components/layout/index.tsx';
import RoutePaths from 'src/constants/routePath.ts';
import AuthProvider from 'src/context/auth/index.tsx';
import HomePage from 'src/pages/HomePage.tsx';

const EventPage = lazy(() => import('src/pages/EventPage.tsx'));

const routes: RouteObject[] = [
	{
		path: RoutePaths.Index,
		element: (
			<AuthProvider>
				{/* <LinkShareMetaTag /> */}
				<Layout />
			</AuthProvider>
		),
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: RoutePaths.Event,
				element: (
					// TODO: event page loading component
					<Suspense>
						<EventPage />
					</Suspense>
				),
			},
		],
	},
];

const router = createBrowserRouter(routes);

export default router;
