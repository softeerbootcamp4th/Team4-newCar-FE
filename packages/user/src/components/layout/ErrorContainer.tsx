import Button from 'src/components/common/Button.tsx';

interface ErrorFallbackProps {
	errorMessage: string;
	reset: () => void;
}

export default function ErrorContainer({ errorMessage, reset }: ErrorFallbackProps) {
	return (
		<div
			role="alert"
			className="w-screen flex h-screen flex-col items-center gap-15 justify-center"
		>
			<img src="/images/fcfs/result/wrong.png" alt="오류 발생 이미지" />
			<div className="flex flex-col items-center gap-5">
				<h4>{errorMessage}</h4>
				<Button onClick={reset}>홈으로 돌아가기</Button>
			</div>
		</div>
	);
}
