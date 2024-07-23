import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import RoutePaths from 'src/constants/routePath';
import { AppLayout } from 'src/layouts/appLayout';
import { EventPage } from 'src/pages/events/eventPage';

const routes: RouteObject[] = [
	{
		path: RoutePaths.HOME,
		element: <AppLayout />,
		children: [{ path: RoutePaths.EVENTS, element: <EventPage /> }],
	},
	{},
];

const router = createBrowserRouter(routes);

export default router;
