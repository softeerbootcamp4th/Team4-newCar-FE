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
