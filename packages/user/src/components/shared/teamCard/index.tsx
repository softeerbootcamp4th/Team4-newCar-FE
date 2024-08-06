import type { Category } from '@softeer/common/types';
import { PropsWithChildren } from 'react';
import { TEAM_DESCRIPTIONS } from 'src/constants/teamDescriptions.ts';
import CardBackgroundImage from './CardBackgroundImage.tsx';
import CardContent from './CardContent.tsx';
import CardGradient from './CardGradient.tsx';

interface TeamCardProps {
	type: Category;
}

export default function TeamCard({ type, children }: PropsWithChildren<TeamCardProps>) {
	const { title, summary } = TEAM_DESCRIPTIONS[type];
	const src = `images/card/${type}.png`;

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
