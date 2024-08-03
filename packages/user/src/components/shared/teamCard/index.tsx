import { PropsWithChildren } from 'react';
import { TEAM_DESCRIPTIONS } from 'src/constants/team';
import type { Category } from 'src/types/category';
import CardBackgroundImage from './CardBackgroundImage';
import CardContent from './CardContent';
import CardGradient from './CardGradient';

interface TeamCardProps {
	type: Category;
}

export default function TeamCard({ type, children }: PropsWithChildren<TeamCardProps>) {
	const { title, summary } = TEAM_DESCRIPTIONS[type];
	const src = `/src/assets/images/card/${type}.png`;

	return (
		<div className="relative h-[364px] w-[244px] overflow-hidden rounded-[11px] pb-[21px] pt-[25px]">
			<CardBackgroundImage src={src} alt={title} />
			<CardGradient variant={type} />
			<CardContent title={title} summary={summary}>
				{children}
			</CardContent>
		</div>
	);
}
