import { PropsWithChildren } from 'react';

export default function TopSectionContainer({ children }: PropsWithChildren) {
	return <div className="sticky top-0 z-50">{children}</div>;
}
