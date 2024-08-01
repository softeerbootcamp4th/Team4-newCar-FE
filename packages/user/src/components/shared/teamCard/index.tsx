import { PropsWithChildren } from 'react';
import { Category } from 'src/types/user';
import CardBackgroundImage from './CardBackgroundImage';
import CardContent from './CardContent';
import CardGradient from './CardGradient';

export type CardTitle = { label: string; details: string };

const Teams: Record<Category, CardTitle> = {
	pet: { label: '펫 프렌들리', details: '반려동물의 편안하고\n안전한 여행을 위한' },
	travel: { label: '여행의 정석', details: '아웃도어 활동을 쉽고 편하게' },
	place: { label: '공간활용의 기술', details: '많은 물건도 구석구석 알차게' },
	leisure: { label: '레저의 정석', details: '오프로드도 캐스퍼와 함께' },
};

interface TeamCardProps {
	type: Category;
}

export default function TeamCard({ type, children }: PropsWithChildren<TeamCardProps>) {
	const { label, details } = Teams[type];
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
