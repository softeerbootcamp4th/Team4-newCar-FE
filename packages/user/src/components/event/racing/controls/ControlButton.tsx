import type { Category } from '@softeer/common/types';
import { memo, useCallback, useEffect, useState } from 'react';
import { useToast } from 'src/hooks/useToast.ts';
import type { Rank } from 'src/types/racing.d.ts';
import ChargeButtonContent from './ChargeButtonContent.tsx';
import ChargeButtonWrapper from './ChargeButtonWrapper.tsx';
import ControllButtonWrapper from './ControllButtonWrapper.tsx';
import Gauge from './Gauge.tsx';

const MAX_CLICK = 10;
const MIN_PERCENT = 2;
const RESET_SECOND = 10000;
const MAX_CLICK_TOAST_DESCRIPTION = '배터리가 떨어질 때까지 기다려주세요!';

interface ControlButtonProps {
	type: Category;
	data: ChargeButtonData;
	onCharge: () => void;
	onFullyCharged: () => void;
}

export interface ChargeButtonData {
	rank: Rank;
	vote: number;
	percentage: number;
}

const ControlButton = memo(
	({ onCharge, onFullyCharged, type, data }: ControlButtonProps) => {
		const { rank, percentage } = data;
		const { progress, clickCount, handleClick } = useGaugeProgress({
			percentage,
			onCharge,
			onFullyCharged,
		});

		return (
			<ControllButtonWrapper rank={rank}>
				<Gauge percent={progress} />
				<ChargeButtonWrapper onClick={handleClick} disabled={clickCount === MAX_CLICK} type={type}>
					<ChargeButtonContent type={type} {...data} />
				</ChargeButtonWrapper>
			</ControllButtonWrapper>
		);
	},
);

export default ControlButton;

/** Custom Hook */
function useGaugeProgress({
	percentage,
	onCharge,
	onFullyCharged,
}: {
	percentage: number;
	onCharge: () => void;
	onFullyCharged: () => void;
}) {
	const { toast } = useToast();
	const [progress, setProgress] = useState(percentage);
	const [clickCount, setClickCount] = useState(0);

	const updateProgress = useCallback((count: number) => {
		const newProgress = calculateProgress(count);
		setProgress(newProgress);
	}, []);

	const resetProgress = useCallback(() => {
		setClickCount(0);
		setProgress(percentage);
	}, [percentage]);

	useEffect(() => {
		if (clickCount > 0 && clickCount <= MAX_CLICK) {
			updateProgress(clickCount);
		}

		if (clickCount === MAX_CLICK) {
			onFullyCharged();
			toast({ description: MAX_CLICK_TOAST_DESCRIPTION });
			const resetTimer = setTimeout(resetProgress, RESET_SECOND);
			return () => clearTimeout(resetTimer);
		}
	}, [clickCount, onFullyCharged, toast, updateProgress, resetProgress]);

	const handleClick = useCallback(() => {
		if (clickCount < MAX_CLICK) {
			setClickCount((count) => count + 1);
			onCharge();
		}
	}, [clickCount, onCharge]);

	return { progress, clickCount, handleClick };
}

/** Utility Function */
function calculateProgress(count: number): number {
	return MIN_PERCENT + (100 - MIN_PERCENT) * (count / MAX_CLICK);
}
