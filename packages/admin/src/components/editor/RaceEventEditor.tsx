import { useEffect, useState } from 'react';
import { Input } from 'src/components/ui/input';
import { useAlert } from 'src/store/provider/AlertProvider';
import { AlertType, useModal } from 'src/store/provider/ModalProvider';

const categories = ['펫 프렌들리', '여행의 정석', '공간활용의 기술', '레저의 정석'];
function RaceEventEditor() {
	const { isModalOpen, addModalCallback } = useModal();
	const { addAlertCallback, openAlert } = useAlert();
	const [title, setTitle] = useState('문제 입니다~~~~~~~~~~~~');
	const [answers, setAnswers] = useState<[string, string]>(['질문 1번 답', '질문 2번 답']);
	const [scores, setScores] = useState<number[][]>([
		[1, 2, 3, 4],
		[1, 2, 3, 4],
	]);

	const getAlertPayload = (): [string, AlertType] => {
		const answersEmpty = answers.find((answer) => answer === '') !== undefined;
		const titleEmpty = title.length === 0;
		const scoresEmpty = scores.flat(1).length !== 8;
		if (answersEmpty || titleEmpty || scoresEmpty) return ['모든 정보값을 입력해주세요', 'alert'];
		if (title.length > 50) return ['질문은 공백 포함 50자까지 입력 가능합니다.', 'alert'];
		if (title.length > 50) return ['질문은 공백 포함 50자까지 입력 가능합니다.', 'alert'];
		if (answers[0].length > 20 || answers[1].length > 20) {
			return ['보기는 공백 포함 20자까지 입력 가능합니다.', 'alert'];
		}
		return ['유형검사 내용을 수정할까요?', 'confirm'];
	};

	useEffect(() => {
		addModalCallback(() => {
			addAlertCallback(() => {
				console.log('저장 완료');
			});
			openAlert(...getAlertPayload());
		});
	}, [isModalOpen, title, answers, scores]);

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
