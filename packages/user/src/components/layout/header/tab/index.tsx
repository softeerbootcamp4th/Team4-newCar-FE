import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import EventTag from 'src/assets/icons/event-tab-tag.svg?react';
import RoutePaths from 'src/constants/routePath';
import NavigateTab from './NavigateTab';
import SelectedTabIndicator from './SelectedTabIndicator';

type Tab = keyof typeof RoutePaths;

const tabs: { label: string; tab: Tab }[] = [
	{ label: '이벤트 소개', tab: 'Home' },
	{ label: '캐스퍼 레이싱', tab: 'Event' },
];

export default function NavigateTabs() {
	const location = useLocation();
	const navigate = useNavigate();
	const [selectedTab, setSelectedTab] = useState<Tab>('Home');

	useEffect(() => {
		setSelectedTab(location.pathname.includes('event') ? 'Event' : 'Home');
	}, [location.pathname]);

	const handleTabClick = (path: Tab) => {
		setSelectedTab(path);
		navigate(RoutePaths[path]);
	};

	return (
		<div className="flex h-full flex-col">
			<div className="flex flex-shrink-0 grow items-center">
				{tabs.map(({ label, tab }) => (
					<NavigateTab
						key={tab}
						isSelected={selectedTab === tab}
						onSelect={() => handleTabClick(tab)}
					>
						{tab === 'Event' && <EventTag />}
						{label}
					</NavigateTab>
				))}
			</div>
			<SelectedTabIndicator selectedTab={selectedTab} />
		</div>
	);
}
