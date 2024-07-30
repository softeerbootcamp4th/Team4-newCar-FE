import { PropsWithChildren, ReactElement } from 'react';

interface PrizeCardProps {
	badge: ReactElement;
	imageUrl: string;
}

export default function PrizeCard({
	badge,
	imageUrl,
	children,
}: PropsWithChildren<PrizeCardProps>) {
	return (
		<div className="relative flex max-w-fit flex-col items-center justify-center gap-4 rounded-[10px] bg-neutral-500 px-4 pb-[21px] pt-9">
			<div className="absolute -top-5">{badge}</div>
			<img alt="이벤트 경품" className="h-[90px] w-[180px] object-contain" src={imageUrl} />
			<p className="text-body-3 w-[147px] text-center font-medium">{children}</p>
		</div>
	);
}
