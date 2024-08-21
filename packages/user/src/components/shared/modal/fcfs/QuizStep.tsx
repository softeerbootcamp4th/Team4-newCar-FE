import Chip from 'src/components/common/Chip.tsx';
import OptionButton from 'src/components/common/OptionButton.tsx';
import PendingStep from 'src/components/shared/modal/PendingStep.tsx';
import useGetFCFSQuiz from 'src/hooks/query/useGetFCFSQuiz.ts';
import useSubmitFCFSQuiz, { SubmitFCFSQuizResponse } from 'src/hooks/query/useSubmitFCFSQuiz.ts';

export type ResultStepType = ReturnType<typeof getResultStepFromStatus>;
interface QuizStepProps {
	onStepChange: (step: ResultStepType) => void;
}

export default function QuizStep({ onStepChange }: QuizStepProps) {
	const {
		quiz: { question, choices },
	} = useGetFCFSQuiz();

	const { isPending, mutate: submitAnswer } = useSubmitFCFSQuiz();

	const handleSubmit = (answer: number) =>
		submitAnswer(
			{ answer },
			{ onSuccess: (response) => onStepChange(getResultStepFromStatus(response)) },
		);

	if (isPending) {
		return <PendingStep>선착순 퀴즈 결과 불러오는 중...</PendingStep>;
	}

	return (
		<div className="flex h-full w-full max-w-[400px] flex-col justify-between gap-9 sm:max-w-[500px] md:max-w-[650px] lg:max-w-[800px]">
			<div className="flex flex-col items-center gap-9">
				<Chip variants="secondary">깜짝 퀴즈</Chip>
				<p className="text-heading-8 break-keep text-center font-medium">{question}</p>
			</div>
			<div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
				{choices.map(({ num, text }) => (
					<OptionButton key={num} disabled={isPending} onClick={() => handleSubmit(num)}>
						{text}
					</OptionButton>
				))}
			</div>
		</div>
	);
}

function getResultStepFromStatus({ status }: SubmitFCFSQuizResponse) {
	switch (status) {
		case 'END':
			return 'end';
		case 'PARTICIPATED':
			return 'already-done';
		case 'WRONG':
			return 'wrong-answer';
		case 'RIGHT':
		default:
			return 'correct-answer';
	}
}
