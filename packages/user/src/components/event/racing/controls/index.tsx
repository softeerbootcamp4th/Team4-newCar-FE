import { CATEGORIES } from '@softeer/common/constants';
import { Category } from '@softeer/common/types';
import { CategoryRankMap } from 'src/types/rank.js';
import ControlButton from './ControlButton.tsx';

interface RacingControlsProps {
	ranks: CategoryRankMap;
	setScaledType: (type: Category) => void;
}

export default function RacingControls({ ranks, setScaledType }: RacingControlsProps) {
	return (
		<div className="relative mt-[50px] h-[300px] w-full">
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
