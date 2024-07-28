import UserIcon from 'src/assets/icons/user.svg?react';
import SpeechBubble from 'src/components/layout/top/header/user/SpeechBubble';
import useAuth from 'src/hooks/useAuth';

export default function User() {
	const { user } = useAuth();

	// TODO: 로그인, 로그아웃

	return (
		<div className="flex items-center gap-2">
			{user ? (
				<p>{user.name}님 반갑습니다</p>
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
