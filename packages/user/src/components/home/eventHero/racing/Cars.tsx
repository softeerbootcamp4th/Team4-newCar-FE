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
			<img
				alt="1등 차의 그림자"
				src="/images/hero/orange-shadow.png"
				className="absolute bottom-0"
			/>
			<img
				alt="1등으로 달리고 있는 차"
				src="/images/hero/orange-car.png"
				className="animate-rotate1 absolute bottom-[40px] left-[4px] z-30"
			/>
		</div>
	);
}

function SecondCar() {
	return (
		<div className="absolute left-[170px] h-full w-[370px]">
			<img
				alt="2등 차의 그림자"
				src="/images/hero/khaki-shadow.png"
				className="absolute bottom-[25px] left-[25px]"
			/>
			<img
				alt="2등으로 달리고 있는 차"
				src="/images/hero/khaki-car.png"
				className="animate-rotate2 absolute bottom-[70px] z-20"
			/>
		</div>
	);
}

function ThirdCar() {
	return (
		<div className="absolute right-[190px] h-full w-[210px]">
			<img
				alt="3등 차의 그림자"
				src="/images/hero/white-shadow.png"
				className="absolute bottom-[54px] right-[20px]"
			/>
			<img
				alt="3등으로 달리고 있는 차"
				src="/images/hero/white-car.png"
				className="animate-rotate3 absolute bottom-[70px] right-0 z-10"
			/>
		</div>
	);
}
