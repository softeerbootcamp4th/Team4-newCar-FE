import { memo, useCallback, useState } from 'react';
import ChargeButton from 'src/components/event/racing/dashboard/chargeButton.tsx';
import SECTION_ID from 'src/constants/sectionId.ts';
import { UseSocketReturnType } from 'src/hooks/socket/index.ts';
import useTimeoutEffect from 'src/hooks/useTimeoutEffect.ts';
import RacingRankingDisplay from './controls/index.tsx';
import RacingDashboard from './dashboard/index.tsx';

/** 실시간 레이싱 섹션 */
const RealTimeRacing = memo(
	({
		racingSocket: { ranks, votes, onCarFullyCharged },
	}: Pick<UseSocketReturnType, 'racingSocket'>) => {
		const { isCharged, handleCharge } = useChargeHandler(onCarFullyCharged);

		return (
			<section
				id={SECTION_ID.RACING}
				className="container flex w-[1200px] snap-start flex-col items-center gap-4 pb-[50px] pt-[80px]"
			>
				<div className="relative h-[685px] w-full">
					<RacingDashboard ranks={ranks} isActive={isCharged} />
					<ChargeButton onCharge={handleCharge} />
				</div>
				<RacingRankingDisplay votes={votes} ranks={ranks} isActive={isCharged} />
			</section>
		);
	},
);

export default RealTimeRacing;

function useChargeHandler(onCarFullyCharged: () => void) {
	const [isCharged, setCharge] = useState(false);

	useTimeoutEffect(() => setCharge(false), 2960, [isCharged]);

	const handleCharge = useCallback(() => {
		setCharge(true);
		onCarFullyCharged();
	}, [onCarFullyCharged]);

	return { isCharged, handleCharge };
}
