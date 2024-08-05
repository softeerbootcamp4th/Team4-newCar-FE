import EXTERNAL_LINKS from 'src/constants/externalLinks.ts';

const WEB_LINKS = [
	{ text: '캐스퍼 온라인 이용약관', url: EXTERNAL_LINKS.CASPER_AGREEMENTS },
	{ text: '개인정보 처리 방침', url: EXTERNAL_LINKS.HYUNDAI_POLICY },
	{ text: '저작권 안내', url: EXTERNAL_LINKS.HYUNDAI_COPYRIGHT },
	{ text: '공동인증서 안내', url: EXTERNAL_LINKS.HYUNDAI_CERTIFICATE },
	{ text: '현대자동차 웹페이지', url: EXTERNAL_LINKS.HYUNDAI_HOMEPAGE },
];

export default function WebLinks() {
	return (
		<ul className="flex items-center gap-11 border-b border-neutral-300 px-[10px] py-[8px]">
			{WEB_LINKS.map(({ text, url }) => (
				<li key={text}>
					<a target="_blank" href={url} rel="noreferrer">
						{text}
					</a>
				</li>
			))}
		</ul>
	);
}
