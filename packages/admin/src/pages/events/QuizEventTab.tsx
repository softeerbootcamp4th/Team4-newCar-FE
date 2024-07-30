import QuizEventEditor from 'src/components/editor/QuizEventEditor';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from 'src/components/ui/accordion';
import { Button } from 'src/components/ui/button';
import { Input } from 'src/components/ui/input';
import { useModal } from 'src/store/provider/ModalProvider';

function QuizEventBox({ index }: { index: number }) {
	const { openModal } = useModal();

	const handleFix = () => {
		openModal(<QuizEventEditor />);
	};

	return (
		<AccordionItem value={String(index)}>
			<div className="flex h-20 w-full gap-2 border-[1px] border-black p-1">
				<div className="w-1/4 border-[1px] border-black p-4">1</div>
				<div role="presentation" className="flex-grow-1 flex w-full border-[1px] border-black">
					<AccordionTrigger aria-expanded value={String(index)}>
						<div className="p-4">질문 12222</div>
					</AccordionTrigger>
				</div>
				<div className="flex w-1/4 items-center justify-between border-[1px] border-black p-4">
					YYYY.MM.DD <Button onClick={handleFix}>수정</Button>
				</div>
			</div>

			<AccordionContent>
				<div className="mt-4 w-full border-4 border-gray-500">
					<div className="flex items-center p-4">
						<Input className="mr-4 w-4" type="checkbox" value="1번" />
						<h1>질문 1번입니다.</h1>
					</div>
					<div className="flex items-center p-4">
						<Input className="mr-4 w-4" type="checkbox" value="2번" />
						<h1>질문 2번입니다.</h1>
					</div>
					<div className="flex items-center p-4">
						<Input className="mr-4 w-4" type="checkbox" value="3번" />
						<h1>질문 3번입니다.</h1>
					</div>
					<div className="flex items-center p-4">
						<Input className="mr-4 w-4" type="checkbox" value="4번" />
						<h1>질문 4번입니다.</h1>
					</div>
				</div>
			</AccordionContent>
		</AccordionItem>
	);
}

function QuizEventTab() {
	return (
		<div className="mt-4 flex flex-col gap-2">
			<Accordion type="single" collapsible>
				{new Array(10).fill(0).map((_, index) => (
					<QuizEventBox index={index} />
				))}
			</Accordion>
		</div>
	);
}
export default QuizEventTab;
