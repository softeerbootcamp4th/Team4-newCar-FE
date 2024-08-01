import Background from './Background';
import { FirstCar, SecondCar, ThirdCar } from './Cars';
import Effects from './Effects';

export default function CarRacing() {
	return (
		<div className="relative flex h-[520px] w-[1155px]">
			<Background />
			<Effects />
			<ThirdCar />
			<SecondCar />
			<FirstCar />
		</div>
	);
}
