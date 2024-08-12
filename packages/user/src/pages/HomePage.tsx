import { lazy, Suspense, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import InViewLoadSection from 'src/components/common/InViewLoadSection.tsx';
import EventHero from 'src/components/home/eventHero/index.tsx';
import SECTION_ID from 'src/constants/sectionId.ts';
import scrollToElementId from 'src/utils/scrollToElementId.tsx';

const EventPrizes = lazy(() => import('src/components/home/EventPrizes.tsx'));
const EventSteps = lazy(() => import('src/components/home/eventSteps/index.tsx'));
const FastestQuiz = lazy(() => import('src/components/home/fastestQuiz/index.tsx'));
const QuizHint = lazy(() => import('src/components/home/quizHint/index.tsx'));
const TeamsDescriptions = lazy(() => import('src/components/home/teamsDescriptions/index.tsx'));
const EventGuidelines = lazy(() => import('src/components/home/EventGuidelines.tsx'));

export default function HomePage() {
	const { state } = useLocation();

	useEffect(() => {
		scrollToElementId(state?.sectionId ?? SECTION_ID.HERO);
	}, [state]);

	return (
		<>
			<EventHero />
			<InViewLoadSection<HTMLDivElement> component={EventPrizes} />
			<InViewLoadSection<HTMLDivElement> component={EventSteps} />
			{/* 배너 바로가기 기능 동작을 위해 view port load 하지 않음 */}
			<Suspense>
				<FastestQuiz />
			</Suspense>
			<InViewLoadSection<HTMLDivElement> component={QuizHint} />
			<InViewLoadSection<HTMLDivElement> component={TeamsDescriptions} />
			<InViewLoadSection<HTMLDivElement> component={EventGuidelines} />
		</>
	);
}
