import { RouterProvider } from 'react-router-dom';
import ToasterStack from 'src/components/common/toast/ToasterStack.tsx';
import CasperCursor from 'src/components/layout/CasperCursor.tsx';
import GlobalErrorBoundary from 'src/components/layout/GlobalErrorBoundary.tsx';
import GlobalFallback from 'src/components/layout/fallback/GlobalFallback.tsx';
import useCursor from 'src/hooks/useCursor.ts';
import AppProviders from 'src/libs/index.tsx';
import router from 'src/routes/router.tsx';

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
