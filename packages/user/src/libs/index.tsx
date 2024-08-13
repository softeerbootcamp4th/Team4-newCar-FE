import { PropsWithChildren } from 'react';

import QueryProvider from 'src/libs/query/index.tsx';

export default function AppProviders({ children }: PropsWithChildren) {
	return (
			<QueryProvider>{children}</QueryProvider>
	);
}
