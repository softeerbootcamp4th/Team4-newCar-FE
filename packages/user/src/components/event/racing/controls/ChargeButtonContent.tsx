import { Category } from '@softeer/common/types';
import numeral from 'numeral';
import { useMemo } from 'react';
import { TEAM_DESCRIPTIONS } from 'src/constants/teamDescriptions.ts';
import type { ChargeButtonData } from './ControlButton.tsx';

interface ChargeButtonContentProps extends ChargeButtonData {
	type: Category;
}

export default function ChargeButtonContent({
	rank, vote, type, percentage }: ChargeButtonContentProps) {
	const { shortTitle, title } = TEAM_DESCRIPTIONS[type];
	const displayTitle = shortTitle ?? title;
	const displayVoteStats = useMemo(() => `${percentage.toFixed(1)}% (${formatVoteCount(vote)})`, [percentage, vote]);

	return (
		<>
			<h2 className="pt-2">{rank}</h2>
			<div className="flex flex-col items-center">
				<p className={`text-body-3 font-medium ${voteStyles[type]}`}>{displayVoteStats}</p>
				<h6>{displayTitle}</h6>
			</div>
		</>
	);
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

/** Styles */
const voteStyles: Record<Category, string> = {
	travel: 'text-orange-500',
	leisure: 'text-yellow-500',
	place: 'text-neutral-200',
	pet: 'text-yellow-500',
};
