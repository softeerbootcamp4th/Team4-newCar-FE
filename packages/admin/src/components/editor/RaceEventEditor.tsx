import { useEffect, useState } from 'react';
import { Input } from 'src/components/ui/input';
import { useAlert } from 'src/store/provider/AlertProvider';
import { AlertType, useModal } from 'src/store/provider/ModalProvider';

const categories = ['펫 프렌들리', '여행의 정석', '공간활용의 기술', '레저의 정석'];

interface RaceObj {
	title: string;
	answers: string[];
	scores: number[][];
}

function RaceEventEditor() {
	const { isModalOpen, addModalCallback } = useModal();
	const { addAlertCallback, openAlert } = useAlert();
	const [raceObj, setRaceObj] = useState<RaceObj>({
		title: '문제 입니다~~~~~~~~~~~~',
		answers: ['질문 1번 답', '질문 2번 답'],
		scores: [
			[1, 2, 3, 4],
			[1, 2, 3, 4],
		],
	});

	const getAlertPayload = (): [string, AlertType] => {
		// 복잡한 condition 따로 분리
		const answersEmpty = raceObj.answers.find((answer) => answer === '') !== undefined;
		const titleEmpty = raceObj.title.length === 0;
		const scoresEmpty = raceObj.scores.flat(1).length !== 8;

		if (answersEmpty || titleEmpty || scoresEmpty) return ['모든 정보값을 입력해주세요', 'alert'];

		if (raceObj.title.length > 50) return ['질문은 공백 포함 50자까지 입력 가능합니다.', 'alert'];

		if (raceObj.title.length > 50) return ['질문은 공백 포함 50자까지 입력 가능합니다.', 'alert'];

		if (raceObj.answers[0].length > 20 || raceObj.answers[1].length > 20) {
			return ['보기는 공백 포함 20자까지 입력 가능합니다.', 'alert'];
		}

		return ['유형검사 내용을 수정할까요?', 'confirm'];
	};

	const handleRaceTitleChange = (text: string) => {
		setRaceObj((prev) => ({
			...prev,
			title: text,
		}));
	};

	const handleRaceAnswersChange = (text: string, answerIndex: number) => {
		setRaceObj((prev) => ({
			...prev,
			answers: prev.answers.map((answer, index) => (answerIndex === index ? text : answer)),
		}));
	};

	const handleRaceScoresChange = (newValue: number, answerIndex: number, categoryIndex: number) => {
		const tmpScores = raceObj.scores.slice();
		tmpScores[answerIndex][categoryIndex] = newValue;
		setRaceObj((prev) => ({
			...prev,
			scores: tmpScores,
		}));
	};

	useEffect(() => {
		addModalCallback(() => {
			addAlertCallback(() => {
				console.log('저장 완료');
			});
			openAlert(...getAlertPayload());
		});
	}, [isModalOpen, raceObj]);

	return (
		<div className="flex w-[800px] flex-col">
			<div className="flex flex-row items-center gap-4">
				<div className="min-w-fit">유형 검사 문제</div>
				<Input
					value={raceObj.title}
					onChange={(e) => {
						handleRaceTitleChange(e.target.value);
					}}
				/>
			</div>

			<div className="flex justify-between">
				{raceObj.answers.map((answer, answerIndex) => (
					<div className="flex w-1/2 items-center gap-4 p-4">
						<div>{String.fromCharCode(65 + answerIndex)}</div>
						<Input
							value={answer}
							onChange={(e) => {
								handleRaceAnswersChange(e.target.value, answerIndex);
							}}
						/>
					</div>
				))}
			</div>

			<div className="flex flex-row justify-between">
				{raceObj.scores.map((score, answerIndex) => (
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
										handleRaceScoresChange(
											parseInt(e.target.value, 10),
											answerIndex,
											categoryIndex,
										);
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
