import { useEffect, useState } from 'react';
import { Input } from 'src/components/ui/input';
import useEvent from 'src/hooks/useEvent';
import { Choice, Quiz } from 'src/services/api/types/apiType';
import { useAlert } from 'src/store/provider/AlertProvider';
import { AlertType, useModal } from 'src/store/provider/ModalProvider';

interface QuizEventEditorProps {
	quiz: Quiz;
}

function QuizEventEditor({ quiz }: QuizEventEditorProps) {
	const { updateQuizEvent } = useEvent();
	const { closeModal } = useModal();
	const { isModalOpen, addModalCallback } = useModal();
	const { addAlertCallback, openAlert } = useAlert();
	const [quizObj, setQuizObj] = useState<Quiz>(quiz);

	const getAlertPayload = (): [string, AlertType] => {
		const nameEmpty = quizObj.question.length === 0;
		const winnerCountEmpty = Number.isNaN(quizObj.winnerCount);
		const optionsEmpty = quizObj.choices.find((choice) => choice.text === '') !== undefined;
		const answerIndexEmpty = Number.isNaN(quizObj.correctAnswer);

		if (nameEmpty || winnerCountEmpty || optionsEmpty || answerIndexEmpty) {
			return ['모든 정보값을 입력해주세요', 'alert'];
		}
		if (quizObj.question.length > 50) {
			return ['질문은 공백 포함 50자까지 입력 가능합니다.', 'alert'];
		}
		if (quizObj.winnerCount <= 0) {
			return ['당첨자는 최소 1명은 존재해야 합니다.', 'alert'];
		}
		if (quizObj.winnerCount > 10000) {
			return ['당첨자는 10000명이 최대입니다.', 'alert'];
		}
		if (quizObj.choices.find((çhoice) => çhoice.text.length > 20) !== undefined) {
			return ['보기는 공백 포함 20자까지 입력 가능합니다.', 'alert'];
		}
		return ['퀴즈를 수정할까요?', 'confirm'];
	};

	useEffect(() => {
		addModalCallback(() => {
			addAlertCallback(() => {
				updateQuizEvent(quizObj).then(() => {
					closeModal();
				});
			});
			openAlert(...getAlertPayload());
		});
	}, [isModalOpen, quizObj]);

	const handleQuizChoiceChange = (newChoice: Choice) => {
		setQuizObj((prev) => ({
			...prev,
			choices: prev.choices.map((choice) => (choice.num === newChoice.num ? newChoice : choice)),
		}));
	};

	const handleQuizWinnerCountChant = (nextValue: number) => {
		setQuizObj((prev) => ({
			...prev,
			winnerCount: nextValue,
		}));
	};

	const handleQuizNameChange = (nextValue: string) => {
		setQuizObj((prev) => ({
			...prev,
			question: nextValue,
		}));
	};

	const handleQuizAnswerIndexChange = (nextValue: number) => {
		setQuizObj((prev) => ({
			...prev,
			correctAnswer: nextValue,
		}));
	};

	return (
		<div className="flex w-[800px] flex-col gap-4">
			<div className="flex justify-end">게시일 {quizObj.postDate}</div>
			<div className="flex flex-row items-center gap-4">
				<div className="min-w-fit">당첨 인원</div>
				<Input
					type="number"
					value={quizObj.winnerCount}
					onChange={(e) => {
						handleQuizWinnerCountChant(parseInt(e.target.value, 10));
					}}
					className="w-20"
				/>
				<div className="min-w-fit">명</div>
			</div>
			<div className="flex flex-row items-center gap-4">
				<div className="min-w-fit">퀴즈</div>
				<Input
					value={quizObj.question}
					onChange={(e) => {
						handleQuizNameChange(e.target.value);
					}}
				/>
			</div>

			<div>보기</div>

			<div className="flex flex-col justify-between border-4 border-gray-300">
				{quizObj.choices.map((choice) => (
					<div className="flex w-full items-center justify-start gap-4 p-4">
						<Input
							type="checkbox"
							checked={choice.num === quizObj.correctAnswer}
							className="w-7 cursor-pointer"
							onClick={() => {
								handleQuizAnswerIndexChange(choice.num);
							}}
						/>
						<Input
							type="text"
							value={choice.text}
							onChange={(e) => {
								handleQuizChoiceChange({
									...choice,
									text: e.target.value,
								});
							}}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
export default QuizEventEditor;
