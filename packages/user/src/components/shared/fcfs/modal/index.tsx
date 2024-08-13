import { useEffect } from 'react';
import Modal, { ModalProps } from 'src/components/common/Modal.tsx';
import PendingStep from 'src/components/shared/modal/PendingStep.tsx';
import useGetFCFSQuiz from 'src/hooks/query/useGetFCFSQuiz.ts';
import useSubmitFCFSQuiz, { SubmitFCFSQuizResponse } from 'src/hooks/query/useSubmitFCFSQuiz.ts';
import useFunnel from 'src/hooks/useFunnel.ts';
import QuizStep from './QuizStep.tsx';
import ResultStep from './ResultStep.tsx';

export type ResultStepType = ReturnType<typeof getResultStepFromStatus>;

const FCFS_FUNNEL_KEYS = [
	'already-done',
	'not-started',
	'pending',
	'correct-answer',
	'wrong-answer',
	'quiz',
	'end',
];

export default function FCFSModal(props: ModalProps) {
	const [Funnel, setStep] = useFunnel(FCFS_FUNNEL_KEYS as NonEmptyArray<string>, {
		initialStep: 'quiz',
	});

	const { quiz } = useGetFCFSQuiz();
	const { isPending, mutate: submitAnswer } = useSubmitFCFSQuiz();

	useEffect(() => {
		if (isPending) setStep('pending');
	}, [isPending]);

	const handleSubmit = (answer: number) =>
		submitAnswer(
			{ answer },
			{
				onSuccess: (response) => setStep(getResultStepFromStatus(response)),
			},
		);

	return (
		<Modal {...props}>
			<div className="flex h-full w-full items-center justify-center p-[100px]">
				<Funnel>
					<Funnel.Step name="not-started">not-started</Funnel.Step>

					<Funnel.Step name="quiz">
						<QuizStep quiz={quiz} onSelect={handleSubmit} />
					</Funnel.Step>

					<Funnel.Step name="pending">
						<PendingStep>선착순 퀴즈 결과 불러오는 중...</PendingStep>
					</Funnel.Step>

					<Funnel.Step name="end">
						<ResultStep step="end" />
					</Funnel.Step>
					<Funnel.Step name="already-done">
						<ResultStep step="already-done" />
					</Funnel.Step>
					<Funnel.Step name="wrong-answer">
						<ResultStep step="wrong-answer" />
					</Funnel.Step>
					<Funnel.Step name="correct-answer">
						<ResultStep step="correct-answer" />
					</Funnel.Step>
				</Funnel>
			</div>
		</Modal>
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
		default:
			return 'correct-answer';
	}
}
