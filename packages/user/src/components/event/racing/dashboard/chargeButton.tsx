interface ChargeButtonProps {
	onCharge: () => void;
}
export default function ChargeButton({ onCharge }: ChargeButtonProps) {
	return (
		<button
			type="button"
			onClick={onCharge}
			className="bg-skyblue-500 absolute right-[27px] top-[95px] w-[300px]"
		>
			chargeButton
		</button>
	);
}
