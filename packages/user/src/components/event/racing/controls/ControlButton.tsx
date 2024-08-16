import type { Category } from '@softeer/common/types';
import numeral from 'numeral';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
	const { rank, vote, percentage } = data;
	const { progress, handleClick } = useGaugeProgress({
		percentage,
		onCharge,
		onFullyCharged,
	});

	const displayVoteStats = useMemo(
		() => `${percentage.toFixed(1)}% (${formatVoteCount(vote)})`,
		[percentage, vote],
	);

	return (
		<ControllButtonWrapper rank={rank}>
			<Gauge percent={progress} />
			<ChargeButtonWrapper onClick={handleClick} type={type}>
				<ChargeButtonContent type={type} rank={rank}>
					{displayVoteStats}
				</ChargeButtonContent>
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

/** Utility Functions */
function formatVoteCount(count: number): string {
	const formatted = numeral(count).format('0,0'); // 기본 포맷팅
	return convertToKoreanUnit(formatted);
}

function convertToKoreanUnit(formatted: string): string {
	const number = parseFloat(formatted.replace(/,/g, ''));

	if (number >= 100000000) {
		return `${(number / 100000000).toFixed(2)}억`;
	}
	if (number >= 10000) {
		return `${(number / 10000).toFixed(2)}만`;
	}
	return formatted;
}
