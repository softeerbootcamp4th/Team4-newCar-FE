import { PropsWithChildren } from 'react';

export default function TriggerButtonLike({ children }: PropsWithChildren) {
	return (
		<div className="text-body-2 bg-skyblue-400 fixed bottom-12 left-12 z-50 flex h-[150px] w-[150px] flex-col items-center justify-center break-keep rounded-[100%] p-4 text-center font-medium text-yellow-900 opacity-90 shadow-lg">
			{children}
		</div>
	);
}
