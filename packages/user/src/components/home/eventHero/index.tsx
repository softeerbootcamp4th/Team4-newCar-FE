import SECTION_ID from 'src/constants/sectionId.ts';
import LandingTitle from './LandingTitle.tsx';
import CarRacing from './racing/index.tsx';

/** 랜딩 시 보이는 히어로 섹션 */
export default function EventHero() {
	return (
		<section id={SECTION_ID.HERO} className="snap-start flex flex-col items-center pt-[100px]">
			<LandingTitle />
			<CarRacing />
		</section>
	);
}
