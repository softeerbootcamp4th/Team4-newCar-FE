import { RouterProvider } from 'react-router-dom';
import ToasterStack from 'src/components/common/toast/ToasterStack.tsx';
import GlobalErrorBoundary from 'src/components/layout/GlobalErrorBoundary.tsx';
import AppProviders from 'src/libs/index.tsx';
import router from 'src/routes/router.tsx';
import CasperCursor from './components/cursor/CasperCursor.tsx';
import useCursor from './hooks/useCursor.ts';

export default function App() {
	useCursor();
	return (
		<>
			<AppProviders>
				<GlobalErrorBoundary>
					{/* TODO: create global loading component */}
					<RouterProvider router={router} fallbackElement={<>loading...</>} />
				</GlobalErrorBoundary>
				<ToasterStack />
			</AppProviders>
			<CasperCursor />
		</>
	);
}
