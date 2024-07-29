import { useState } from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from 'src/components/ui/accordion';
import { Button } from 'src/components/ui/button';
import { Input } from 'src/components/ui/input';

function QuizEventBox({ index }: { index: number }) {
	const [date, setDate] = useState('');
	return (
		<AccordionItem value={String(index)}>
			<div className="flex w-full gap-2 border-[1px] border-black p-4">
				<div className="w-1/4 border-[1px] border-black p-4">1</div>
				<AccordionTrigger value={String(index)} className="w-1/4 border-[1px] border-black p-4">
					<div>질문 1</div>
				</AccordionTrigger>

				<div className="w-1/4 border-[1px] border-black p-4">
					<Input
						type="date"
						value={date}
						onChange={(event) => {
							setDate(event.target.value);
						}}
					/>
				</div>
				<div className="w-1/4 border-[1px] border-black p-4">
					<Button>수정</Button>
				</div>
			</div>

			<AccordionContent>
				<div className="w-full">
					<div className="flex">
						<Input type="checkbox" value="1번" checked />
					</div>
					<div className="flex">
						<Input type="checkbox" value="1번" />
					</div>
					<div className="flex">
						<Input type="checkbox" value="1번" />
					</div>
					<div className="flex">
						<Input type="checkbox" value="1번" />
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
