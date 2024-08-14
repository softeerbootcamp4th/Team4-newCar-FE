import { FallbackProps } from 'react-error-boundary';
import Button from 'src/components/common/Button.tsx';
import InfoStep from 'src/components/shared/modal/InfoStep.tsx';
import ResultStep from './ResultStep.tsx';

export default function ErrorStep({ error, resetErrorBoundary }: FallbackProps) {
	const { status } = error.response;

	switch (status) {
		case 403:
			return (
				<InfoStep>
					<p className="text-heading-10 font-medium">아직 퀴즈가 시작되지 않았어요!</p>
					<Button onClick={resetErrorBoundary} variants="secondary">
						퀴즈 다시 불러오기
					</Button>
				</InfoStep>
			);
		case 410:
			return <ResultStep step="already-done" />;
		default:
			return null;
	}
}
