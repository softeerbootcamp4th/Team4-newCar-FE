import { PropsWithChildren } from 'react';

export default function BodyContainer({ children }: PropsWithChildren) {
	return <main className="flex flex-grow flex-col justify-between">{children}</main>;
}
