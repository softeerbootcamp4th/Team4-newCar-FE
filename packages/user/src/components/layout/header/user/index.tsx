import UserIcon from 'src/assets/icons/user.svg?react';
import withAuth from 'src/components/shared/withAuthHOC.tsx';
import SpeechBubble from './SpeechBubble.tsx';

const UserGreeting = withAuth(() => <p className="text-detail-1">김보민님 반갑습니다</p>);

export default function User() {
	// TODO: 로그아웃
	return (
		<div className="flex items-center gap-2">
			<UserGreeting
				unauthenticatedDisplay={
					<>
						<SpeechBubble />
						<UserIcon />
					</>
				}
			/>
		</div>
	);
}
