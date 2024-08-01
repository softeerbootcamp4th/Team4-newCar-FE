import QuizEventEditor from 'src/components/editor/QuizEventEditor';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from 'src/components/ui/accordion';
import { Button } from 'src/components/ui/button';
import { Input } from 'src/components/ui/input';
import useEvent from 'src/hooks/useEvent';
import { Quiz } from 'src/services/api/types/apiType';
import { useModal } from 'src/store/provider/ModalProvider';

function QuizEventBox({ quiz, index }: { quiz: Quiz; index: number }) {
	const { openModal } = useModal();

	const handleFix = () => {
		openModal(<QuizEventEditor quiz={quiz} />);
	};
	return (
		<AccordionItem value={String(index)}>
			<div className="flex h-20 w-full gap-2 border-[1px] border-black p-1">
				<p className="w-1/4 border-[1px] border-black p-4">{quiz.id}</p>
				<div role="presentation" className="flex-grow-1 flex w-full border-[1px] border-black">
					<AccordionTrigger aria-expanded value={String(index)}>
						<p className="p-4">{quiz.question}</p>
					</AccordionTrigger>
				</div>
				<div className="flex w-1/4 items-center justify-between border-[1px] border-black p-4">
					<p>{quiz.postDate}</p> <Button onClick={handleFix}>수정</Button>
				</div>
			</div>

			<AccordionContent>
				<div className="mt-4 w-full border-4 border-gray-500">
					<div className="flex items-center p-4">
						<Input
							className="mr-4 w-4"
							type="checkbox"
							value="1번"
							disabled
							checked={quiz.correctAnswer === 1}
						/>
						<p>{quiz.choice1}</p>
					</div>
					<div className="flex items-center p-4">
						<Input
							className="mr-4 w-4"
							type="checkbox"
							value="2번"
							disabled
							checked={quiz.correctAnswer === 2}
						/>
						<p>{quiz.choice2}</p>
					</div>
					<div className="flex items-center p-4">
						<Input
							className="mr-4 w-4"
							type="checkbox"
							value="3번"
							disabled
							checked={quiz.correctAnswer === 3}
						/>
						<p>{quiz.choice3}</p>
					</div>
					<div className="flex items-center p-4">
						<Input
							className="mr-4 w-4"
							type="checkbox"
							value="4번"
							disabled
							checked={quiz.correctAnswer === 4}
						/>
						<p>{quiz.choice4}</p>
					</div>
				</div>
			</AccordionContent>
		</AccordionItem>
	);
}

function QuizEventTab() {
	const { quizEvent } = useEvent();

	return (
		<div className="mt-4 flex flex-col gap-2">
			<Accordion type="single" collapsible>
				{quizEvent?.map((quiz, index) => <QuizEventBox quiz={quiz} index={index} />)}
			</Accordion>
		</div>
	);
}
export default QuizEventTab;
