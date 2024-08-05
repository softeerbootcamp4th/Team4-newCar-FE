import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Layout from 'src/components/layout';
import LinkShareMetaTag from 'src/components/shared/linkShare/LinkShareMetaTag';
import RoutePaths from 'src/constants/routePath';
import AuthProvider from 'src/context/auth';
import HomePage from 'src/pages/HomePage';

const routes: RouteObject[] = [
	{
		path: RoutePaths.Index,
		element: (
			<AuthProvider>
				<LinkShareMetaTag />
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
				element: <>event</>,
			},
		],
	},
];

const router = createBrowserRouter(routes);

export default router;
