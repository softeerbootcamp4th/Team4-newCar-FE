import { PropsWithChildren } from 'react';

export default function ChatList({ children }: PropsWithChildren) {
	return (
		<div className="flex max-h-[1000px] w-full flex-col-reverse justify-end gap-8 overflow-hidden rounded-[10px] bg-neutral-800 px-[26px] py-10">
			{children}
		</div>
	);
}
