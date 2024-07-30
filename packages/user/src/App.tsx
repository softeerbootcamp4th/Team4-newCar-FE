import { RouterProvider } from 'react-router-dom';
import ToasterStack from 'src/components/common/toast/ToasterStack';
import AppProviders from 'src/libs';
import router from 'src/routes/router';

export default function App() {
	return (
		<AppProviders>
			{/* TODO: create global loading component */}
			<RouterProvider router={router} fallbackElement={<>loading...</>} />
			<ToasterStack />
		</AppProviders>
	);
}
