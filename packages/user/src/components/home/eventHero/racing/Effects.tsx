import Light1 from 'src/assets/landing-racing/effects/light-1.svg?react';
import Light2 from 'src/assets/landing-racing/effects/light-2.svg?react';
import Light3 from 'src/assets/landing-racing/effects/light-3.svg?react';
import Light4 from 'src/assets/landing-racing/effects/light-4.svg?react';
import Light5 from 'src/assets/landing-racing/effects/light-5.svg?react';
import Light6 from 'src/assets/landing-racing/effects/light-6.svg?react';
import Light7 from 'src/assets/landing-racing/effects/light-7.svg?react';
import Light8 from 'src/assets/landing-racing/effects/light-8.svg?react';
import Sparkle1 from 'src/assets/landing-racing/effects/sparkle-1.svg?react';
import Sparkle2 from 'src/assets/landing-racing/effects/sparkle-2.svg?react';

export default function Effects() {
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
			<Sparkle1 className="absolute bottom-[305px] right-[140px] z-50" />
			<Sparkle2 className="absolute bottom-[300px] right-[120px] z-50" />
		</div>
	);
}
