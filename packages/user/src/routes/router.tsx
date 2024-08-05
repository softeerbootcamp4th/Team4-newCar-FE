import { Chat } from '@softeer/common';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Layout from 'src/components/layout/index.tsx';
import RoutePaths from 'src/constants/routePath.ts';
import AuthProvider from 'src/context/auth/index.tsx';
import HomePage from 'src/pages/HomePage.tsx';

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
				element: <HomePage />,
			},
			{
				path: RoutePaths.Event,
				element: <Chat type="leisure" />,
			},
		],
	},
];

const router = createBrowserRouter(routes);

export default router;
