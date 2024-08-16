import UserIcon from 'src/assets/icons/user.svg?react';
import withAuth from 'src/components/shared/withAuthHOC.tsx';
import LogoutButton from './LogoutButton.tsx';
import SpeechBubble from './SpeechBubble.tsx';

const UserGreeting = withAuth(LogoutButton);

// TODO: 로그아웃
export default function AuthButton() {
	return (
		<UserGreeting
			unauthenticatedDisplay={
				<div className="flex items-center gap-2">
					<SpeechBubble />
					<UserIcon />
				</div>
			}
		/>
	);
}
