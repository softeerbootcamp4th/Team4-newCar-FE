import { RouterProvider } from 'react-router-dom';
import ToasterStack from 'src/components/common/toast/ToasterStack.tsx';
import GlobalErrorBoundary from 'src/components/layout/GlobalErrorBoundary.tsx';
import GlobalFallback from 'src/components/layout/GlobalFallback.tsx';
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
					<RouterProvider router={router} fallbackElement={<GlobalFallback />} />
				</GlobalErrorBoundary>
				<ToasterStack />
			</AppProviders>
			<CasperCursor />
		</>
	);
}
