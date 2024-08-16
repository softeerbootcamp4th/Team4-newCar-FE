import BlueBubble from 'src/assets/icons/login-bubble.svg?react';

export default function SpeechBubble() {
	return (
		<div className="relative">
			<BlueBubble />
			<p className="text-detail-2 text-background absolute left-1/2 top-1/2 m-0 w-max -translate-x-1/2 -translate-y-1/2 transform">
				로그인 하시겠어요?
			</p>
		</div>
	);
}
