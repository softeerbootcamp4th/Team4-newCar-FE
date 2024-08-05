import { useRef } from 'react';
import OutlinedButton from 'src/components/common/OutlinedButton.tsx';
import ChatInput from 'src/components/event/chat/inputbar/ChatInput.tsx';

export default function ChatInputbar() {
	const inputRef = useRef<HTMLInputElement>(null);

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		console.info(`chat: ${inputRef.current?.value}`);
	}

	return (
		<form className="flex items-center gap-4" onSubmit={handleSubmit}>
			<ChatInput ref={inputRef} name="input" required />
			<OutlinedButton type="submit">보내기</OutlinedButton>
		</form>
	);
}
