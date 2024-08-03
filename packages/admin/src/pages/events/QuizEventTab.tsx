import moment from 'moment';
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
				<div className="mt-4 w-full border-4 border-gray-500" />
				{quiz.choices.map((choice) => (
					<div className="flex items-center p-4">
						<Input
							className="mr-4 w-4"
							type="checkbox"
							disabled
							checked={quiz.correctAnswer === choice.num}
						/>
						<p>{choice.text}</p>
					</div>
				))}
			</AccordionContent>
		</AccordionItem>
	);
}

function getDatesBetween(startDate: string, endDate: string) {
	const start = moment(startDate).startOf('day'); // 시작 날짜
	const end = moment(endDate).endOf('day'); // 종료 날짜
	const dates = [];

	const currentDate = start.clone(); // 현재 날짜 초기화

	while (currentDate <= end) {
		dates.push(currentDate.format('YYYY-MM-DD')); // 날짜를 배열에 추가
		currentDate.add(1, 'day'); // 날짜를 하루 증가
	}

	return dates;
}

function QuizEventTab() {
	const { commonEvent, quizEvent, refechQuizEvent } = useEvent();
	console.log(quizEvent);
	// const [quizList, setQuizList] = useState<Quiz[]>([]);

	// useLayoutEffect(() => {
	// 	refechQuizEvent();
	// 	if (commonEvent) {
	// 		console.log(getDatesBetween(commonEvent.startTime, commonEvent.endTime));
	// 	}
	// }, []);

	// useEffect(() => {
	// 	// sync real quiz
	// }, [quizEvent]);

	return (
		<div className="mt-4 flex flex-col gap-2">
			<Accordion type="single" collapsible>
				{quizEvent?.map((quiz, index) => <QuizEventBox quiz={quiz} index={index} />)}
			</Accordion>
		</div>
	);
}
export default QuizEventTab;
