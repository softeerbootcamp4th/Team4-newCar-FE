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
			className="bg-skyblue-400 absolute bottom-12 right-[27px] top-[130px] z-50 flex h-[140px] min-w-[150px] flex-col items-center justify-center gap-3 break-keep rounded-[25px] px-6 py-4 text-center font-medium text-yellow-900 opacity-90 shadow-lg"
		>
			<p className="text-body-1 font-bold">1등을 차지하는</p>
			<h3 className="text-foreground">충전 버튼</h3>
		</button>
	);
});

export default ChargeButton;
