import { Suspense, useEffect } from 'react';
import PendingStep from 'src/components/shared/modal/PendingStep.tsx';
import useSubmitTeamTypeQuizAnswers, {
	type SubmitQuizAnswersRequest,
} from 'src/hooks/query/useSubmitTeamTypeQuizAnswers.ts';
import useAuth from 'src/hooks/useAuth.ts';
import useFunnel from 'src/hooks/useFunnel.ts';
import CustomError from 'src/utils/error.ts';
import ErrorStep from './ErrorStep.tsx';
import ResultStep from './ResultStep.tsx';
import QuizFunnel from './quiz/index.tsx';

interface TeamSelectModalContentProps {
	initialStep?: 'already-done' | 'quiz';
}
export default function TeamSelectModalContent({
	initialStep = 'quiz',
}: TeamSelectModalContentProps) {
	const { user } = useAuth();

	const [Funnel, setStep] = useFunnel(
		['quiz', 'pending', 'success', 'error', 'already-done'] as NonEmptyArray<string>,
		{ initialStep },
	);

	const { mutate: submitAnswers, isPending } = useSubmitTeamTypeQuizAnswers();

	const handleSubmit = (request: SubmitQuizAnswersRequest) =>
		submitAnswers(request, {
			onSuccess: () => setStep('success'),
			onError: (error) => {
				if ((error as CustomError)?.status === 400) {
					setStep('already-done');
				} else {
					setStep('error');
				}
			},
		});

	useEffect(() => {
		if (isPending) setStep('pending');
	}, [isPending]);

	return (
		<Funnel>
			<Funnel.Step name="quiz">
				<Suspense fallback={<PendingStep>유형 검사 리스트 불러오는 중 ...</PendingStep>}>
					<QuizFunnel onSubmit={handleSubmit} />
				</Suspense>
			</Funnel.Step>
			<Funnel.Step name="pending">
				<PendingStep>내 유형 불러오는 중 ...</PendingStep>
			</Funnel.Step>
			<Funnel.Step name="success">{user?.type && <ResultStep />}</Funnel.Step>
			<Funnel.Step name="already-done">
				{user?.type && (
					<ResultStep>
						<p className="text-detail-1">
							이미 유형 검사를 완료하셨군요! 이전 검사 결과를 보여드릴게요
						</p>
					</ResultStep>
				)}
			</Funnel.Step>
			<Funnel.Step name="error">
				<ErrorStep setQuizStep={() => setStep('quiz')}>
					유형 검사 결과 제출 중 오류가 발생했습니다
				</ErrorStep>
			</Funnel.Step>
		</Funnel>
	);
}
