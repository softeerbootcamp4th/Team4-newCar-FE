import { QueryClientProvider as Provider, QueryClient } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

const SECOND = 1000;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      retryDelay: SECOND,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * SECOND,
    },
  },
});

export default function QueryProvider({ children }: PropsWithChildren) {
  return (
	<Provider client={queryClient}>
		{children}
	</Provider>
  );
}
