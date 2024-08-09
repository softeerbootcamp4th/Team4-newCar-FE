import { Category } from '@softeer/common/types';

interface GaugeProps {
	type: Category;
	percent: number;
}
export default function Gauge({ type, percent }: GaugeProps) {
	return (
		<div className="relative h-[4px] w-full rounded-[2px] bg-neutral-600">
			<div
				className={`absolute z-10 h-full transform rounded-[2px] transition-all duration-700 ease-[cubic-bezier(0.14,0.63,0.82,0.72)] ${styles[type]} `} // cubic-bezier(0.07,0.61,0.9,0.45)
				style={{ width: `${percent}%` }}
			/>
		</div>
	);
}

const styles: Record<Category, string> = {
	place: 'bg-gradient-gauge1',
	leisure: 'bg-gradient-gauge2',
	pet: 'bg-gradient-gauge3',
	travel: 'bg-gradient-gauge4',
};
