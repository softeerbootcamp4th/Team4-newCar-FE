/* layer 순서 */
import SecondCarImage from 'src/assets/landing-racing/khaki-car.svg?react'; // 2
import SecondCarShadow from 'src/assets/landing-racing/khaki-shadow.svg?react'; // 5
import FirstCarImage from 'src/assets/landing-racing/orange-car.svg?react'; // 1
import FirstCarShadow from 'src/assets/landing-racing/orange-shadow.svg?react'; // 4
import ThirdCarImage from 'src/assets/landing-racing/white-car.svg?react'; // 3
import ThirdCarShadow from 'src/assets/landing-racing/white-shadow.svg?react'; // 6

export default function Cars() {
	return (
		<>
			<ThirdCar />
			<SecondCar />
			<FirstCar />
		</>
	);
}
function FirstCar() {
	return (
		<div className="absolute left-[389px] h-full w-[490px]">
			<FirstCarShadow className="absolute bottom-0" />
			<FirstCarImage className="animate-rotate1 absolute bottom-[40px] left-[4px] z-30" />
		</div>
	);
}

function SecondCar() {
	return (
		<div className="absolute left-[170px] h-full w-[370px]">
			<SecondCarShadow className="absolute bottom-[25px] left-[25px]" />
			<SecondCarImage className="animate-rotate2 absolute bottom-[70px] z-20" />
		</div>
	);
}

function ThirdCar() {
	return (
		<div className="absolute right-[190px] h-full w-[210px]">
			<ThirdCarShadow className="absolute bottom-[54px] right-[20px]" />
			<ThirdCarImage className="animate-rotate3 absolute bottom-[70px] right-0 z-10" />
		</div>
	);
}
