const WEB_LINKS = [
	{ text: '캐스퍼 온라인 이용약관', url: 'https://casper.hyundai.com/agreements' },
	{ text: '개인정보 처리 방침', url: 'https://privacy.hyundai.com/overview/full-policy' },
	{ text: '저작권 안내', url: 'https://www.hyundai.com/kr/ko/copyright' },
	{ text: '공동인증서 안내', url: 'https://casper.hyundai.com/certificate' },
	{ text: '현대자동차 웹페이지', url: 'https://www.hyundai.com' },
];

export default function WebLinks() {
	return (
		<ul className="flex items-center gap-11 border-b border-neutral-300 px-[10px] py-[8px]">
			{WEB_LINKS.map(({ text, url }) => (
				<li>
					<a target="_blank" key={text} href={url}>
						{text}
					</a>
				</li>
			))}
		</ul>
	);
}
