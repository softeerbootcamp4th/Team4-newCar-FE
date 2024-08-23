import { Category } from '@softeer/common/types';
import { Suspense, useEffect, useState } from 'react';
import PendingStep from 'src/components/shared/modal/PendingStep.tsx';
import serverTeamEnumToClient from 'src/constants/serverMapping.ts';
import useSubmitTeamTypeQuizAnswers, {
	type SubmitQuizAnswersRequest,
} from 'src/hooks/query/useSubmitTeamTypeQuizAnswers.ts';
import useFunnel from 'src/hooks/useFunnel.ts';
import CustomError from 'src/utils/error.ts';
import ErrorStep from './ErrorStep.tsx';
import ResultStep from './ResultStep.tsx';
import QuizFunnel from './quiz/index.tsx';

interface AlreadyDone {
	initialStep: 'already-done';
	userType: Category;
}

interface Quiz {
	initialStep: 'quiz';
	userType?: never;
}

type TeamSelectModalContentProps = AlreadyDone | Quiz;

export default function TeamSelectModalContent({
	initialStep,
	userType,
}: TeamSelectModalContentProps) {
	const [Funnel, setStep] = useFunnel(
		['quiz', 'pending', 'success', 'error', 'already-done'] as NonEmptyArray<string>,
		{ initialStep },
	);
	const [type, setType] = useState<Category | undefined | null>(userType);
	const { mutate: submitAnswers, isPending } = useSubmitTeamTypeQuizAnswers();

	const handleSubmit = (request: SubmitQuizAnswersRequest) =>
		submitAnswers(request, {
			onSuccess: ({ team }) => {
				setType(serverTeamEnumToClient[team]);
				setStep('success');
			},
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
			<Funnel.Step name="success">{type && <ResultStep type={type} />}</Funnel.Step>
			<Funnel.Step name="already-done">
				<ResultStep type={userType as Category}>
					<p className="text-detail-1">
						이미 유형 검사를 완료하셨군요! 이전 검사 결과를 보여드릴게요
					</p>
				</ResultStep>
			</Funnel.Step>
			<Funnel.Step name="error">
				<ErrorStep setQuizStep={() => setStep('quiz')}>
					유형 검사 결과 제출 중 오류가 발생했습니다
				</ErrorStep>
			</Funnel.Step>
		</Funnel>
	);
}
