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
		<button
			type="button"
			onClick={handleClick}
			className="inline-flex min-w-max items-center gap-2.5 px-5 py-2.5 hover:opacity-80 active:opacity-100 disabled:opacity-40"
		>
			<p className="text-foreground text-detail-2 font-medium">보러가기</p>
			<ArrowLeftIcon />
		</button>
	);
}
