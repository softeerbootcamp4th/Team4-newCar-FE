import { RouterProvider } from 'react-router-dom';
import ToasterStack from 'src/components/common/toast/ToasterStack.tsx';
import AppProviders from 'src/libs/index.tsx';
import router from 'src/routes/router.tsx';
import CasperCursor from './components/cursor/CasperCursor.tsx';
import useCursor from './hooks/useCursor.ts';

export default function App() {
	useCursor();
	return (
		<>
			<AppProviders>
				{/* TODO: create global loading component */}
				<RouterProvider router={router} fallbackElement={<>loading...</>} />
				<ToasterStack />
			</AppProviders>
			<CasperCursor />
		</>
	);
}
