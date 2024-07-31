import { useState } from 'react';
import Pagination from 'src/components/common/Pagination';
import Tab from 'src/components/common/Tab';
import ResultTable from 'src/components/table/ResultTable';

const TabName = {
	QUIZ: 'QUIZ',
	RACE: 'RACE',
};

function QuizResult({ pageIndex }: { pageIndex: number }) {
	const dummyData = new Array(200).fill(0).map((_, index) => new Array(5).fill(index * 2));
	return (
		<ResultTable
			headers={[
				{ text: '퀴즈 더미1', width: 100 },
				{ text: '퀴즈 더미2', width: 100 },
				{ text: '퀴즈 더미3', width: 100 },
				{ text: '퀴즈 더미4', width: 100 },
				{ text: '퀴즈 더미5', width: 100 },
			]}
			rows={dummyData.slice(pageIndex * 10, pageIndex * 10 + 10)}
		/>
	);
}

function RaceResult({ pageIndex }: { pageIndex: number }) {
	const dummyData = new Array(100).fill(0).map((_, index) => new Array(4).fill(index));
	return (
		<ResultTable
			headers={[
				{ text: '경주 더미1', width: 100 },
				{ text: '경주 더미2', width: 100 },
				{ text: '경주 더미3', width: 100 },
				{ text: '경주 더미4', width: 100 },
			]}
			rows={dummyData.slice(pageIndex * 10, pageIndex * 10 + 10)}
		/>
	);
}

function RenderTab({ tabName, pageIndex }: { tabName: string; pageIndex: number }) {
	if (tabName === TabName.QUIZ) return <QuizResult pageIndex={pageIndex} />;
	if (tabName === TabName.RACE) return <RaceResult pageIndex={pageIndex} />;
}

function WinnerResult() {
	// const { eventWinners } = useEvent();
	const [tabName, setTabName] = useState(TabName.QUIZ);
	const [pageIndex, setPageIndex] = useState(0);
	// 이거 아직 좀 미완성인듯
	// 진환님 일해라!!!
	return (
		<div className="flex w-[600px] flex-col gap-2">
			<Tab
				tabNames={[TabName.QUIZ, TabName.RACE]}
				setSelectedTabName={setTabName}
				selectedTabName={tabName}
			/>
			<RenderTab tabName={tabName} pageIndex={pageIndex} />
			<Pagination pageIndex={pageIndex} setPageIndex={setPageIndex} total={21} />
		</div>
	);
}

export default WinnerResult;
