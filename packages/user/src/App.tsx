import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'src/components/ui/toaster';
import AppProviders from 'src/libs';
import router from 'src/routes/router';

export default function App() {
	return (
		<AppProviders>
			{/* TODO: create global loading component */}
			<RouterProvider router={router} fallbackElement={<>loading...</>} />
			<Toaster />
		</AppProviders>
	);
}
