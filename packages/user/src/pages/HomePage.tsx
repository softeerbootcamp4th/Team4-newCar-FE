import { lazy, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LazyLoadSection from 'src/components/common/LazyLoadSection.tsx';
import { EventHero, FastestQuiz } from 'src/components/home/index.ts';
import SECTION_ID from 'src/constants/sectionId.ts';

const EventPrizes = lazy(() => import('src/components/home/EventPrizes.tsx'));
const EventSteps = lazy(() => import('src/components/home/eventSteps/index.tsx'));
const QuizHint = lazy(() => import('src/components/home/quizHint/index.tsx'));
const TeamsDescriptions = lazy(() => import('src/components/home/teamsDescriptions/index.tsx'));
const EventGuidelines = lazy(() => import('src/components/home/EventGuidelines.tsx'));

export default function HomePage() {
	const { state } = useLocation();

	useEffect(() => {
		scrollToSection(state?.sectionId ?? SECTION_ID.HERO);
	}, [state]);

	return (
		<>
			<EventHero />
			<LazyLoadSection<HTMLDivElement> component={EventPrizes} />
			<LazyLoadSection<HTMLDivElement> component={EventSteps} />
			<FastestQuiz />
			<LazyLoadSection<HTMLDivElement> component={QuizHint} />
			<LazyLoadSection<HTMLDivElement> component={TeamsDescriptions} />
			<LazyLoadSection<HTMLDivElement> component={EventGuidelines} />
		</>
	);
}

function scrollToSection(sectionId: string | undefined) {
	if (sectionId) {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			window.history.replaceState({}, '', null);
		}
	}
}
