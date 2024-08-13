import { useEffect, useState } from 'react';
import PendingStep from 'src/components/shared/modal/PendingStep.tsx';
import useGetTeamTypeQuizzes from 'src/hooks/query/useGetTeamTypeQuiz.ts';
import useSubmitTeamTypeQuizAnswers, {
	type SubmitQuizAnswersRequest,
	type SubmitQuizAnswersResponse,
} from 'src/hooks/query/useSubmitTeamTypeQuizAnswers.ts';
import useFunnel from 'src/hooks/useFunnel.ts';
import ErrorStep from './ErrorStep.tsx';
import ResultStep from './ResultStep.tsx';
import QuizFunnel from './quiz/index.tsx';

export default function TeamSelectModalContent() {
	const [Funnel, setStep] = useFunnel([
		'quiz',
		'pending',
		'success',
		'error',
	] as NonEmptyArray<string>);

	const { quizzes } = useGetTeamTypeQuizzes();
	const { mutate: submitAnswers, isPending } = useSubmitTeamTypeQuizAnswers();

	const [result, setResult] = useState<SubmitQuizAnswersResponse | null>(null);

	const handleSubmit = (request: SubmitQuizAnswersRequest) =>
		submitAnswers(request, {
			onSuccess: setResult,
			onError: () => setStep('error'),
		});

	useEffect(() => {
		if (isPending) setStep('pending');
	}, [isPending]);

	useEffect(() => {
		if (result) setStep('success');
	}, [result]);

	return (
		<Funnel>
			<Funnel.Step name="quiz">
				<QuizFunnel quizzes={quizzes} onSubmit={handleSubmit} />
			</Funnel.Step>
			<Funnel.Step name="pending">
				<PendingStep>내 유형 불러오는 중 ...</PendingStep>
			</Funnel.Step>
			<Funnel.Step name="success">
				<ResultStep {...(result as NonNullable<SubmitQuizAnswersResponse>)} />
			</Funnel.Step>
			<Funnel.Step name="error">
				<ErrorStep setQuizStep={() => setStep('quiz')} />
			</Funnel.Step>
		</Funnel>
	);
}
