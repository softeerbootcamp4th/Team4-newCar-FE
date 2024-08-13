import { lazy, Suspense, useEffect, useState } from 'react';
import TriggerButtonWrapper from 'src/components/common/TriggerButtonWrapper.tsx';
import LoginModal from 'src/components/shared/modal/login/index.tsx';
import useAuth from 'src/hooks/useAuth.tsx';
import TriggerButtonLike from './TriggerButtonLike.tsx';

const FCFSModal = lazy(() => import('./FCFSModal.tsx'));

const EVENT_OPEN_HOUR = 15;
const EVENT_OPEN_MINUTE = 15;

export default function FCFSFloatingButtonController() {
	const { isAuthenticated } = useAuth();
	const shouldLoadComponent = useEventActivation(EVENT_OPEN_HOUR, EVENT_OPEN_MINUTE);

	// 설정한 시각 이전에는 버튼 노출하지 않음
	if (!shouldLoadComponent) {
		return null;
	}

	// 로그인하지 않은 유저에게는 로그인 모달 트리거 버튼 노출
	if (!isAuthenticated) {
		return (
			<LoginModal
				openTrigger={
					<TriggerButtonWrapper>
						<TriggerButtonLike>
							<p className="text-heading-8 text-foreground font-bold">로그인</p>하고 퀴즈 풀기
						</TriggerButtonLike>
					</TriggerButtonWrapper>
				}
			/>
		);
	}

	// 로그인한 유저에게는 선착순 퀴즈 모달 트리거 버튼 노출
	return (
		<Suspense fallback={null}>
			<FCFSModal
				openTrigger={
					<TriggerButtonWrapper>
						<TriggerButtonLike>
							선착순 퀴즈 <p className="text-heading-8 text-foreground font-extrabold">OPEN</p>
						</TriggerButtonLike>
					</TriggerButtonWrapper>
				}
			/>
		</Suspense>
	);
}

/** component hook */
function useEventActivation(eventHour: number, eventMinute: number) {
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if (isEventActive(eventHour, eventMinute)) {
			setIsActive(true);
		} else {
			const remainingTime = calculateTimeUntilEvent(eventHour, eventMinute);
			const timer = setTimeout(() => setIsActive(true), remainingTime);
			return () => clearTimeout(timer);
		}
	}, [eventHour, eventMinute]);

	return isActive;
}

/** utils */
function isEventActive(hour: number, minute: number) {
	const currentTime = new Date();
	const currentHour = currentTime.getHours();
	const currentMinute = currentTime.getMinutes();

	return currentHour > hour || (currentHour === hour && currentMinute >= minute);
}

function calculateTimeUntilEvent(hour: number, minute: number): number {
	const currentTime = new Date();
	const eventTime = new Date(
		currentTime.getFullYear(),
		currentTime.getMonth(),
		currentTime.getDate(),
		hour,
		minute,
		0,
	).getTime();

	return eventTime - currentTime.getTime();
}