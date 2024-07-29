import { useState } from 'react';
import Tab from 'src/components/common/Tab';
import CommonEventTab from 'src/pages/events/CommonEventTab';
import QuizEventTab from 'src/pages/events/QuizEventTab';
import RaceEventTab from 'src/pages/events/RaceEventTab';

function EventPage() {
	const TabName = {
		COMMON: '이벤트 공통',
		QUIZ: '선착순 퀴즈',
		RACE: '캐스퍼 레이싱',
	};
	const [tabName, setTabName] = useState(TabName.COMMON);
	function renderTab() {
		switch (tabName) {
			case TabName.COMMON:
				return <CommonEventTab />;
			case TabName.QUIZ:
				return <QuizEventTab />;
			case TabName.RACE:
				return <RaceEventTab />;
			default:
				return <CommonEventTab />;
		}
	}
	return (
		<div className="w-full">
			<Tab
				tabNames={[TabName.COMMON, TabName.QUIZ, TabName.RACE]}
				selectedTabName={tabName}
				setSelectedTabName={setTabName}
			/>
			{renderTab()}
		</div>
	);
}

export default EventPage;
