import HintCards from './HintCards';

/** 선착순 퀴즈 힌트 섹션 */
export default function QuizHint() {
	return (
		<section className="bg-neutral-700 pt-[160px]">
			<div className="gap-15 flex flex-col items-center">
				<h2>퀴즈 HINT</h2>
				<HintCards />
			</div>
		</section>
	);
}
