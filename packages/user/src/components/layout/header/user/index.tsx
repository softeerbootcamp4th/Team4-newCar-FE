import UserIcon from 'src/assets/icons/user.svg?react';
import withAuth from 'src/components/shared/withAuthHOC.tsx';
import useAuth from 'src/hooks/useAuth.tsx';
import SpeechBubble from './SpeechBubble.tsx';

const UserGreeting = withAuth(({ name }: { name: string }) => (
	<p className="text-detail-1">{name}님 반갑습니다</p>
));

// TODO: 로그아웃
export default function User() {
	const { user } = useAuth();
	return (
		<UserGreeting
			name={user?.name ?? '캐스퍼'}
			unauthenticatedDisplay={
				<div className="flex items-center gap-2">
					<SpeechBubble />
					<UserIcon />
				</div>
			}
		/>
	);
}
