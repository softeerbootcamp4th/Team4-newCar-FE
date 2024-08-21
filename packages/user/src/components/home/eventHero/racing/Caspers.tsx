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
		<div className="animate-casper-float-reverse absolute right-[92px] top-0 w-[150px]">
			<p className="text-detail-3 text-background absolute right-[18px] top-[2px] z-10 font-medium">
				&quot;거침없이 누구보다 빠르게&quot;
			</p>
			<img
				src="images/hero/casper/orange-bubble.webp"
				alt="여행 팀 캐스퍼 말풍선"
				className="absolute right-0"
			/>
			<img
				src="images/hero/casper/orange.webp"
				alt="여행 팀 캐스퍼 캐릭터"
				className="absolute right-[100px] top-[35px] w-[120px]"
			/>
		</div>
	);
}

function CreamCasper() {
	return (
		<div className="animate-casper-float absolute left-[37px] top-0 w-[220px]">
			<p className="text-detail-3 text-background absolute left-[20px] top-[2px] font-medium">
				&quot;캐스퍼의 주인공은 누구?&quot;
			</p>
			<img src="images/hero/casper/cream-bubble.webp" alt="펫 팀 캐스퍼 말풍선" />
			<img
				src="images/hero/casper/cream.webp"
				alt="펫 팀 캐스퍼 캐릭터"
				className="absolute left-[90px] w-[100px]"
			/>
			<img
				src="images/hero/casper/lighting.webp"
				alt="펫 팀 캐릭터 옆 큰 번개"
				className="animate-sparkle absolute -top-[2px] right-[4px]"
			/>
			<img
				src="images/hero/casper/lighting.webp"
				alt="펫 팀 캐릭터 옆 작은 번개"
				className="animate-sparkle-reverse absolute right-0 top-[22px] w-[10px]"
			/>
		</div>
	);
}

function WhiteCasper() {
	return (
		<div className="animate-casper-float-reverse absolute left-[270px] top-[40px]">
			<img src="images/hero/casper/white.webp" alt="공간 팀 캐스퍼 캐릭터" />
		</div>
	);
}

function KhakiCasper() {
	return (
		<div className="animate-casper-float absolute -top-[2px] right-[295px]">
			<img src="images/hero/casper/khaki.webp" alt="레저 팀 캐스퍼 캐릭터" />
		</div>
	);
}
