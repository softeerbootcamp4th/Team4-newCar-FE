import { PropsWithChildren } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import QueryProvider from 'src/libs/query/index.tsx';

export default function AppProviders({ children }: PropsWithChildren) {
	return (
		<HelmetProvider>
			<QueryProvider>{children}</QueryProvider>
		</HelmetProvider>
	);
}
