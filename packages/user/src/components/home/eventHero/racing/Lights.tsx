import Light1 from 'src/assets/landing-racing/lights/light-1.svg?react';
import Light2 from 'src/assets/landing-racing/lights/light-2.svg?react';
import Light3 from 'src/assets/landing-racing/lights/light-3.svg?react';
import Light4 from 'src/assets/landing-racing/lights/light-4.svg?react';
import Light5 from 'src/assets/landing-racing/lights/light-5.svg?react';
import Light6 from 'src/assets/landing-racing/lights/light-6.svg?react';
import Light7 from 'src/assets/landing-racing/lights/light-7.svg?react';
import Light8 from 'src/assets/landing-racing/lights/light-8.svg?react';

export default function Lights() {
	return (
		<div className="absolute h-full w-full">
			<Light1 className="absolute -left-[35px] bottom-[115px] z-50" />
			<Light2 className="absolute -left-[6px] bottom-[110px] z-50" />
			<Light3 className="absolute bottom-[135px] left-[120px] z-50" />
			<Light4 className="absolute bottom-[110px] left-[88px] z-50" />
			<Light5 className="absolute bottom-[163px] left-[110px] z-50" />
			<Light6 className="absolute bottom-[130px] right-[165px] z-50" />
			<Light7 className="absolute bottom-[140px] right-[38px] z-50" />
			<Light8 className="absolute bottom-[130px] right-[17px] z-50" />
		</div>
	);
}
