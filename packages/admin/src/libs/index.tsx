import { PropsWithChildren } from 'react';
import QueryProvider from 'src/libs/query/index.tsx';
import { AlertProvider } from 'src/store/provider/AlertProvider.tsx';
import { ModalProvider } from 'src/store/provider/ModalProvider.tsx';

export default function AppProviders({ children }: PropsWithChildren) {
	return (
		<AlertProvider>
			<ModalProvider>
				<QueryProvider>{children}</QueryProvider>
			</ModalProvider>
		</AlertProvider>
	);
}
