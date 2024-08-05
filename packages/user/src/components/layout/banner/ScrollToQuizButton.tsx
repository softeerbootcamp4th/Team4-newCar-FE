import { useNavigate } from 'react-router-dom';
import ArrowLeftIcon from 'src/assets/icons/arrow-left.svg?react';
import QUIZ_SECTION_ID from 'src/constants/quizSectionId.ts';
import RoutePaths from 'src/constants/routePath.ts';

export default function ScrollToQuizButton() {
	const navigate = useNavigate();

	const handleClick = () =>
		navigate(RoutePaths.Home, {
			state: {
				sectionId: QUIZ_SECTION_ID,
			},
		});

	return (
		<button
			type="button"
			onClick={handleClick}
			className="inline-flex min-w-max items-center gap-2.5 px-5 py-2.5 hover:opacity-80 active:opacity-100 disabled:opacity-40"
		>
			<p className="text-detail-2 font-medium">보러가기</p>
			<ArrowLeftIcon />
		</button>
	);
}
