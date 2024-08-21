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
			className="bg-skyblue-400 absolute z-50 flex opacity-80 flex-col -bottom-[50px] w-[380px] h-[100px] items-center justify-center break-keep text-center hover:opacity-100 rounded-[16px] border border-[#82B9C6] bg-gradient-to-b from-[#00AAD2] pt-3 via-[#00313C] to-[#003E4D] active:translate-y-0 hover:translate-y-1 hover:shadow-[0_0_10px_0_rgba(255,255,255,0.50),inset_6px_0_10px_0_rgba(255,255,255,0.25)]"
		>
			<p className="text-body-1 font-extrabold text-background">1등을 차지하는</p>
			<p className="text-heading-3  font-extrabold text-foreground">충전 버튼</p>
		</button>
	);
});

export default ChargeButton;
