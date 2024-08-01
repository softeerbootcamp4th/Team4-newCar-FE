import Background from './Background';
import { FirstCar, SecondCar, ThirdCar } from './Cars';
import Lights from './Lights';

export default function CarRacing() {
	return (
		<div className="relative flex h-[520px] w-[1155px]">
			<Background />
			<Lights />
			<ThirdCar />
			<SecondCar />
			<FirstCar />
		</div>
	);
}
