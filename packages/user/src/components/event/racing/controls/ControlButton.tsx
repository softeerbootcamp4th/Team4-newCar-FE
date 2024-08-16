import type { Category } from '@softeer/common/types';
import { useCallback, useEffect, useRef, useState } from 'react';
import useAuth from 'src/hooks/useAuth.tsx';
import { useToast } from 'src/hooks/useToast.ts';
import type { Rank } from 'src/types/racing.d.ts';
import ChargeButtonContent from './ChargeButtonContent.tsx';
import ChargeButtonWrapper from './ChargeButtonWrapper.tsx';
import ControllButtonWrapper from './ControllButtonWrapper.tsx';
import Gauge from './Gauge.tsx';

const DISABLED_RACING_TOAST_DESCRIPTION = '로그인 후 레이싱에 참여할 수 있습니다!';
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

export default function ControlButton({
	onCharge,
	onFullyCharged,
	type,
	data,
}: ControlButtonProps) {
	const { rank, percentage } = data;
	const { progress, handleClick } = useGaugeProgress({
		percentage,
		onCharge,
		onFullyCharged,
	});

	return (
		<ControllButtonWrapper rank={rank}>
			<Gauge percent={progress} />
			<ChargeButtonWrapper onClick={handleClick} type={type}>
				<ChargeButtonContent type={type} {...data} />
			</ChargeButtonWrapper>
		</ControllButtonWrapper>
	);
}

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
	const { isAuthenticated } = useAuth();

	const [progress, setProgress] = useState(percentage);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => setProgress(percentage), [percentage]);

	const handleClick = useCallback(() => {
		onCharge();
		setProgress(100);

		if (!isAuthenticated) {
			toast({ description: DISABLED_RACING_TOAST_DESCRIPTION });
		} else {
			onFullyCharged();
		}

		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(() => setProgress(percentage), 1000);
	}, [onCharge, onFullyCharged, isAuthenticated, percentage, toast]);

	return { progress, handleClick };
}
