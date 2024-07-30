import { PropsWithChildren } from 'react';

interface PrizeCardProps {
	drawCount: number;
	imageUrl: string;
}

export default function PrizeCard({
	drawCount,
	imageUrl,
	children,
}: PropsWithChildren<PrizeCardProps>) {
	return (
		<div className="relative flex flex-col items-center justify-center gap-4 rounded-[10px] bg-neutral-700 px-4 pb-[21px] pt-9">
			<div className="bg-primary absolute -top-5 rounded-[17px] px-3 py-[5px]">{drawCount}명</div>
			<img
				alt={`${drawCount}명 상품`}
				className="h-[90px] w-[180px] object-contain"
				src={imageUrl}
			/>
			<p className="text-body-3 w-[147px] text-center font-medium">{children}</p>
		</div>
	);
}
