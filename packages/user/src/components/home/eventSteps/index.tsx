import EventStep from './EventStep';
import StepFirst from './StepFirst';
import StepSecond from './StepSecond';
import StepThird from './StepThird';

const EVENT_STEPS = [
	{
		title: '나에게 맞는 캐스퍼 유형 찾기',
		contents: <StepFirst />,
	},
	{
		title: '클릭으로 내 유형 캐스퍼 1등 만들기',
		contents: <StepSecond />,
	},
	{
		title: '링크 공유 시 당첨 확률 UP!',
		contents: <StepThird />,
	},
];

/** 이벤트(캐스퍼 레이싱) 참여 방법 섹션 */
export default function EventSteps() {
	return (
		<section className="gap-15 spacing-11 flex flex-col items-center pt-[100px]">
			<h2>참여 방법</h2>
			{EVENT_STEPS.map(({ title, contents }, index) => (
				<EventStep key={title} step={index + 1} title={title}>
					{contents}
				</EventStep>
			))}
		</section>
	);
}
