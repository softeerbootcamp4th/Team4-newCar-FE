import { Button } from 'src/components/ui/button';

interface CommonTabProps {
	tabNames: string[];
	selectedTabName: string;
	setSelectedTabName: React.Dispatch<React.SetStateAction<string>>;
}

function Tab({ selectedTabName, setSelectedTabName, tabNames }: CommonTabProps) {
	const handleSelect = (tabname: string) => {
		setSelectedTabName(tabname);
	};
	return (
		<div className="flex flex-row">
			{tabNames.map((tabName) => (
				<Button
					key={tabName}
					disabled={selectedTabName === tabName}
					onClick={() => handleSelect(tabName)}
				>
					{tabName}
				</Button>
			))}
		</div>
	);
}
export default Tab;
