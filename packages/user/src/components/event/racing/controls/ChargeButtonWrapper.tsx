import type { Category } from '@softeer/common/types';
import { PropsWithChildren } from 'react';
import GradientBorderWrapper from 'src/components/common/GradientBorderWrapper.tsx';

const imageUrls: Record<Category, string> = {
	travel: '/images/racing/side/travel.webp',
	leisure: '/images/racing/side/leisure.webp',
	place: '/images/racing/side/place.webp',
	pet: '/images/racing/side/pet.webp',
};

interface ChargeButtonWrapperProps {
	type: Category;
	isActive: boolean;
}

export default function ChargeButtonWrapper({
	type,
	isActive,
	children,
}: PropsWithChildren<ChargeButtonWrapperProps>) {
	const imageUrl = imageUrls[type];
	const styles = getStyles({ type, isActive });

	return (
		<div className={styles.container}>
			<GradientBorderWrapper className={styles.borderWrapper}>
				<div className={styles.innerborderWrapper}>{children}</div>
			</GradientBorderWrapper>
			<img src={imageUrl} alt={`${type} 팀 캐스퍼 실물`} className={styles.image} />
		</div>
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
		container: 'relative overflow-visible group disabled:opacity-50',
		borderWrapper: isActive ? 'group-active:animate-rotate' : '',
		innerborderWrapper: `flex h-[84px] w-[240px] gap-7 rounded-[inherit] px-[10px] py-[10px] ${bgStyles[type]}`,
	};
}
