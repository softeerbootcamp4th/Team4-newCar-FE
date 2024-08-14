import type { Category } from '@softeer/common/types';
import { useEffect, useRef, useState } from 'react';
import Lightning from 'src/assets/icons/lighting.svg?react';
import { useToast } from 'src/hooks/useToast.ts';
import type { Rank } from 'src/types/rank.d.ts';
import Gauge from './Gauge.tsx';
import TeamButton from './TeamButton.tsx';

interface ControlButtonProps {
	type: Category;
	rank: Rank;
	percentage: number;
	onCharge: () => void;
}

const MAX_CLICK = 10;
const MIN_PERCENT = 2;
const RESET_SECOND = 10000;

const MAX_CLICK_TOAST_DESCRIPTION = '배터리가 떨어질 때까지 기다려주세요!';

export default function ControlButton({
	type,
	rank,
	percentage: originPercentage,
	onCharge,
}: ControlButtonProps) {
	const { progress, clickCount, handleClick } = useGaugeProgress(originPercentage, onCharge);

	return (
		<div
			className={`absolute flex transform flex-col gap-3 transition-all duration-500 ease-in-out ${styles[rank]}`}
		>
			<div className="flex items-center gap-2">
				<Lightning />
				<Gauge percent={progress} />
			</div>
			<TeamButton
				onClick={handleClick}
				disabled={clickCount === MAX_CLICK}
				rank={rank}
				type={type}
				percent={originPercentage}
			/>
		</div>
	);
}

const styles: Record<Rank, string> = {
	1: 'left-[40px] z-40',
	2: 'left-[310px] z-30',
	3: 'left-[580px] z-20',
	4: 'left-[850px] z-10',
};

function useGaugeProgress(originPercentage: number, onClick: () => void) {
	const { toast } = useToast();

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
			toast({ description: MAX_CLICK_TOAST_DESCRIPTION });
			const resetTimer = setTimeout(resetToInitProgress, RESET_SECOND);
			return () => clearTimeout(resetTimer);
		}
	}, [clickCount, originPercentage]);

	const handleClick = () => {
		if (clickCount < MAX_CLICK) {
			setClickCount((count) => count + 1);
			onClick();
		}
	};

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
