import { lazy, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import InViewLoadSection from 'src/components/common/InViewLoadSection.tsx';
import EventHero from 'src/components/home/eventHero/index.tsx';

const EventPrizes = lazy(() => import('src/components/home/EventPrizes.tsx'));
const EventSteps = lazy(() => import('src/components/home/eventSteps/index.tsx'));
const QuizHint = lazy(() => import('src/components/home/quizHint/index.tsx'));
const TeamsDescriptions = lazy(() => import('src/components/home/teamsDescriptions/index.tsx'));
const EventGuidelines = lazy(() => import('src/components/home/EventGuidelines.tsx'));
const FastestQuiz = lazy(() => import('src/components/home/fastestQuiz/index.tsx'));

export default function HomePage() {
	const { state } = useLocation();

	useEffect(() => {
		scrollToSection(state?.sectionId);
	}, [state]);

	return (
		<>
			<EventHero />
			<InViewLoadSection<HTMLDivElement> component={EventPrizes} />
			<InViewLoadSection<HTMLDivElement> component={EventSteps} />
			{/* 배너 바로가기 기능 동작을 위해 view port load 하지 않음 */}
			<FastestQuiz />
			<InViewLoadSection<HTMLDivElement> component={QuizHint} />
			<InViewLoadSection<HTMLDivElement> component={TeamsDescriptions} />
			<InViewLoadSection<HTMLDivElement> component={EventGuidelines} />
		</>
	);
}

function scrollToSection(sectionId: string | undefined) {
	if (sectionId) {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', inline: 'center' });
			window.history.replaceState({}, '', null);
		}
	}
}
