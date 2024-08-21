import { Category } from '@softeer/common/types';
import { PropsWithChildren, memo } from 'react';
import { TEAM_DESCRIPTIONS } from 'src/constants/teamDescriptions.ts';
import type { ChargeButtonData } from './ControlButton.tsx';

interface ChargeButtonContentProps extends Pick<ChargeButtonData, 'rank'> {
	type: Category;
}

const ChargeButtonContent = memo(
	({ children, rank, type }: PropsWithChildren<ChargeButtonContentProps>) => {
		const { shortTitle, title } = TEAM_DESCRIPTIONS[type];
		const displayTitle = shortTitle ?? title;

		return (
			<>
				<p className="text-heading-2 pt-2 font-extrabold">{rank}</p>
				<div className="flex flex-col items-center">
					<p className={`text-detail-1 font-medium ${voteStyles[type]}`}>{children}</p>
					<p className="text-heading-6 font-extrabold">{displayTitle}</p>
				</div>
			</>
		);
	},
);
export default ChargeButtonContent;

/** Styles */
const voteStyles: Record<Category, string> = {
	travel: 'text-orange-500',
	leisure: 'text-yellow-500',
	place: 'text-neutral-200',
	pet: 'text-yellow-500',
};
