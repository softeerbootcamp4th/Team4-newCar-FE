import UserIcon from 'src/assets/icons/user.svg?react';
import useAuth from 'src/hooks/useAuth';
import SpeechBubble from './SpeechBubble';

export default function User() {
	const { user } = useAuth();

	// TODO: 로그인, 로그아웃
	return (
		<div className="flex items-center gap-2">
			{user ? (
				<p className="text-detail-1">김보민님 반갑습니다</p>
			) : (
				<>
					<SpeechBubble />
					<button type="button" aria-label="user-icon" className="p-[10px]">
						<UserIcon />
					</button>
				</>
			)}
		</div>
	);
}
