import { PropsWithChildren } from 'react';

export default function BodyContainer({ children }: PropsWithChildren) {
	return <main className="container flex-grow">{children}</main>;
}
