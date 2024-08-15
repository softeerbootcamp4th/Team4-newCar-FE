import type { Category } from '@softeer/common/types';
import { ButtonHTMLAttributes } from 'react';
import GradientBorderWrapper from 'src/components/common/GradientBorderWrapper.tsx';

const imageUrls: Record<Category, string> = {
	travel: '/images/racing/side/travel.png',
	leisure: '/images/racing/side/leisure.png',
	place: '/images/racing/side/place.png',
	pet: '/images/racing/side/pet.png',
};

interface ChargeButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
	type: Category;
}

export default function ChargeButtonWrapper({
	type,
	disabled = false,
	children,
	...props
}: ChargeButtonProps) {
	const imageUrl = imageUrls[type];
	const styles = getStyles({ type, isActive: !disabled });

	return (
		<button type="button" disabled={disabled} className={styles.button} {...props}>
			<GradientBorderWrapper className={styles.borderWrapper}>
				<div className={styles.innerborderWrapper}>{children}</div>
			</GradientBorderWrapper>
			<img src={imageUrl} alt={`${type} 팀 캐스퍼 실물`} className={styles.image} />=
		</button>
	);
}

function getStyles({ type, isActive }: { type: Category; isActive: boolean }) {
	const bgStyles: Record<Category, string> = {
		travel: 'bg-gradient-cards1',
		leisure: 'bg-gradient-cards2',
		place: 'bg-gradient-cards3',
		pet: 'bg-gradient-cards4',
	};

	const imageBaseStyles = 'absolute -bottom-[25px] -right-[18px] z-10 w-[100px] object-contain';

	return {
		image: `${imageBaseStyles} ${isActive ? 'transition-transform duration-300 ease-out group-active:scale-125' : ''}`,
		button: 'relative overflow-visible group disabled:opacity-50',
		borderWrapper: isActive ? 'group-active:animate-rotate' : '',
		innerborderWrapper: `flex h-[84px] w-[240px] gap-7 rounded-[inherit] px-[10px] py-[10px] ${bgStyles[type]}`,
	};
}
