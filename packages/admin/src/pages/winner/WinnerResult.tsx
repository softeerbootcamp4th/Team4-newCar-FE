import { useEffect, useState } from 'react';
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
	{ text: '당첨 등수', width: '20%' },
	{ text: '유저 이름', width: '20%' },
	{ text: '유저 전화번호', width: '20%' },
	{ text: '공유 링크 접속 ', width: '20%' },
	{ text: '유형카드 ', width: '20%' },
];

const quizHeaders = [
	{ text: '유저 이름', width: '33%' },
	{ text: '유저 전화번호', width: '33%' },
	{ text: '당첨 날짜 ', width: '33%' },
];

const getRows = (pageIndex: number, rawList: RacingWinner[]) => {
	const rows = rawList
		.slice(pageIndex * 10, pageIndex * 10 + 10)
		.map((racingWinner) => Object.values(racingWinner));
	while (rows.length < 10) {
		rows.push(['ㅤ']);
	}
	return rows;
};

function WinnerResult() {
	const { racingWinners } = useEvent();
	const [pageIndex, setPageIndex] = useState(0);
	const [tabName, setTabName] = useState(TabName.QUIZ);
	const [total, setTotal] = useState(0);
	const [rows, setRows] = useState<string[][]>([]);
	const [headers, setHeaders] = useState<{ text: string; width: string }[]>([]);

	useEffect(() => {
		if (tabName === TabName.QUIZ && racingWinners) {
			setTotal(racingWinners.length);
			setRows(getRows(pageIndex, racingWinners));
			setHeaders(quizHeaders);
		}
		if (tabName === TabName.RACE && racingWinners) {
			setTotal(racingWinners.length);
			setRows(getRows(pageIndex, racingWinners));
			setHeaders(racingHeaders);
		}
	}, [racingWinners, pageIndex]);

	useEffect(() => {
		setPageIndex(0);
	}, [tabName]);

	return (
		<div className="flex h-full w-full flex-col gap-4">
			<Tab
				tabNames={[TabName.QUIZ, TabName.RACE]}
				setSelectedTabName={setTabName}
				selectedTabName={tabName}
			/>
			<ResultTable headers={headers} rows={rows} />
			<Pagination pageIndex={pageIndex} setPageIndex={setPageIndex} total={total} />
		</div>
	);
}

export default WinnerResult;
