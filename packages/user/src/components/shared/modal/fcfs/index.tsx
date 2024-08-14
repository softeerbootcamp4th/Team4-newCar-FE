import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Modal, { ModalProps } from 'src/components/common/Modal.tsx';
import PendingStep from 'src/components/shared/modal/PendingStep.tsx';
import useSubmitFCFSQuiz, { SubmitFCFSQuizResponse } from 'src/hooks/query/useSubmitFCFSQuiz.ts';
import useFunnel from 'src/hooks/useFunnel.ts';
import ErrorStep from './ErrorStep.tsx';
import QuizStep from './QuizStep.tsx';
import ResultStep from './ResultStep.tsx';

export type ResultStepType = ReturnType<typeof getResultStepFromStatus>;

export default function FCFSModal(props: ModalProps) {
	const [Funnel, setStep] = useFunnel(
		[
			'quiz',
			'pending',
			'already-done',
			'correct-answer',
			'wrong-answer',
			'end',
		] as NonEmptyArray<string>,
		{
			initialStep: 'quiz',
		},
	);

	const { isPending, mutate: submitAnswer } = useSubmitFCFSQuiz();

	useEffect(() => {
		if (isPending) setStep('pending');
	}, [isPending]);

	const handleSubmit = (answer: number) =>
		submitAnswer(
			{ answer },
			{ onSuccess: (response) => setStep(getResultStepFromStatus(response)) },
		);

	return (
		<Modal {...props}>
			<div className="flex h-full w-full items-center justify-center p-[100px]">
				<Funnel>
					<Funnel.Step name="quiz">
						<QueryErrorResetBoundary>
							{({ reset }) => (
								<ErrorBoundary onReset={reset} FallbackComponent={ErrorStep}>
									<Suspense fallback={<PendingStep>선착순 퀴즈 불러오는 중...</PendingStep>}>
										<QuizStep onSelect={handleSubmit} />
									</Suspense>
								</ErrorBoundary>
							)}
						</QueryErrorResetBoundary>
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
