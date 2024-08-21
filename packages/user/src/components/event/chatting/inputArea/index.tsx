import { PropsWithChildren } from 'react';

export default function ChatInputArea({ children }: PropsWithChildren) {
	return (
		<div className="mb-[54px] flex flex-col items-center gap-3">
			<p className="text-detail-2 text-[#FF3C76]">
				비속어 혹은 부적절한 기대평을 작성할 경우, 댓글 작성이 제한될 수 있습니다.
			</p>
			{children}
		</div>
	);
}
