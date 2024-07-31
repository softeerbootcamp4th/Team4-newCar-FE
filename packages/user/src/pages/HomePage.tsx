import {
	EventGuidelines,
	EventPrizes,
	EventSteps,
	FastestQuiz,
	QuizHint,
} from 'src/components/home';

export default function HomePage() {
	return (
		<>
			<EventPrizes />
			<EventSteps />
			<FastestQuiz />
			<QuizHint />
			<EventGuidelines />
		</>
	);
}
