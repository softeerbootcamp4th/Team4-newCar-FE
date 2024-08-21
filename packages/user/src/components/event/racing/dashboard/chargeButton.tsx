import { memo } from 'react';
import useAuth from 'src/hooks/useAuth.ts';

interface ChargeButtonProps {
	onCharge: () => void;
}
const ChargeButton = memo(({ onCharge }: ChargeButtonProps) => {
	const { user } = useAuth();

	if (!user?.type) {
		return null;
	}

	return (
		<button
			type="button"
			onClick={onCharge}
			className="bg-skyblue-400 absolute -bottom-[50px] z-50 flex h-[100px] w-[380px] flex-col items-center justify-center break-keep rounded-[16px] border border-[#82B9C6] bg-gradient-to-b from-[#00AAD2] via-[#00313C] to-[#003E4D] pt-3 text-center opacity-80 hover:translate-y-1 hover:opacity-100 hover:shadow-[0_0_10px_0_rgba(255,255,255,0.50),inset_6px_0_10px_0_rgba(255,255,255,0.25)] active:translate-y-0"
		>
			<p className="text-body-1 text-background font-extrabold">1등을 차지하는</p>
			<p className="text-heading-3 text-foreground font-extrabold">충전 버튼</p>
		</button>
	);
});

export default ChargeButton;
