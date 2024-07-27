import { useRef } from 'react';
import ChatInput from 'src/components/event/chat/inputbar/ChatInput';
import ChatSubmitButton from 'src/components/event/chat/inputbar/ChatSubmitButton';

export default function ChatInputbar() {
	const inputRef = useRef<HTMLInputElement>(null);

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		console.info(`chat: ${inputRef.current?.value}`);
	}

	return (
		<form className="flex items-center gap-4" onSubmit={handleSubmit}>
			<ChatInput ref={inputRef} name="input" required />
			<ChatSubmitButton type="submit" />
		</form>
	);
}
