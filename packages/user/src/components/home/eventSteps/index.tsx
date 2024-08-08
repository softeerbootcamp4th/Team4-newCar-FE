import { useNavigate } from 'react-router-dom';
import Button from 'src/components/common/Button.tsx';
import RoutePaths from 'src/constants/routePath.ts';
import EventStep from './EventStep.tsx';
import StepFirst from './StepFirst.tsx';
import StepSecond from './StepSecond.tsx';
import StepThird from './StepThird.tsx';

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
		<section className="gap-15 spacing-11 flex flex-col items-center pb-[150px] pt-[100px] snap-start">
			<h2>참여 방법</h2>
			{EVENT_STEPS.map(({ title, contents }, index) => (
				<EventStep key={title} step={index + 1} title={title}>
					{contents}
				</EventStep>
			))}
			<EventEnterButton />
		</section>
	);
}

function EventEnterButton() {
	const navigate = useNavigate();

	const handleClick = () => navigate(RoutePaths.Event);

	return (
		<Button variants="primary" size="lg" onClick={handleClick}>
			지금 바로 참여하기!
		</Button>
	);
}
