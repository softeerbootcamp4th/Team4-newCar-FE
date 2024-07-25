import { useState } from 'react';
import CommonPagination from 'src/components/common/CommonPagination';
import ResultTable from 'src/components/table/ResultTable';
import { Button } from 'src/components/ui/button';
import TabName from 'src/constants/TabName';

// function QuizResult() {}

// function RaceResult() {}

function WinnerResult() {
	const [tabName, setTabName] = useState(TabName.QUIZ);
	const [pageIndex, setPageIndex] = useState(0);
	const handleTab = (_tabName: string) => {
		setTabName(_tabName);
		setPageIndex(0);
	};
	return (
		<div className="flex w-[600px] flex-col gap-2">
			<div className="flex flex-row">
				<Button disabled={tabName === TabName.QUIZ} onClick={() => handleTab(TabName.QUIZ)}>
					{TabName.QUIZ}
				</Button>
				<Button disabled={tabName === TabName.RACE} onClick={() => handleTab(TabName.RACE)}>
					{TabName.RACE}
				</Button>
			</div>
			<ResultTable
				headers={[
					{ text: 'test_1', width: 100 },
					{ text: 'test_2', width: 100 },
					{ text: 'test_3', width: 100 },
					{ text: 'test_4', width: 100 },
				]}
				rows={[
					['1', '2', '3', '4'],
					['1', '2', '3', '4'],
					['1', '2', '3', '4'],
				]}
			/>
			<CommonPagination pageIndex={pageIndex} setPageIndex={setPageIndex} total={21} />
		</div>
	);
}
export default WinnerResult;
