import { PropsWithChildren } from 'react';

export default function BodyContainer({ children }: PropsWithChildren) {
	return <main>{children}</main>;
}
