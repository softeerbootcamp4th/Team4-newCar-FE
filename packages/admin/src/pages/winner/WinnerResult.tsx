import { useEffect, useState } from 'react';
import Pagination from 'src/components/common/Pagination.tsx';
import Tab from 'src/components/common/Tab.tsx';
import ResultTable from 'src/components/table/ResultTable.tsx';
import { Button } from 'src/components/ui/button.tsx';
import useEvent from 'src/hooks/useEvent.tsx';
import { QuizWinner, RacingWinner } from 'src/services/api/types/apiType.ts';
import excelDownload from 'src/utils/xlsx.ts';

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

const getRows = (pageIndex: number, rawList: RacingWinner[] | QuizWinner[]) => {
	const rows = rawList
		.slice(pageIndex * 10, pageIndex * 10 + 10)
		.map((winner) => Object.values(winner));
	while (rows.length < 10) {
		rows.push(['ㅤ']);
	}
	return rows;
};

function WinnerResult() {
	const { racingWinners, quizWinner } = useEvent();

	const [pageIndex, setPageIndex] = useState(0);
	const [tabName, setTabName] = useState(TabName.QUIZ);
	const [total, setTotal] = useState(0);
	const [rows, setRows] = useState<string[][]>([]);
	const [headers, setHeaders] = useState<{ text: string; width: string }[]>([]);

	const resetList = () => {
		setTotal(0);
		setRows(getRows(0, []));
	};

	useEffect(() => {
		if (tabName === TabName.QUIZ) {
			setHeaders(quizHeaders);
			if (quizWinner !== undefined) {
				setTotal(quizWinner.length);
				setRows(getRows(pageIndex, quizWinner));
			} else resetList();
		}
		if (tabName === TabName.RACE) {
			setHeaders(racingHeaders);
			if (racingWinners !== undefined) {
				console.log('hi2');
				setTotal(racingWinners.length);
				setRows(getRows(pageIndex, racingWinners));
			} else resetList();
		}
	}, [racingWinners, pageIndex, tabName]);

	useEffect(() => {
		setPageIndex(0);
	}, [tabName]);

	const hnadleDownload = () => {
		if (tabName === TabName.QUIZ && racingWinners !== undefined) {
			excelDownload(racingWinners, '퀴즈 위너');
		}
		if (tabName === TabName.RACE && racingWinners !== undefined) {
			excelDownload(racingWinners, '레이싱 위너');
		}
	};

	return (
		<div className="flex h-full w-full flex-col gap-4">
			<Tab
				tabNames={[TabName.QUIZ, TabName.RACE]}
				setSelectedTabName={setTabName}
				selectedTabName={tabName}
			/>
			<div>
				<Button onClick={hnadleDownload} className="mb-4">
					excel 파일로 받기
				</Button>
			</div>
			<ResultTable headers={headers} rows={rows} />
			<Pagination pageIndex={pageIndex} setPageIndex={setPageIndex} total={total} />
		</div>
	);
}

export default WinnerResult;
