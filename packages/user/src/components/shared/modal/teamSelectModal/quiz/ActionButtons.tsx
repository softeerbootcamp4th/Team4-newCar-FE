import Button from 'src/components/common/Button.tsx';

interface ActionButtonsProps {
	onNavigate: (direction: 'previous' | 'next') => void;
	onSubmit: () => void;
	isPending: boolean;
	isLastQuestion: boolean;
}

export default function ActionButtons({
	onNavigate,
	onSubmit,
	isPending,
	isLastQuestion,
}: ActionButtonsProps) {
	return (
		<div className="flex w-full min-w-[300px] max-w-[400px] gap-3">
			<Button variants="secondary" className="flex-1" onClick={() => onNavigate('previous')}>
				이전
			</Button>
			<Button
				className="flex-1"
				disabled={isPending}
				onClick={() => (isLastQuestion ? onSubmit() : onNavigate('next'))}
			>
				{isLastQuestion ? '결과 보기' : '다음'}
			</Button>
		</div>
	);
}
