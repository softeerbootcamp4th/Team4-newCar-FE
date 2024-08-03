import { useEffect, useState } from 'react';
import { Input } from 'src/components/ui/input';
import categoryList from 'src/constants/categoryList';
import useEvent from 'src/hooks/useEvent';
import { PersonalityChoice, PersonalityTest } from 'src/services/api/types/apiType';
import { useAlert } from 'src/store/provider/AlertProvider';
import { AlertType, useModal } from 'src/store/provider/ModalProvider';

interface RaceEventEditorProps {
	personalityTest: PersonalityTest;
}

function RaceEventEditor({ personalityTest }: RaceEventEditorProps) {
	const { closeModal } = useModal();
	const { updatePersonalityTest } = useEvent();
	const { isModalOpen, addModalCallback } = useModal();
	const { addAlertCallback, openAlert } = useAlert();
	const [personalityTestObj, setPersonalityTestObj] = useState<PersonalityTest>(personalityTest);

	const getAlertPayload = (): [string, AlertType] => {
		// 복잡한 condition 따로 분리
		const answersEmpty =
			personalityTestObj.choices.find((choice) => choice.text === '') !== undefined;
		const titleEmpty = personalityTestObj.question.length === 0;
		const scoresEmpty =
			personalityTestObj.choices.find(
				(choice) => choice.scores.find((score) => Number.isNaN(score.value)) !== undefined,
			) !== undefined;

		const scoreExceed =
			personalityTestObj.choices.find((choice) =>
				choice.scores.find((score) => score.value > 10000),
			) !== undefined;

		if (answersEmpty || titleEmpty || scoresEmpty) return ['모든 정보값을 입력해주세요', 'alert'];

		if (personalityTestObj.question.length > 50) {
			return ['질문은 공백 포함 50자까지 입력 가능합니다.', 'alert'];
		}

		if (personalityTestObj.choices.find((choice) => choice.text.length > 20) !== undefined) {
			return ['보기는 공백 포함 20자까지 입력 가능합니다.', 'alert'];
		}

		if (scoreExceed) {
			return ['점수는 최대 10000점까지 가능합니다.', 'alert'];
		}

		return ['유형검사 내용을 수정할까요?', 'confirm'];
	};

	const handleQuestionChange = (text: string) => {
		setPersonalityTestObj((prev) => ({
			...prev,
			question: text,
		}));
	};

	// 68line의 방식이랑 53line 방식이랑 비교하면 어떤게 더 좋을까요?
	const handleAnswersChange = (text: string, choiceIndex: number) => {
		setPersonalityTestObj((prev: PersonalityTest) => ({
			...prev,
			choices: prev.choices.map((choice, index): PersonalityChoice => {
				if (choiceIndex === index) {
					return {
						text,
						scores: choice.scores,
					};
				}
				return choice;
			}),
		}));
	};

	const handleScoresChange = (newValue: number, choiceIndex: number, categoryIndex: number) => {
		const tmpScores = [
			...personalityTest.choices[choiceIndex].scores.map((score) => ({ ...score })),
		];
		tmpScores[categoryIndex].value = newValue;
		setPersonalityTestObj((prev: PersonalityTest) => ({
			...prev,
			choices: prev.choices.map((choice, index): PersonalityChoice => {
				if (choiceIndex === index) {
					return {
						text: choice.text,
						scores: tmpScores,
					};
				}
				return choice;
			}),
		}));
	};

	useEffect(() => {
		addModalCallback(() => {
			addAlertCallback(() => {
				updatePersonalityTest(personalityTestObj);
				closeModal();
			});
			openAlert(...getAlertPayload());
		});
	}, [isModalOpen, personalityTestObj]);

	return (
		<div className="flex w-[800px] flex-col">
			<div className="flex flex-row items-center gap-4">
				<div className="min-w-fit">유형 검사 문제</div>
				<Input
					value={personalityTestObj.question}
					onChange={(e) => {
						handleQuestionChange(e.target.value);
					}}
				/>
			</div>

			<div className="flex justify-between">
				{personalityTestObj.choices.map((choice, choiceIndex) => (
					<div className="flex w-1/2 items-center gap-4 p-4">
						<div>{String.fromCharCode(65 + choiceIndex)}</div>
						<Input
							value={choice.text}
							onChange={(e) => {
								handleAnswersChange(e.target.value, choiceIndex);
							}}
						/>
					</div>
				))}
			</div>

			<div className="flex flex-row justify-between">
				{personalityTestObj.choices.map((choice, choiceIndex) => (
					<div className="flex w-1/2 flex-col gap-1 p-4">
						{categoryList.map((category, categoryIndex) => (
							<div className="flex flex-row gap-2">
								<div className="flex w-[400px] items-center justify-center rounded-sm bg-gray-500 text-white">
									{category.KR}+
								</div>
								<Input
									type="number"
									value={choice.scores.find((score) => score.type === category.EN)?.value}
									onChange={(e) => {
										handleScoresChange(parseInt(e.target.value, 10), choiceIndex, categoryIndex);
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
