import { PropsWithChildren } from 'react';
import Chip from 'src/components/common/Chip';

interface ContentCardProps {
	step?: number;
	imageUrl: string;
	size: { width: string; height: string };
}

export default function ContentCard({
	step,
	imageUrl,
	size,
	children,
}: PropsWithChildren<ContentCardProps>) {
	return (
		<div
			style={size}
			className={`relative top-5 flex flex-col items-center justify-center gap-5 rounded-[10px] bg-neutral-700 py-10`}
		>
			{step && (
				<div className="absolute -top-5">
					<Chip variants="secondary">{step}</Chip>
				</div>
			)}
			<div className="flex h-[calc(100%-72px)] items-center justify-center">
				<img
					alt="이벤트 참여 방법 세부 단계"
					className="max-h-full object-contain"
					src={imageUrl}
				/>
			</div>
			<p className="text-body-3 whitespace-pre-wrap text-center font-medium">{children}</p>
		</div>
	);
}
