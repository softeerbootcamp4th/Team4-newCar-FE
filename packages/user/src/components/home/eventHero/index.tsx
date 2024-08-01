import CarRacing from './CarRacing';
import LandingTitle from './LandingTitle';

/** 랜딩 시 보이는 히어로 섹션 */
export default function EventHero() {
	return (
		<section className="flex flex-col items-center pt-[100px]">
			<LandingTitle />
			<CarRacing />
		</section>
	);
}
