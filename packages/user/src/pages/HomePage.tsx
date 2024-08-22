import { lazy, Suspense, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import InViewLoadSection from 'src/components/common/InViewLoadSection.tsx';
import EventHero from 'src/components/home/eventHero/index.tsx';
import SECTION_ID from 'src/constants/sectionId.ts';
import scrollToElementId from 'src/utils/scrollToElementId.ts';

const EventPrizes = lazy(() => import('src/components/home/EventPrizes.tsx'));
const EventSteps = lazy(() => import('src/components/home/eventSteps/index.tsx'));
const FastestQuiz = lazy(() => import('src/components/home/fastestQuiz/index.tsx'));
const QuizHint = lazy(() => import('src/components/home/quizHint/index.tsx'));
const TeamsDescriptions = lazy(() => import('src/components/home/teamsDescriptions/index.tsx'));
const EventGuidelines = lazy(() => import('src/components/home/EventGuidelines.tsx'));

export default function HomePage() {
	const { state } = useLocation();

	useEffect(() => {
		const sectionId = state?.sectionId || SECTION_ID.HERO;
		scrollToElementId({ sectionId, behavior: 'instant' });
	}, [state?.sectionId]);

	return (
		<>
			<EventHero />
			<InViewLoadSection<HTMLDivElement> component={EventPrizes} className="h-[570px]" />
			<InViewLoadSection<HTMLDivElement> component={EventSteps} className="h-[2650px]" />
			{/* 배너 바로가기 기능 동작을 위해 view port load 하지 않음 */}
			<div className="h-[1000px]">
				<Suspense>
					<FastestQuiz />
				</Suspense>
			</div>
			<InViewLoadSection<HTMLDivElement> component={QuizHint} className="h-[1320px]" />
			<InViewLoadSection<HTMLDivElement> component={TeamsDescriptions} className="h-[1000px]" />
			<InViewLoadSection<HTMLDivElement> component={EventGuidelines} className="h-[730px]" />
		</>
	);
}
