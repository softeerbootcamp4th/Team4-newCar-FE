import { EventGuidelines, EventPrizes, FastestQuiz } from 'src/components/home';

export default function HomePage() {
	return (
		<>
			<EventPrizes />
			<FastestQuiz />
			<EventGuidelines />
		</>
	);
}
