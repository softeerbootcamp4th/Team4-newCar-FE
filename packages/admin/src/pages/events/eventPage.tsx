import { useState } from 'react';
import CommonEventTab from './CommonEventTab';
import QuizEventTab from './QuizEventTab';
import RaceEventTab from './RaceEventTab';

import Tab from 'src/components/common/Tab';

function EventPage() {
	const TabName = {
		COMMON: '이벤트 공통',
		QUIZ: '선착순 퀴즈',
		RACE: '캐스퍼 레이싱',
	};
	const [tabName, setTabName] = useState(TabName.COMMON);
	const renderTab = () => {
		if (tabName === TabName.COMMON) return <CommonEventTab />;
		if (tabName === TabName.QUIZ) return <QuizEventTab />;
		if (tabName === TabName.RACE) return <RaceEventTab />;
	};
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
