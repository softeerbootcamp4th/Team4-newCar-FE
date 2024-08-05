import { ReactElement } from 'react';
import TalkingOrangeCasper from 'src/assets/icons/quiz-hint-casper.svg?react';
import HintCard from './HintCard.tsx';
import InfoBox from './InfoBox.tsx';
import InfoTitle from './infoTitle.tsx';

const HINT_CARDS = [
	{
		title: '1회 충전 주행 가능 거리',
		subTitle: '최대 315km',
		details:
			'49kWh 배터리를 적용하여\n여유있는 주행 가능 거리를 제공합니다.\n(15인치 알로이 휠, 인스퍼레이션 트림 기준)',
	},
	{
		title: '페달 오조작 안전 보조',
		subTitle: '운전자와 탑승객 모두 안전하게',
		details:
			'정차 또는 저속 주행 중 전후방 장애물이 가까이 있을 때,\n운전자가 악셀 페달을 브레이크 페달로 오인하여 급조작하는 경우\n가속 제한 및 긴급제동을 통해 충돌 피해를 경감시킵니다.',
	},
	{
		title: (
			<p className="text-heading-7 font-bold">
				<strong>볼드</strong>하고
				<br />
				<strong>유니크</strong>한 디자인
			</p>
		),
		details:
			'전후면부에 현대자동차 EV 모델만의 차별화된 디자인 요소인\n픽셀 그래픽을 적용해 미래지향적이면서도 독창적인 이미지를 완성했습니다.',
	},
];

export default function HintCards() {
	return (
		<div className="relative flex flex-col items-center gap-10">
			<TalkingOrangeCasper className="animate-casper-float absolute -top-[120px] right-[40px]" />
			{HINT_CARDS.map((hint, index) => {
				const [left, right] = determinePositions(getHintElements)(hint, index);
				return <HintCard key={hint.details} left={left} right={right} />;
			})}
		</div>
	);
}

type Hint = {
	details: string;
} & ({ title: string; subTitle: string } | { title: ReactElement; subTitle?: never });

/** utils */

const determinePositions =
	(getContents: (hint: Hint, index: number) => [ReactElement, ReactElement]) =>
	(hint: Hint, index: number) => {
		const contents = getContents(hint, index);
		return index % 2 === 0 ? contents : [contents[1], contents[0]];
	};

const getHintElements = (hint: Hint, index: number): [ReactElement, ReactElement] => [
	createInfoBox(hint),
	createImage(index),
];

function createInfoBox({ title, subTitle, details }: Hint): ReactElement {
	return (
		<InfoBox
			title={subTitle ? <InfoTitle title={title} subTitle={subTitle} /> : title}
			details={details}
		/>
	);
}

function createImage(index: number): ReactElement {
	return (
		<img
			src={`/src/assets/images/hint/${index + 1}.png`}
			className="h-full w-full object-cover"
			alt="힌트"
		/>
	);
}
