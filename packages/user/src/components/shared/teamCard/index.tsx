import { PropsWithChildren } from 'react';
import { TEAM_DESCRIPTIONS } from 'src/constants/teamDescriptions';
import { Category } from 'src/types/user';
import CardBackgroundImage from './CardBackgroundImage';
import CardContent from './CardContent';
import CardGradient from './CardGradient';

interface TeamCardProps {
	type: Category;
}

export default function TeamCard({ type, children }: PropsWithChildren<TeamCardProps>) {
	const { label, details } = TEAM_DESCRIPTIONS[type];
	const src = `/src/assets/images/card-${type}.png`;

	return (
		<div className="relative h-[364px] w-[244px] overflow-hidden rounded-[11px] pb-[21px] pt-[25px]">
			<CardBackgroundImage src={src} alt={label} />
			<CardGradient variant={type} />
			<CardContent label={label} details={details}>
				{children}
			</CardContent>
		</div>
	);
}
