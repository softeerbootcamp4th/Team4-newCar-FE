import { useEffect, useState } from 'react';
import { Input } from 'src/components/ui/input';
import { AlertType, useModal } from 'src/store/provider/ModalProvider';

function QuizEventEditor() {
	const { isModalOpen, addModalCallback, addAlertCallback, openAlert } = useModal();
	const [quizName, setQuizName] = useState('');
	const [quizWinnerCount, setQuizWinnerCount] = useState(0);
	const [quizOptions, setQuizOptions] = useState<string[]>(['', '', '', '']);
	const [quizAnswerIndex, setQuizAnswerIndex] = useState<number>(0);

	const getAlertPayload = (): [string, AlertType] => {
		const quizNameEmpty = quizName.length === 0;
		const quizWinnerCountEmpty = Number.isNaN(quizWinnerCount);
		const quizOptionsEmpty = quizOptions.find((option) => option === '') !== undefined;
		const quizAnswerIndexEmpty = Number.isNaN(quizAnswerIndex);

		if (quizNameEmpty || quizWinnerCountEmpty || quizOptionsEmpty || quizAnswerIndexEmpty) {
			return ['모든 정보값을 입력해주세요', 'alert'];
		}
		if (quizName.length > 50) return ['질문은 공백 포함 50자까지 입력 가능합니다.', 'alert'];
		if (quizWinnerCount <= 0) return ['당첨자는 최소 1명은 존재해야 합니다.', 'alert'];
		if (quizOptions.find((option) => option.length > 20) !== undefined) {
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
	}, [isModalOpen, quizName, quizWinnerCount, quizOptions, quizAnswerIndex]);

	const handleQuizOptionChange = (text: string, index: number) => {
		const tmp = quizOptions.slice();
		tmp[index] = text;
		setQuizOptions(tmp);
	};

	return (
		<div className="flex w-[800px] flex-col gap-4">
			<div className="flex justify-end">게시일 2024.10.24</div>
			<div className="flex flex-row items-center gap-4">
				<div className="min-w-fit">당첨 인원</div>
				<Input
					type="number"
					value={quizWinnerCount}
					onChange={(e) => {
						setQuizWinnerCount(parseInt(e.target.value, 10));
					}}
					className="w-20"
				/>
				<div className="min-w-fit">명</div>
			</div>
			<div className="flex flex-row items-center gap-4">
				<div className="min-w-fit">퀴즈</div>
				<Input
					value={quizName}
					onChange={(e) => {
						setQuizName(e.target.value);
					}}
				/>
			</div>

			<div>보기</div>

			<div className="flex flex-col justify-between border-4 border-gray-300">
				{quizOptions.map((quizOption, quizOptionIndex) => (
					<div className="flex w-full items-center justify-start gap-4 p-4">
						<Input
							type="checkbox"
							checked={quizOptionIndex === quizAnswerIndex}
							className="w-7 cursor-pointer"
							onClick={() => {
								setQuizAnswerIndex(quizOptionIndex);
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
