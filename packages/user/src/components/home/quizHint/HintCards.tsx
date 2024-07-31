import { ReactElement } from 'react';
import HintCard from 'src/components/home/quizHint/HintCard';
import InfoBox from 'src/components/home/quizHint/InfoBox';
import InfoTitle from 'src/components/home/quizHint/infoTitle';

const HINT_CARDS = [
	{
		imageSrc: '/src/assets/images/hint-1.png',
		info: {
			title: '1회 충전 주행 가능 거리',
			subTitle: '최대 315km',
			details:
				'49kWh 배터리를 적용하여\n여유있는 주행 가능 거리를 제공합니다.\n(15인치 알로이 휠, 인스퍼레이션 트림 기준)',
		},
	},
	{
		imageSrc: '/src/assets/images/hint-2.png',
		info: {
			title: '페달 오조작 안전 보조',
			subTitle: '운전자와 탑승객 모두 안전하게',
			details:
				'정차 또는 저속 주행 중 전후방 장애물이 가까이 있을 때,\n운전자가 악셀 페달을 브레이크 페달로 오인하여 급조작하는 경우\n가속 제한 및 긴급제동을 통해 충돌 피해를 경감시킵니다.',
		},
	},
	{
		imageSrc: '/src/assets/images/hint-3.png',
		info: {
			title: (
				<p className="text-heading-7">
					<strong>볼드</strong>하고
					<br />
					<strong>유니크</strong>한 디자인
				</p>
			),
			details:
				'전후면부에 현대자동차 EV 모델만의 차별화된 디자인 요소인\n픽셀 그래픽을 적용해 미래지향적이면서도 독창적인 이미지를 완성했습니다.',
		},
	},
];

type Info = {
	details: string;
} & ({ title: string; subTitle: string } | { title: ReactElement; subTitle?: never });

interface Hint {
	imageSrc: string;
	info: Info;
}

export default function HintCards() {
	/* utils */

	const getHintElements = (hint: Hint): [ReactElement, ReactElement] => {
		const {
			imageSrc,
			info: { title, subTitle, details },
		} = hint;

		const infoBox = (
			<InfoBox
				title={subTitle ? <InfoTitle title={title} subTitle={subTitle} /> : title}
				details={details}
			/>
		);

		const image = <img src={imageSrc} className="h-full w-full object-cover" alt="힌트" />;

		return [infoBox, image];
	};

	const determinePositions =
		(getContents: (hint: Hint) => [ReactElement, ReactElement]) =>
		(hint: Hint, index: number): [ReactElement, ReactElement] => {
			const contents = getContents(hint);
			return index % 2 === 0 ? contents : [contents[1], contents[0]];
		};

	return (
		<div className="flex flex-col items-center gap-10">
			{HINT_CARDS.map((hint, index) => {
				const [left, right] = determinePositions(getHintElements)(hint, index);
				return <HintCard key={hint.imageSrc} left={left} right={right} />;
			})}
		</div>
	);
}
