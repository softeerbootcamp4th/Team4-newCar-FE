import { useRef } from 'react';
import OutlinedButton from 'src/components/common/OutlinedButton.tsx';
import withAuth from 'src/components/shared/withAuthHOC.tsx';
import useAuth from 'src/hooks/useAuth.tsx';
import { useToast } from 'src/hooks/useToast.ts';
import Input from './Input.tsx';

const DISABLED_CHATTING_TOAST_DESCRIPTION = '로그인 후 채팅에 참여할 수 있습니다!';
interface ChatInputProps {
	onSend: (message: string) => void;
}
export default function ChatInput({ onSend }: ChatInputProps) {
	const { toast } = useToast();
	const { isAuthenticated } = useAuth();

	const inputRef = useRef<HTMLInputElement>(null);

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const disabledChatting = !isAuthenticated;

		if (disabledChatting) {
			toast({ description: DISABLED_CHATTING_TOAST_DESCRIPTION });
			return;
		}

		if (inputRef.current?.value) {
			onSend(inputRef.current.value);
			inputRef.current.value = '';
		}
	}

	const ProtectedWrapper = withAuth(() => <OutlinedButton type="submit">보내기</OutlinedButton>);

	return (
		<form className="flex items-center gap-4" onSubmit={handleSubmit}>
			<Input ref={inputRef} name="input" required />
			<ProtectedWrapper
				unauthenticatedDisplay={<OutlinedButton>로그인하고 채팅 보내기</OutlinedButton>}
			/>
		</form>
	);
}
