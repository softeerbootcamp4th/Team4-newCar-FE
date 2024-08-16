import UserIcon from 'src/assets/icons/user.svg?react';
import withAuth from 'src/components/shared/withAuthHOC.tsx';
import LogoutButton from './LogoutButton.tsx';
import SpeechBubble from './SpeechBubble.tsx';

export default function AuthButton() {
	const UserGreeting = withAuth(LogoutButton);

	return <UserGreeting unauthenticatedDisplay={<UnauthButton />} />;
}

function UnauthButton() {
	return <div className="flex items-center gap-2">
	<SpeechBubble />
	<UserIcon />
        </div>;
}
