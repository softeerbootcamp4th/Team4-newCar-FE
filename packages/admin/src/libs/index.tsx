import { PropsWithChildren } from 'react';
import QueryProvider from 'src/libs/query';

export default function AppProviders({ children }:PropsWithChildren) {
  return <QueryProvider>{children}</QueryProvider>;
}
