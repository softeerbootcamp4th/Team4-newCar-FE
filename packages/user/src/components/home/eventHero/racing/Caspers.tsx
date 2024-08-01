import CreamBubble from 'src/assets/landing-racing/casper/cream-bubble.svg?react';
import CreamCharacter from 'src/assets/landing-racing/casper/cream.svg?react';
import KhakiCharacter from 'src/assets/landing-racing/casper/khaki.svg?react';
import Lighting1 from 'src/assets/landing-racing/casper/lighting-1.svg?react';
import Lighting2 from 'src/assets/landing-racing/casper/lighting-2.svg?react';
import OrangeBubble from 'src/assets/landing-racing/casper/orange-bubble.svg?react';
import OrangeCharacter from 'src/assets/landing-racing/casper/orange.svg?react';
import WhiteCharacter from 'src/assets/landing-racing/casper/white.svg?react';

export default function Caspers() {
	return (
		<>
			<CreamCasper />
			<OrangeCasper />
			<KhakiCasper />
			<WhiteCasper />
		</>
	);
}

function OrangeCasper() {
	return (
		<div className="animate-casper-float-reverse absolute right-[92px] top-[15px] w-[150px]">
			<p className="text-detail-3 text-background absolute right-[18px] top-[2px] z-10 font-medium">
				&quot;거침없이 누구보다 빠르게&quot;
			</p>
			<OrangeBubble className="absolute right-0" />
			<OrangeCharacter className="absolute right-[100px] top-[35px]" />
		</div>
	);
}

function CreamCasper() {
	return (
		<div className="animate-casper-float absolute left-[37px] top-[2px] w-[220px]">
			<p className="text-detail-3 text-background absolute left-[20px] top-[2px] font-medium">
				&quot;캐스퍼의 주인공은 누구?&quot;
			</p>
			<CreamBubble />
			<CreamCharacter className="absolute left-[110px] top-[35px]" />
			<Lighting1 className="animate-sparkle absolute -top-[2px] right-[4px]" />
			<Lighting2 className="animate-sparkle-reverse absolute right-0 top-[22px]" />
		</div>
	);
}

function WhiteCasper() {
	return (
		<div className="animate-casper-float-reverse absolute left-[270px] top-[55px]">
			<WhiteCharacter />
		</div>
	);
}

function KhakiCasper() {
	return (
		<div className="animate-casper-float absolute -top-[2px] right-[295px]">
			<KhakiCharacter />
		</div>
	);
}
