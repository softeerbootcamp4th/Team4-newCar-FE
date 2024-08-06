import { useRef } from 'react';
import OutlinedButton from 'src/components/common/OutlinedButton.tsx';
import Input from 'src/components/event/chatting/inputArea/input/Input.tsx';
import useAuth from 'src/hooks/useAuth.tsx';

export default function ChatInput() {
	const { isAuthenticated } = useAuth();
	const inputRef = useRef<HTMLInputElement>(null);

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		console.info(`chat: ${inputRef.current?.value}`);
	}

	return (
		<form className="flex items-center gap-4" onSubmit={handleSubmit}>
			<Input ref={inputRef} name="input" required />
			{/* Todo: 로그인해야 채팅 가능하다는 안내 tooltip 추가 */}
			<OutlinedButton type="submit" disabled={!isAuthenticated}>
				보내기
			</OutlinedButton>
		</form>
	);
}
