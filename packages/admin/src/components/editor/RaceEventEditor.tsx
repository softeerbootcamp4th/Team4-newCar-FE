import { useState } from 'react';
import { Input } from 'src/components/ui/input';

const categories = ['펫 프렌들리', '여행의 정석', '공간활용의 기술', '레저의 정석'];
function RaceEventEditor() {
	const [title, setTitle] = useState('문제 입니다~~~~~~~~~~~~');
	const [answers, setAnswers] = useState<string[]>(['질문 1번 답', '질문 2번 답']);
	const [scores, setScores] = useState<number[][]>([
		[1, 2, 3, 4],
		[1, 2, 3, 4],
	]);

	return (
		<div className="flex w-[800px] flex-col">
			<div className="flex flex-row items-center gap-4">
				<div className="min-w-fit">유형 검사 문제</div>
				<Input
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
			</div>

			<div className="flex justify-between">
				{answers.map((answer, answerIndex) => (
					<div className="flex w-1/2 items-center gap-4 p-4">
						<div>{String.fromCharCode(65 + answerIndex)}</div>
						<Input
							value={answer}
							onChange={(e) => {
								const tmp = answers;
								tmp[answerIndex] = e.target.value;
								setAnswers([...tmp]);
							}}
						/>
					</div>
				))}
			</div>

			<div className="flex flex-row justify-between">
				{scores.map((score, scoreIndex) => (
					<div className="flex w-1/2 flex-col gap-1 p-4">
						{categories.map((category, categoryIndex) => (
							<div className="flex flex-row gap-2">
								<div className="flex w-[400px] items-center justify-center rounded-sm bg-gray-500 text-white">
									{category}+
								</div>
								<Input
									type="number"
									value={score[categoryIndex]}
									onChange={(e) => {
										const tmp = scores;
										tmp[scoreIndex][categoryIndex] = parseInt(e.target.value, 10);
										setScores([...scores]);
									}}
								/>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}
export default RaceEventEditor;
