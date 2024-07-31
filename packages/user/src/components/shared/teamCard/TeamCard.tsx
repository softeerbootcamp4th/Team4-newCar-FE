import { cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';
import { Category } from 'src/types/user';

const Teams: Record<Category, { label: string; details: string }> = {
	pet: { label: '펫 프렌들리', details: '반려동물의 편안하고\n안전한 여행을 위한' },
	travel: { label: '여행의 정석', details: '아웃도어 활동을 쉽고 편하게' },
	place: { label: '공간활용의 기술', details: '많은 물건도 구석구석 알차게' },
	leisure: { label: '레저의 정석', details: '오프로드도 캐스퍼와 함께' },
};

interface TeamCardProps {
	variant: Category;
}

export default function TeamCard({ variant, children }: PropsWithChildren<TeamCardProps>) {
	const { label, details } = Teams[variant];

	return (
		<div className="relative flex h-[364px] w-[244px] flex-col items-center justify-between overflow-hidden rounded-[11px] pb-[21px] pt-[25px]">
			<img
				src={`/src/assets/images/card-${variant}.png`}
				alt={label}
				className="absolute inset-0 h-full w-full object-cover"
			/>
			<TeamCardBackground variant={variant} />
			<div className="z-10 flex flex-col items-center">
				<h5>{label}</h5>
				<p className="text-detail-2 whitespace-pre-line">{details}</p>
			</div>
			<div className="z-10">{children}</div>
		</div>
	);
}

function TeamCardBackground({ variant }: TeamCardProps) {
	return <div className={teamCardVariants({ variant })} />;
}

const teamCardVariants = cva('absolute inset-0 bg-gradient-to-b-card', {
	variants: {
		variant: {
			pet: 'from-yellow-900',
			place: 'from-khaki-600',
			travel: 'from-orange-800',
			leisure: 'from-background',
		},
	},
	defaultVariants: {
		variant: 'pet',
	},
});
