import ChatInput from './input/index.tsx';

export default function ChatInputArea() {
	return (
		<div className="mb-[54px] flex flex-col items-center gap-[5px]">
			{/* Todo: 비속어 작성 횟수 불러오기 */}
			<p className="text-[#FF3C76]">
				비속어 혹은 부적절한 기대평을 5회 이상 작성할 경우, 댓글 작성이 제한됩니다.
			</p>
			<ChatInput />
		</div>
	);
}
