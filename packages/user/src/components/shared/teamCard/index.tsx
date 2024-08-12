import type { Category } from '@softeer/common/types';
import { cn } from '@softeer/common/utils';
import { PropsWithChildren } from 'react';
import { TEAM_DESCRIPTIONS } from 'src/constants/teamDescriptions.ts';
import CardBackgroundImage from './CardBackgroundImage.tsx';
import CardContent from './CardContent.tsx';
import CardGradient from './CardGradient.tsx';

interface TeamCardProps {
	type: Category;
	size: 'description' | 'racing';
}

export default function TeamCard({ type, size, children }: PropsWithChildren<TeamCardProps>) {
	const { title, summary } = TEAM_DESCRIPTIONS[type];
	const src = `images/card/${type}.png`;

	const { cardStyles, titleStyles, descriptionStyles } = styles[size];

	return (
		<div className={cn(cardStyles, 'relative overflow-hidden rounded-[11px]')}>
			<CardBackgroundImage src={src} alt={title} />
			<CardGradient variant={type} />
			<CardContent>
				<div className="text-center">
					<h5 className={titleStyles}>{title}</h5>
					<p className={cn(descriptionStyles, 'whitespace-pre-line')}>{summary}</p>
				</div>
				{children}
			</CardContent>
		</div>
	);
}

const styles = {
	description: {
		cardStyles: 'h-[364px] w-[244px] pb-[21px] pt-[25px]',
		titleStyles: '',
		descriptionStyles: 'text-detail-2',
	},
	racing: {
		cardStyles: 'w-[160px] h-[234px] pt-[15px] pb-[18px]',
		titleStyles: 'text-[22px] leading-[22px]',
		descriptionStyles: 'text-detail-3 leading-[15px]',
	},
};
