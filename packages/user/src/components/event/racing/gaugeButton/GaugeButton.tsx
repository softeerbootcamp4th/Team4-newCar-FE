import { Category } from '@softeer/common/types';
import { ButtonHTMLAttributes } from 'react';
import GradientBorderWrapper from 'src/components/common/GradientBorderWrapper.tsx';
import { TEAM_DESCRIPTIONS } from 'src/constants/teamDescriptions.ts';
import type { Rank } from './index.tsx';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
	rank: Rank;
	type: Category;
	percent: number;
}

export default function GaugeButton({ type, rank, percent, ...props }: ButtonProps) {
	const { shortTitle, title } = TEAM_DESCRIPTIONS[type];
	const { bgStyles, fontStyles } = styles[type];
	const imageUrl = imageUrls[type];

	const displayTitle = shortTitle ?? title;
	const formattedPercent = percent.toFixed(2);

	return (
		<button {...props} type="button" className="relative overflow-visible group">
			<GradientBorderWrapper>
				<div
					className={`flex h-[84px] w-[250px] gap-7 rounded-[inherit] px-[14px] py-[10px] ${bgStyles}`}
				>
					<h2 className="pt-2">{rank}</h2>
					<div className="flex flex-col items-center">
						<p className={`text-body-3 font-medium ${fontStyles}`}>{formattedPercent}%</p>
						<h6>{displayTitle}</h6>
					</div>
				</div>
			</GradientBorderWrapper>
			<img
				src={imageUrl}
				alt={`${title} 팀 캐스퍼 실물`}
				className={`absolute -bottom-[25px] -right-[18px] z-10 w-[100px] cursor-pointer object-contain ${clickTransition}`}
			/>
		</button>
	);
}

const clickTransition = 'transition-transform duration-300 ease-out group-active:scale-125';

const styles: Record<Category, { bgStyles: string; fontStyles: string }> = {
	travel: { bgStyles: 'bg-gradient-cards1', fontStyles: 'text-orange-500' },
	leisure: { bgStyles: 'bg-gradient-cards3', fontStyles: 'text-yellow-500' },
	place: { bgStyles: 'bg-gradient-cards2', fontStyles: 'text-neutral-200' },
	pet: { bgStyles: 'bg-gradient-cards4', fontStyles: 'text-yellow-500' },
};

const imageUrls: Record<Category, string> = {
	travel: '/images/racing/travel-casper.png',
	leisure: '/images/racing/leisure-casper.png',
	place: '/images/racing/place-casper.png',
	pet: '/images/racing/pet-casper.png',
};
