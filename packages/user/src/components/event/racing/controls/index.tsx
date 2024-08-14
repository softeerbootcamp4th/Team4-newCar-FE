import { CATEGORIES } from '@softeer/common/constants';
import { Category } from '@softeer/common/types';
import type { CategoryRankMap } from 'src/types/rank.d.ts';
import ControlButton from './ControlButton.tsx';

interface RacingControlsProps {
	ranks: CategoryRankMap;
	onCharge: (type: Category) => void;
}
export default function RacingControls({ ranks, onCharge }: RacingControlsProps) {
	return (
		<div className="relative h-[150px] w-full">
			{CATEGORIES.map((type) => (
				<ControlButton
					key={type}
					type={type}
					rank={ranks[type]}
					percentage={25}
					onCharge={() => onCharge(type)}
				/>
			))}
		</div>
	);
}
