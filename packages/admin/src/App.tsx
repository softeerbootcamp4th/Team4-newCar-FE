import { RouterProvider } from 'react-router-dom';
import AppProviders from 'src/libs/index.tsx';
import router from 'src/routes/router.tsx';

export default function App() {
	return (
		<AppProviders>
			{/* TODO: create global loading component */}
			<RouterProvider router={router} fallbackElement={<>loading...</>} />
		</AppProviders>
	);
}
