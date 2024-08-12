import type { Quiz } from 'src/hooks/query/useGetTeamTypeQuiz.ts';
import OptionButton from './OptionButton.tsx';

interface QuizStepContentProps {
	quiz: Quiz;
	quizNum: number;
	selectedChoice: number;
	onOptionSelect: (choiceIndex: number) => void;
}

export default function QuizStepContent({
	quiz: { choices, question },
	quizNum,
	selectedChoice,
	onOptionSelect,
}: QuizStepContentProps) {
	return (
		<div className="flex h-full flex-col items-center justify-center px-10">
			<p className="text-primary text-heading-8 font-bold">Q{quizNum}</p>
			<p className="text-heading-8 h-[90px] whitespace-pre-line text-center font-medium">
				{question}
			</p>
			<ul className="my-8 flex w-full min-w-[300px] max-w-[400px] flex-col items-center gap-4">
				{choices.map(({ text }, choiceIndex) => (
					<li className="w-full" key={text}>
						<OptionButton
							isActive={selectedChoice === choiceIndex}
							onClick={() => onOptionSelect(choiceIndex)}
						>
							{text}
						</OptionButton>
					</li>
				))}
			</ul>
		</div>
	);
}
