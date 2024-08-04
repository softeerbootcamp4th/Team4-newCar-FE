import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
	EventGuidelines,
	EventHero,
	EventPrizes,
	EventSteps,
	FastestQuiz,
	QuizHint,
	TeamsDescriptions,
} from 'src/components/home';

export default function HomePage() {
	const { state } = useLocation();

	useEffect(() => {
		scrollToSection(state?.sectionId);
	}, [state]);

	return (
		<>
			<EventHero />
			<EventPrizes />
			<EventSteps />
			<FastestQuiz />
			<QuizHint />
			<TeamsDescriptions />
			<EventGuidelines />
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
