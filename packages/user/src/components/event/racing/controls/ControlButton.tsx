import type { Category } from '@softeer/common/types';
import numeral from 'numeral';

import { memo, useMemo } from 'react';
import useAuth from 'src/hooks/useAuth.ts';
import type { Rank } from 'src/types/racing.d.ts';
import ChargeButtonContent from './ChargeButtonContent.tsx';
import ChargeButtonWrapper from './ChargeButtonWrapper.tsx';
import ControllButtonWrapper from './ControllButtonWrapper.tsx';
import Gauge from './Gauge.tsx';

interface ControlButtonProps {
	type: Category;
	data: ChargeButtonData;
	isActive: boolean;
}

export interface ChargeButtonData {
	rank: Rank;
	vote: number;
	percentage: number;
}

const ControlButton = memo(({ isActive, type, data }: ControlButtonProps) => {
	const { user } = useAuth();
	const { rank, vote, percentage } = data;

	const displayVoteStats = useMemo(
		() => `${percentage}% (${formatVoteCount(vote)})`,
		[percentage, vote],
	);

	const isMyCasperActivated = useMemo(
		() => isActive && user?.type === type,
		[isActive, user?.type, type],
	);

	const isMyCasper = useMemo(() => (user?.type ? user.type === type : true), [user?.type, type]);

	return (
		<ControllButtonWrapper isMyCasper={isMyCasper} rank={rank}>
			<Gauge percentage={percentage} isActive={isMyCasperActivated} />
			<ChargeButtonWrapper type={type} isActive={isMyCasperActivated}>
				<ChargeButtonContent type={type} rank={rank}>
					{displayVoteStats}
				</ChargeButtonContent>
			</ChargeButtonWrapper>
		</ControllButtonWrapper>
	);
});

export default ControlButton;

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
