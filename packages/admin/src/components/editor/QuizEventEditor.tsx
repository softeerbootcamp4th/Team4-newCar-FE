import { useEffect, useState } from 'react';
import { Input } from 'src/components/ui/input';
import { Quiz } from 'src/services/api/types/apiType';
import { useAlert } from 'src/store/provider/AlertProvider';
import { AlertType, useModal } from 'src/store/provider/ModalProvider';

interface QuizObj {
	name: string;
	winnerCount: number;
	options: string[];
	answerIndex: number;
}

interface QuizEventEditorProps {
	quiz: Quiz
}

function QuizEventEditor({ quiz }: QuizEventEditorProps) {
	const { isModalOpen, addModalCallback } = useModal();
	const { addAlertCallback, openAlert } = useAlert();
	const [quizObj, setQuizObj] = useState<QuizObj>({
		name: quiz.question,
		winnerCount: quiz.winnerCount,
		options: [quiz.choice1, quiz.choice2, quiz.choice3, quiz.choice4],
		answerIndex: quiz.correctAnswer,
	});

	const getAlertPayload = (): [string, AlertType] => {
		const nameEmpty = quizObj.name.length === 0;
		const winnerCountEmpty = Number.isNaN(quizObj.winnerCount);
		const optionsEmpty = quizObj.options.find((option) => option === '') !== undefined;
		const answerIndexEmpty = Number.isNaN(quizObj.answerIndex);

		if (nameEmpty || winnerCountEmpty || optionsEmpty || answerIndexEmpty) {
			return ['모든 정보값을 입력해주세요', 'alert'];
		}
		if (quizObj.name.length > 50) {
			return ['질문은 공백 포함 50자까지 입력 가능합니다.', 'alert'];
		}
		if (quizObj.winnerCount <= 0) {
			return ['당첨자는 최소 1명은 존재해야 합니다.', 'alert'];
		}
		if (quizObj.options.find((option) => option.length > 20) !== undefined) {
			return ['보기는 공백 포함 20자까지 입력 가능합니다.', 'alert'];
		}
		return ['퀴즈를 수정할까요?', 'confirm'];
	};

	useEffect(() => {
		addModalCallback(() => {
			addAlertCallback(() => {
				console.log('저장 완료');
			});
			openAlert(...getAlertPayload());
		});
	}, [isModalOpen, quizObj]);

	const handleQuizOptionChange = (text: string, index: number) => {
		setQuizObj((prev) => ({
			...prev,
			options: prev.options.map((option, i) => (i === index ? text : option)),
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
			name: nextValue,
		}));
	};

	const handleQuizAnswerIndexChange = (nextValue: number) => {
		setQuizObj((prev) => ({
			...prev,
			answerIndex: nextValue,
		}));
	};

	return (
		<div className="flex w-[800px] flex-col gap-4">
			<div className="flex justify-end">게시일 2024.10.24</div>
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
					value={quizObj.name}
					onChange={(e) => {
						handleQuizNameChange(e.target.value);
					}}
				/>
			</div>

			<div>보기</div>

			<div className="flex flex-col justify-between border-4 border-gray-300">
				{quizObj.options.map((quizOption, quizOptionIndex) => (
					<div className="flex w-full items-center justify-start gap-4 p-4">
						<Input
							type="checkbox"
							checked={quizOptionIndex === quizObj.answerIndex}
							className="w-7 cursor-pointer"
							onClick={() => {
								handleQuizAnswerIndexChange(quizOptionIndex);
							}}
						/>
						<Input
							type="text"
							value={quizOption}
							onChange={(e) => {
								handleQuizOptionChange(e.target.value, quizOptionIndex);
							}}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
export default QuizEventEditor;
