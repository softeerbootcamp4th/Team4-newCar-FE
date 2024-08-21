import type { Category } from '@softeer/common/types';
import { cn } from '@softeer/common/utils';
import { PropsWithChildren } from 'react';
import { TEAM_DESCRIPTIONS } from 'src/constants/teamDescriptions.ts';
import CardBackgroundImage from './CardBackgroundImage.tsx';
import CardContent from './CardContent.tsx';
import CardGradient from './CardGradient.tsx';

export type TeamCardSizeType = 'description' | 'racing' | 'modal';
interface TeamCardProps {
	type: Category;
	size: TeamCardSizeType;
}

export default function TeamCardTemplate({
	type,
	size,
	children,
}: PropsWithChildren<TeamCardProps>) {
	const { title, subTitle } = TEAM_DESCRIPTIONS[type];
	const src = `images/card/${type}.webp`;

	const { cardStyles, titleStyles, descriptionStyles } = styles[size];

	return (
		<div className={cn(cardStyles, 'relative overflow-hidden rounded-[11px]')}>
			<CardBackgroundImage src={src} alt={title} />
			<CardGradient variant={type} />
			<CardContent>
				<div className="text-center">
					<p className={titleStyles}>{title}</p>
					<p className={cn(descriptionStyles, 'whitespace-pre-line')}>{subTitle}</p>
				</div>
				{children}
			</CardContent>
		</div>
	);
}

const styles: Record<
	TeamCardSizeType,
	{
		cardStyles: string;
		titleStyles: string;
		descriptionStyles: string;
	}
> = {
	description: {
		cardStyles: 'h-[364px] w-[244px] pb-[21px] pt-[25px]',
		titleStyles: 'text-heading-5 font-extrabold',
		descriptionStyles: 'text-detail-2',
	},
	racing: {
		cardStyles: 'w-[160px] h-[234px] pt-[15px] pb-[18px]',
		titleStyles: 'text-body-2 font-extrabold leading-[22px]',
		descriptionStyles: 'text-detail-3 leading-[15px]',
	},
	modal: {
		cardStyles: 'w-[279px] h-[400px] pb-[30px] pt-[25px]',
		titleStyles: 'text-heading-5 font-extrabold',
		descriptionStyles: 'text-detail-1',
	},
};
