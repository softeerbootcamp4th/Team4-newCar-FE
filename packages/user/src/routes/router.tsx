import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Layout from 'src/components/layout';
import RoutePaths from 'src/constants/routePath';
import AuthProvider from 'src/context/auth';

const routes: RouteObject[] = [
	{
		path: RoutePaths.Index,
		element: (
			<AuthProvider>
				<Layout />
			</AuthProvider>
		),
		children: [
			{
				index: true,
				element: <>home</>,
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
