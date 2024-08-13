import { PropsWithChildren, useCallback, useMemo, useState } from 'react';
import Button from 'src/components/common/Button.tsx';
import { Quiz } from 'src/hooks/query/useGetTeamTypeQuiz.ts';
import { SubmitQuizAnswersRequest } from 'src/hooks/query/useSubmitTeamTypeQuizAnswers.ts';
import { useFunnel } from 'src/hooks/useFunnel.ts';
import QuizStepContent from './QuizStepContent.tsx';

interface QuizFunnelProps {
	quizzes: Quiz[];
	onSubmit: (data: SubmitQuizAnswersRequest) => void;
}

export default function QuizFunnel({ quizzes, onSubmit }: QuizFunnelProps) {
	const steps = useMemo(() => quizzes.map((q) => q.id) as NonEmptyArray<number>, [quizzes]);

	const [Funnel, setStep] = useFunnel(steps);

	const [answers, setAnswers] = useState<SubmitQuizAnswersRequest>({});

	const handleNavigation = useCallback(
		(quizIndex: number, direction: 'previous' | 'next') => {
			const newIndex = direction === 'previous' ? quizIndex - 1 : quizIndex + 1;
			if (newIndex < steps.length) {
				setStep(steps[newIndex]);
			}
		},
		[steps],
	);

	const handleOptionSelect = useCallback(
		(index: number, choiceIndex: number) => {
			setAnswers((prevAnswers) => ({
				...prevAnswers,
				[steps[index]]: choiceIndex,
			}));
			handleNavigation(index, 'next');
		},
		[steps, handleNavigation],
	);

	return (
		<Funnel>
			{quizzes.map((quiz, quizIndex) => {
				const isFirstQuestion = quiz.id === steps[0];
				const isLastQuestion = quiz.id === steps.at(-1);
				const quizId = steps[quizIndex];
				const selectedChoice = answers[quizId];
				const disabledNextButton = selectedChoice === undefined;

				return (
					<Funnel.Step key={quizId} name={quizId}>
						<StepWrapper>
							<QuizStepContent
								quiz={quiz}
								quizNum={quizIndex + 1}
								selectedChoice={selectedChoice}
								onOptionSelect={(choiceIndex) => handleOptionSelect(quizIndex, choiceIndex)}
							/>
							<ActionsWrapper>
								{!isFirstQuestion && (
									<Button
										variants="secondary"
										className="flex-1"
										onClick={() => handleNavigation(quizIndex, 'previous')}
									>
										이전
									</Button>
								)}
								{isLastQuestion ? (
									<Button
										className="flex-1"
										disabled={disabledNextButton}
										onClick={() => onSubmit(answers)}
									>
										결과 보기
									</Button>
								) : (
									<Button
										className="flex-1"
										disabled={disabledNextButton}
										onClick={() => handleNavigation(quizIndex, 'next')}
									>
										다음
									</Button>
								)}
							</ActionsWrapper>
						</StepWrapper>
					</Funnel.Step>
				);
			})}
		</Funnel>
	);
}

function StepWrapper({ children }: PropsWithChildren) {
	return (
		<div className="py-15 flex h-full flex-col items-center justify-center gap-4">{children}</div>
	);
}

function ActionsWrapper({ children }: PropsWithChildren) {
	return <div className="flex w-full min-w-[250px] max-w-[350px] gap-3">{children}</div>;
}
