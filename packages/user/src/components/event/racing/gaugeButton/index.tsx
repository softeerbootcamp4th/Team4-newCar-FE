import { Category } from '@softeer/common/types';
import { useEffect, useState } from 'react';
import Lightning from 'src/assets/icons/lighting.svg?react';
import Gauge from './Gauge.tsx';
import GaugeButton from './GaugeButton.tsx';

export type Rank = 1 | 2 | 3 | 4;

interface TeamGaugeButtonProps {
	type: Category;
	rank: Rank;
}

const MAX_CLICK = 30;
const MIN_PERCENT = 2;
const RESET_SECOND = 1000;

export default function TeamGaugeButton({ type, rank }: TeamGaugeButtonProps) {
	const initPercentage = 40; // TODO: update after socket connecting

	const [progress, setProgress] = useState(0);
	const [clickCount, setClickCount] = useState(0);

	useEffect(() => {
		/** 렌더링 후 initial로 차오름 */
		const timer = setTimeout(() => {
			setProgress(initPercentage);
		}, 0);

		return () => clearTimeout(timer);
	}, [initPercentage]);

	useEffect(() => {
		if (clickCount > 0) {
			setProgress(MIN_PERCENT + (100 - MIN_PERCENT) * (clickCount / MAX_CLICK));
		}

		if (clickCount === MAX_CLICK) {
			/** RESET_SECOND 후에 initial로 되돌아감 */
			const resetTimer = setTimeout(() => {
				setClickCount(0);
				setProgress(initPercentage);
			}, RESET_SECOND);

			return () => clearTimeout(resetTimer);
		}
	}, [clickCount, initPercentage]);

	const handleClick = () => setClickCount((count) => count + 1);

	return (
		<div className="flex flex-col gap-3">
			<div className="flex items-center gap-2">
				<Lightning />
				<Gauge type={type} percent={progress} />
			</div>
			<GaugeButton
				onClick={handleClick}
				disabled={clickCount === MAX_CLICK}
				rank={rank}
				type={type}
				percent={initPercentage}
			/>
		</div>
	);
}
