import SecondCarShadow from 'src/assets/landing-racing/khaki-shadow.svg?react';
import FirstCarShadow from 'src/assets/landing-racing/orange-shadow.svg?react';
import ThirdCarShadow from 'src/assets/landing-racing/white-shadow.svg?react';

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
			<img
				alt="1등을 달리고 있는 차"
				src="src/assets/landing-racing/orange-car.png"
				className="animate-rotate1 absolute bottom-[40px] left-[4px] z-30"
			/>
		</div>
	);
}

function SecondCar() {
	return (
		<div className="absolute left-[170px] h-full w-[370px]">
			<SecondCarShadow className="absolute bottom-[25px] left-[25px]" />
			<img
				alt="2등을 달리고 있는 차"
				src="src/assets/landing-racing/khaki-car.png"
				className="animate-rotate2 absolute bottom-[70px] z-20"
			/>
		</div>
	);
}

function ThirdCar() {
	return (
		<div className="absolute right-[190px] h-full w-[210px]">
			<ThirdCarShadow className="absolute bottom-[54px] right-[20px]" />
			<img
				alt="3등을 달리고 있는 차"
				src="src/assets/landing-racing/white-car.png"
				className="animate-rotate3 absolute bottom-[70px] right-0 z-10"
			/>
		</div>
	);
}
