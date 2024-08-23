import Button from 'src/components/common/Button.tsx';

interface ErrorFallbackProps {
	errorMessage: string;
	reset: () => void;
}

export default function ErrorContainer({ errorMessage, reset }: ErrorFallbackProps) {
	return (
		<div
			role="alert"
			className="gap-15 flex h-screen w-screen flex-col items-center justify-center"
		>
			<img src="/images/fcfs/result/wrong.webp" alt="오류 발생 이미지" />
			<div className="flex flex-col items-center gap-5">
				<h4>{errorMessage}</h4>
				<p>문제가 계속된다면 관리자에게 문의해주세요</p>
				<Button onClick={reset}>홈으로 돌아가기</Button>
			</div>
		</div>
	);
}
