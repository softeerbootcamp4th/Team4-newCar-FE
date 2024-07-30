import { EventGuidelines, EventPrizes, FastestQuiz, QuizHint } from 'src/components/home';

export default function HomePage() {
	return (
		<>
			<EventPrizes />
			<FastestQuiz />
			<QuizHint />
			<EventGuidelines />
		</>
	);
}
