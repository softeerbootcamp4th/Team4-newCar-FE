import ArrowLeftIcon from 'src/assets/icons/arrow-left.svg?react';
import ScrollToQuizSection from 'src/constants/quizSectionId';

export default function ScrollToQuizButton() {
	const handleClick = () => {
		const element = document.getElementById(ScrollToQuizSection);

		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<button type="button" onClick={handleClick} className="py-2.5 px-5 inline-flex gap-2.5 items-center active:opacity-100 hover:opacity-80 disabled:opacity-40">
			<p className="text-foreground text-detail-2 font-medium">보러가기</p>
			<ArrowLeftIcon />
		</button>
	);
}
