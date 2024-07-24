import { useState } from 'react';
import { Button } from 'src/components/ui/button';

function WinnerResult() {
	// const [rankList, setRankList] = useState<{ rank: number; winnerCount: string }[]>([]);
	const [tabName, setTabName] = useState('fastestTab');
	const handleTab = (_tabName: string) => {
		setTabName(_tabName);
	};
	return (
		<div className="flex w-[600px] flex-col gap-2">
			<div className="flex flex-row">
				<Button
					id="fastestTab"
					disabled={tabName === 'fastestTab'}
					onClick={() => handleTab('fastestTab')}
				>
					fastestTab
				</Button>
				<Button
					id="racingTab"
					disabled={tabName === 'racingTab'}
					onClick={() => handleTab('racingTab')}
				>
					racingTab
				</Button>
			</div>
		</div>
	);
}
export default WinnerResult;
