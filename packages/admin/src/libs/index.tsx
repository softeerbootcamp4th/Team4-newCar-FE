import { PropsWithChildren } from 'react';
import QueryProvider from 'src/libs/query';
import { AlertProvider } from 'src/store/provider/AlertProvider';
import { ModalProvider } from 'src/store/provider/ModalProvider';

export default function AppProviders({ children }: PropsWithChildren) {
	return (
		<AlertProvider>
			<ModalProvider>
				<QueryProvider>{children}</QueryProvider>
			</ModalProvider>
		</AlertProvider>
	);
}
