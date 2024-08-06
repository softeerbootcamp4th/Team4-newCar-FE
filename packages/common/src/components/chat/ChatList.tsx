import { PropsWithChildren } from 'react';

export default function ChatList({ children }: PropsWithChildren) {
	return (
		<div className="flex flex-col-reverse justify-end gap-8 px-[26px]">
			{children}
		</div>
	);
}
