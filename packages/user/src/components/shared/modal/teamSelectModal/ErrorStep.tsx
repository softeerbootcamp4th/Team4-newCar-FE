import Button from 'src/components/common/Button.tsx';

interface ErrorStepProps {
	setQuizStep: () => void;
}
export default function ErrorStep({ setQuizStep }: ErrorStepProps) {
	return (
		<div className="flex h-full w-full flex-col items-center justify-center gap-10">
			<p className="text-heading-10 font-medium">유형 검사 결과를 잃어버렸어요...</p>
			<Button onClick={setQuizStep} variants="secondary">
				다시 테스트하러 가기
			</Button>
		</div>
	);
}
