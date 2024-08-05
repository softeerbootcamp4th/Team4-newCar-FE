import { useState } from 'react';
import Tab from 'src/components/common/Tab.tsx';
import CommonEventTab from 'src/pages/events/CommonEventTab.tsx';
import QuizEventTab from 'src/pages/events/QuizEventTab.tsx';
import RaceEventTab from 'src/pages/events/RaceEventTab.tsx';

const TabName = {
	COMMON: '이벤트 공통',
	QUIZ: '선착순 퀴즈',
	RACE: '캐스퍼 레이싱',
};

type TabNameType = (typeof TabName)[keyof typeof TabName];

function RenderTab({ tabName }: { tabName: TabNameType }) {
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

function EventPage() {
	const [tabName, setTabName] = useState<TabNameType>(TabName.COMMON);
	return (
		<div className="w-full">
			<Tab
				tabNames={[TabName.COMMON, TabName.QUIZ, TabName.RACE]}
				selectedTabName={tabName}
				setSelectedTabName={setTabName}
			/>
			<RenderTab tabName={tabName} />
		</div>
	);
}

export default EventPage;
