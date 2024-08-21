import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Modal, { ModalProps } from 'src/components/common/Modal.tsx';
import PendingStep from 'src/components/shared/modal/PendingStep.tsx';
import useFunnel from 'src/hooks/useFunnel.ts';
import ErrorStep from './ErrorStep.tsx';
import QuizStep from './QuizStep.tsx';
import ResultStep from './ResultStep.tsx';

export default function FCFSModal(props: ModalProps) {
	const [Funnel, setStep] = useFunnel(
		[
			'quiz',
			'already-done',
			'correct-answer',
			'wrong-answer',
			'end',
		] as NonEmptyArray<string>,
		{
			initialStep: 'quiz',
		},
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
										<QuizStep onStepChange={setStep} />
									</Suspense>
								</ErrorBoundary>
							)}
						</QueryErrorResetBoundary>
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
