import { CATEGORIES } from '@softeer/common/constants';
import { Category } from '@softeer/common/types';
import type { CategoryRankMap } from 'src/types/rank.d.ts';
import ControlButton from './ControlButton.tsx';

interface RacingControlsProps {
	ranks: CategoryRankMap;
	setScaledType: (type: Category) => void;
}

export default function RacingControls({ ranks, setScaledType }: RacingControlsProps) {
	return (
		<div className="relative h-[150px] w-full">
			{CATEGORIES.map((type) => (
				<ControlButton
					key={type}
					type={type}
					rank={ranks[type]}
					percentage={25}
					onScale={() => setScaledType(type)}
				/>
			))}
		</div>
	);
}
