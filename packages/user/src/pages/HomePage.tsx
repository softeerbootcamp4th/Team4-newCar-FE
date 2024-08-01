import {
	EventGuidelines,
	EventPrizes,
	EventSteps,
	FastestQuiz,
	QuizHint,
	TeamsDescriptions,
} from 'src/components/home';

export default function HomePage() {
	return (
		<>
			<EventPrizes />
			<EventSteps />
			<FastestQuiz />
			<QuizHint />
			<TeamsDescriptions />
			<EventGuidelines />
		</>
	);
}
