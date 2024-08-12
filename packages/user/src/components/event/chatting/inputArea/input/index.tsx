import { useRef } from 'react';
import OutlinedButton from 'src/components/common/OutlinedButton.tsx';
import useAuth from 'src/hooks/useAuth.tsx';
import Input from './Input.tsx';

interface ChatInputProps {
	onSend: (message: string) => void;
}
export default function ChatInput({ onSend }: ChatInputProps) {
	const { isAuthenticated } = useAuth();
	const inputRef = useRef<HTMLInputElement>(null);

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (inputRef.current?.value) {
			onSend(inputRef.current.value);
			inputRef.current.value = '';
		}
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
