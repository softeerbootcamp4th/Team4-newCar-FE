import { RouterProvider } from 'react-router-dom';
import AppProviders from 'src/libs/index.tsx';
import router from 'src/routes/router.tsx';

export default function App() {
	return (
		<AppProviders>
			<RouterProvider router={router} fallbackElement={<>loading...</>} />
		</AppProviders>
	);
}
