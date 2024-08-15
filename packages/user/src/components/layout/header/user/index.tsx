import UserIcon from 'src/assets/icons/user.svg?react';
import withAuth from 'src/components/shared/withAuthHOC.tsx';
import SpeechBubble from './SpeechBubble.tsx';

const UserGreeting = withAuth(() => <p className="text-detail-1">김보민님 반갑습니다</p>);

// TODO: 로그아웃
export default function User() {
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
