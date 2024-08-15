import UserIcon from 'src/assets/icons/user.svg?react';
import TriggerButtonWrapper from 'src/components/common/TriggerButtonWrapper.tsx';
import LoginModal from 'src/components/shared/modal/login/index.tsx';
import useAuth from 'src/hooks/useAuth.tsx';
import SpeechBubble from './SpeechBubble.tsx';

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
					<LoginModal openTrigger={<TriggerButtonWrapper><UserIcon /></TriggerButtonWrapper>} />
				</>
			)}
		</div>
	);
}
