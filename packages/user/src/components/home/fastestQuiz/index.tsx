import QuizImages from 'src/components/home/fastestQuiz/QuizImages';
import Description from './Description';
import TopSection from './TopSection';

/** 선착순 퀴즈 설명 섹션 */
export default function FastestQuiz() {
	return (
		<section className="bg-neutral-700 pt-[110px]">
			<div className="gap-15 flex flex-col items-center">
				<TopSection />
				<QuizImages />
				<Description />
			</div>
		</section>
	);
}
