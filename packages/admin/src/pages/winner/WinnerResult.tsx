import { useState } from 'react';
import Pagination from 'src/components/common/Pagination';
import Tab from 'src/components/common/Tab';
import ResultTable from 'src/components/table/ResultTable';
import useEvent from 'src/hooks/useEvent';
import { RacingWinner } from 'src/services/api/types/apiType';

const TabName = {
	QUIZ: 'QUIZ',
	RACE: 'RACE',
};

const racingHeaders = [
	{ text: '당첨 등수', width: 100 },
	{ text: '유저 이름', width: 100 },
	{ text: '유저 전화번호', width: 100 },
	{ text: '공유 링크 접속 ', width: 100 },
	{ text: '유형카드 ', width: 100 },
];

const quizHeaders = [
	{ text: '유저 이름', width: 100 },
	{ text: '유저 전화번호', width: 100 },
	{ text: '당첨 날짜 ', width: 100 },
];

const getRows = (pageIndex: number, rawList: RacingWinner[]) =>
	rawList
		.slice(pageIndex * 10, pageIndex * 10 + 10)
		.map((racingWinner) => Object.values(racingWinner));

function WinnerResult() {
	const { racingWinners } = useEvent();
	const [pageIndex, setPageIndex] = useState(0);
	const [tabName, setTabName] = useState(TabName.QUIZ);

	const racingRows = racingWinners ? getRows(pageIndex, racingWinners) : [];
	// quizwinner mock 준비중 나오면 racingWinner => quizWinner 교체
	const quizRows = racingWinners ? getRows(pageIndex, racingWinners) : [];

	const headers = tabName === TabName.QUIZ ? quizHeaders : racingHeaders;
	const rows = tabName === TabName.QUIZ ? quizRows : racingRows;

	return (
		<div className="flex w-[600px] flex-col gap-2">
			<Tab
				tabNames={[TabName.QUIZ, TabName.RACE]}
				setSelectedTabName={setTabName}
				selectedTabName={tabName}
			/>
			<ResultTable headers={headers} rows={rows} />
			<Pagination pageIndex={pageIndex} setPageIndex={setPageIndex} total={21} />
		</div>
	);
}

export default WinnerResult;
