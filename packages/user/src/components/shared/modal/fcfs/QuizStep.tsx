import Chip from 'src/components/common/Chip.tsx';
import OptionButton from 'src/components/common/OptionButton.tsx';
import useGetFCFSQuiz from 'src/hooks/query/useGetFCFSQuiz.ts';

interface QuizStepProps {
	onSelect: (answer: number) => void;
}

export default function QuizStep({ onSelect }: QuizStepProps) {
	const {
		quiz: { question, choices },
	} = useGetFCFSQuiz();

	return (
		<div className="flex h-full w-full max-w-[400px] flex-col justify-between gap-9 sm:max-w-[500px] md:max-w-[650px] lg:max-w-[800px]">
			<div className="flex flex-col items-center gap-9">
				<Chip variants="secondary">깜짝 퀴즈</Chip>
				<p className="text-heading-8 break-keep text-center font-medium">{question}</p>
			</div>
			<div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
				{choices.map(({ num, text }) => (
					<OptionButton key={num} onClick={() => onSelect(num)}>
						{text}
					</OptionButton>
				))}
			</div>
		</div>
	);
}
