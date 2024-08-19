import { Button } from 'src/components/ui/button.tsx';

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
		<div className="flex flex-row mb-4" >
			<div className="border-cream-900 flex-0 bg-khaki-500 flex flex-row gap-2 border-2 rounded-4 p-3">
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
		</div>
	);
}
export default Tab;
