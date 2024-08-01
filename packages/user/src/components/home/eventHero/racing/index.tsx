import { FirstCar, SecondCar, ThirdCar } from 'src/components/home/eventHero/racing/Cars';

export default function CarRacing() {
	return (
		<div className="relative flex h-[520px] w-[1155px]">
			<RacingBackground />
			<ThirdCar />
			<SecondCar />
			<FirstCar />
		</div>
	);
}

function RacingBackground() {
	return (
		<img
			src="/src/assets/landing-racing/background.png"
			alt="카레이싱 배경"
			className="w-full self-end"
		/>
	);
}
