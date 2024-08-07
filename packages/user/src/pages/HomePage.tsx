import { Suspense, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LazyLoadSection from 'src/components/common/LazyLoadSection.tsx';
import { EventHero } from 'src/components/home/index.ts';

// const EventPrizes = lazy(() => import('src/components/home/EventPrizes.tsx'));
// const EventSteps = lazy(() => import('src/components/home/eventSteps/index.tsx'));
// const FastestQuiz = lazy(() => import('src/components/home/fastestQuiz/index.tsx'));
// const QuizHint = lazy(() => import('src/components/home/quizHint/index.tsx'));
// const TeamsDescriptions = lazy(() => import('src/components/home/teamsDescriptions/index.tsx'));
// const EventGuidelines = lazy(() => import('src/components/home/EventGuidelines.tsx'));

export default function HomePage() {
	const { state } = useLocation();

	useEffect(() => {
		scrollToSection(state?.sectionId);
	}, [state]);

	return (
		<>
			<EventHero />
			<Suspense>
			<LazyLoadSection<HTMLDivElement> loader={() => import('src/components/home/EventPrizes.tsx')} />
			</Suspense>
			<Suspense>
			<LazyLoadSection<HTMLDivElement> loader={() => import('src/components/home/eventSteps/index.tsx')} />
			</Suspense>
			<Suspense>
			<LazyLoadSection<HTMLDivElement> loader={() => import('src/components/home/fastestQuiz/index.tsx')} />
			</Suspense>
			<Suspense>
			<LazyLoadSection<HTMLDivElement> loader={() => import('src/components/home/quizHint/index.tsx')} />
			</Suspense>
			<Suspense>
			<LazyLoadSection<HTMLDivElement> loader={() => import('src/components/home/teamsDescriptions/index.tsx')} />
			</Suspense>
			<Suspense>
			<LazyLoadSection<HTMLDivElement> loader={() => import('src/components/home/EventGuidelines.tsx')} />
			</Suspense>
		</>
	);
}

function scrollToSection(sectionId: string | undefined) {
	if (sectionId) {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			window.history.replaceState({}, '');
		}
	}
}
