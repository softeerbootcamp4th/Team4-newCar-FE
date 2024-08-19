import { PropsWithChildren } from 'react';

export default function TopSection() {
	return (
		<div className="flex flex-col items-center">
			<Highlight>매일 3시 15분!</Highlight>
			<h2 className="mb-2 mt-6">깜짝 선착순 퀴즈 OPEN</h2>
			<p className="text-body-3 text-neutral-200">* 아래 사진은 선착순 퀴즈 팝업 예시입니다</p>
		</div>
	);
}

function Highlight({ children }: PropsWithChildren) {
	return (
		<div className="border-primary rounded-[20px] border-2 px-[21px]">
			<p className="text-body-2 text-primary font-medium">{children}</p>
		</div>
	);
}
