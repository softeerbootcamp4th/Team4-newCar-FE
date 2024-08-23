import SECTION_ID from 'src/constants/sectionId.ts';
import Description from './Description.tsx';
import QuizImages from './QuizImages.tsx';
import TopSection from './TopSection.tsx';

/** 선착순 퀴즈 설명 섹션 */
export default function FastestQuiz() {
	return (
		<section id={SECTION_ID.QUIZ} className="h-full snap-start bg-neutral-700 pt-[120px]">
			<div className="gap-15 flex flex-col items-center">
				<TopSection />
				<QuizImages />
				<Description />
			</div>
		</section>
	);
}
