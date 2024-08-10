import { CATEGORIES } from '@softeer/common/constants';
import type { Category } from '@softeer/common/types';
import type { CategoryRankMap } from 'src/types/rank.d.ts';
import Casper from './Casper.tsx';

const imageUrls: Record<Category, string> = {
	travel: '/images/racing/front/travel.png',
	leisure: '/images/racing/front/leisure.png',
	place: '/images/racing/front/place.png',
	pet: '/images/racing/front/pet.png',
};

export default function Caspers({ ranks }: { ranks: CategoryRankMap }) {
	return (
		<>
			{CATEGORIES.map((type) => (
				<Casper key={type} rank={ranks[type]} imageUrl={imageUrls[type]} />
			))}
		</>
	);
}
