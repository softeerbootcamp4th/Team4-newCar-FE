import { useEffect } from 'react';
import Modal, { ModalProps } from 'src/components/common/Modal.tsx';
import QuizStep from 'src/components/shared/fcfs/modal/QuizStep.tsx';
import useGetFCFSQuiz from 'src/hooks/query/useGetFCFSQuiz.ts';
import useSubmitFCFSQuiz, { SubmitFCFSQuizResponse } from 'src/hooks/query/useSubmitFCFSQuiz.ts';
import useFunnel from 'src/hooks/useFunnel.ts';

const FCFS_FUNNEL_KEYS = ['not-started', 'pending', 'correct-answer', 'wrong-answer', 'quiz', 'end', 'already-done'];
type FCFSFunnelKeyType = (typeof FCFS_FUNNEL_KEYS)[number];

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
		submitAnswer({ answer }, {
			onSuccess: (response) => setStep(getStepFromStatus(response)) });

	return (
		<Modal {...props}>
			<div className="flex h-full w-full items-center justify-center p-[100px]">
				<Funnel>
					<Funnel.Step name="already-done">already-done</Funnel.Step>
					<Funnel.Step name="end">end</Funnel.Step>
					<Funnel.Step name="not-started">not-started</Funnel.Step>

					<Funnel.Step name="quiz">
						<QuizStep quiz={quiz} onSelect={handleSubmit} />
					</Funnel.Step>

					<Funnel.Step name="pending">pending</Funnel.Step>

					<Funnel.Step name="wrong-answer">wrong</Funnel.Step>
					<Funnel.Step name="correct-answer">correct</Funnel.Step>
				</Funnel>
			</div>
		</Modal>
	);
}

function getStepFromStatus({ status }: SubmitFCFSQuizResponse): FCFSFunnelKeyType {
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
