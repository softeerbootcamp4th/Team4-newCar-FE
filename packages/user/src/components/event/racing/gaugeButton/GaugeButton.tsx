import { Category } from '@softeer/common/types';
import { ButtonHTMLAttributes } from 'react';
import GradientBorderWrapper from 'src/components/common/GradientBorderWrapper.tsx';
import { TEAM_DESCRIPTIONS } from 'src/constants/teamDescriptions.ts';
import type { Rank } from './index.tsx';

const imageUrls: Record<Category, string> = {
	travel: '/images/racing/side/travel.png',
	leisure: '/images/racing/side/leisure.png',
	place: '/images/racing/side/place.png',
	pet: '/images/racing/side/pet.png',
};

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
	type: Category;
	rank: Rank;
	percent: number;
}

export default function GaugeButton({
	type,
	rank,
	percent,
	disabled = false,
	...props
}: ButtonProps) {
	const { shortTitle, title } = TEAM_DESCRIPTIONS[type];
	const imageUrl = imageUrls[type];

	const displayTitle = shortTitle ?? title;
	const formattedPercent = percent.toFixed(2);

	const styles = getStyles({ type, isActive: !disabled });

	return (
		<button type="button" disabled={disabled} className={styles.button} {...props}>
			<GradientBorderWrapper className={styles.borderWrapper}>
				<div className={styles.innerborderWrapper}>
					<h2 className="pt-2">{rank}</h2>
					<div className="flex flex-col items-center">
						<p className={styles.percent}>{formattedPercent}%</p>
						<h6>{displayTitle}</h6>
					</div>
				</div>
			</GradientBorderWrapper>
			<img src={imageUrl} alt={`${title} 팀 캐스퍼 실물`} className={styles.image} />
		</button>
	);
}

function getStyles({ type, isActive }: { type: Category; isActive: boolean }) {
	const { bgStyles, fontStyles } = styles[type];
	const imageBaseStyles = 'absolute -bottom-[25px] -right-[18px] z-10 w-[100px] object-contain';

	return {
		percent: `text-body-3 font-medium ${fontStyles}`,
		image: `${imageBaseStyles} ${isActive ? 'transition-transform duration-300 ease-out group-active:scale-125' : ''}`,
		button: 'relative overflow-visible group disabled:opacity-70',
		borderWrapper: isActive ? 'group-active:animate-rotate' : '',
		innerborderWrapper: `flex h-[84px] w-[250px] gap-7 rounded-[inherit] px-[14px] py-[10px] ${bgStyles}`,
	};
}

const styles: Record<Category, { bgStyles: string; fontStyles: string }> = {
	travel: { bgStyles: 'bg-gradient-cards1', fontStyles: 'text-orange-500' },
	leisure: { bgStyles: 'bg-gradient-cards2', fontStyles: 'text-yellow-500' },
	place: { bgStyles: 'bg-gradient-cards3', fontStyles: 'text-neutral-200' },
	pet: { bgStyles: 'bg-gradient-cards4', fontStyles: 'text-yellow-500' },
};
