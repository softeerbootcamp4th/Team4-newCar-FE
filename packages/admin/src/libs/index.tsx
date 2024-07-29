import { PropsWithChildren } from 'react';
import QueryProvider from 'src/libs/query';
import { ModalProvider } from 'src/store/provider/ModalProvider';

export default function AppProviders({ children }: PropsWithChildren) {
	return (
		<ModalProvider>
			<QueryProvider>{children}</QueryProvider>;
		</ModalProvider>
	);
}
