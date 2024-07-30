import QuizImages from 'src/components/home/fastestQuiz/QuizImages';
import QUIZ_SECTION_ID from 'src/constants/quizSectionId';
import Description from './Description';
import TopSection from './TopSection';

/** 선착순 퀴즈 설명 섹션 */
export default function FastestQuiz() {
	return (
		<section id={QUIZ_SECTION_ID} className="bg-neutral-700 py-[120px]">
			<div className="gap-15 flex flex-col items-center">
				<TopSection />
				<QuizImages />
				<Description />
			</div>
		</section>
	);
}
