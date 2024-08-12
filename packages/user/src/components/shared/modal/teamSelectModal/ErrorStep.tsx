import Button from 'src/components/common/Button.tsx';

interface ErrorStepProps {
	setQuizStep: () => void;
}
export default function ErrorStep({ setQuizStep }: ErrorStepProps) {
	return (
		<div className="flex flex-col items-center justify-center gap-5">
			<p>오류가 발생했습니다</p>
			<Button onClick={setQuizStep}>다시 테스트하기</Button>
		</div>
	);
}
