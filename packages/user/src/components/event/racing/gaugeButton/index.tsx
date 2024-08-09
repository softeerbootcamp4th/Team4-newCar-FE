import { Category } from '@softeer/common/types';
import { useEffect, useRef, useState } from 'react';
import Lightning from 'src/assets/icons/lighting.svg?react';
import Gauge from './Gauge.tsx';
import GaugeButton from './GaugeButton.tsx';

const ranks = [1, 2, 3, 4] as const;
export type Rank = typeof ranks[number];

interface TeamGaugeButtonProps {
	type: Category;
	rank: Rank;
	percentage: number;
}

const MAX_CLICK = 30;
const MIN_PERCENT = 2;
const RESET_SECOND = 1000;

export default function TeamGaugeButton({
	type,
	rank,
	percentage: originPercentage,
}: TeamGaugeButtonProps) {
	const { progress, clickCount, handleClick } = useGaugeProgress(originPercentage);

	return (
		<div className="flex flex-col gap-3">
			<div className="flex items-center gap-2">
				<Lightning />
				<Gauge percent={progress} />
			</div>
			<GaugeButton
				onClick={handleClick}
				disabled={clickCount === MAX_CLICK}
				rank={rank}
				type={type}
				percent={originPercentage}
			/>
		</div>
	);
}

function useGaugeProgress(originPercentage: number) {
	const [progress, setProgress] = useState(0);
	const [clickCount, setClickCount] = useState(0);
	const initPercentageRef = useRef(originPercentage);

	useEffect(() => {
		initPercentageRef.current = originPercentage;
	}, [originPercentage]);

	useEffect(() => {
		const resetProgress = requestAnimationFrame(() => setProgress(initPercentageRef.current));
		return () => cancelAnimationFrame(resetProgress);
	}, []);

	useEffect(() => {
		if (clickCount > 0 && clickCount <= MAX_CLICK) {
			updateProgress(clickCount);
		}

		if (clickCount === MAX_CLICK) {
			const resetTimer = setTimeout(resetToInitProgress, RESET_SECOND);
			return () => clearTimeout(resetTimer);
		}
	}, [clickCount, originPercentage]);

	const handleClick = () => clickCount < MAX_CLICK && setClickCount((count) => count + 1);

	const updateProgress = (count: number) => {
		const newProgress = MIN_PERCENT + (100 - MIN_PERCENT) * (count / MAX_CLICK);
		setProgress(newProgress);
	};

	const resetToInitProgress = () => {
		setClickCount(0);
		setProgress(initPercentageRef.current);
	};

  return { progress, clickCount, handleClick };
}
