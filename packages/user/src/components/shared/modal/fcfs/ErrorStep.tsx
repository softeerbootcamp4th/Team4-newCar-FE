import { FallbackProps } from 'react-error-boundary';
import Button from 'src/components/common/Button.tsx';
import InfoStep from 'src/components/shared/modal/InfoStep.tsx';
import ResultStep from './ResultStep.tsx';

export default function ErrorStep({ error, resetErrorBoundary }: FallbackProps) {
	const { status } = error.response;

	switch (status) {
		case 410:
			return <ResultStep step="already-done" />;
		case 403:
			return (
				<InfoStep>
					<p className="text-heading-10 font-medium">이벤트가 열리지 않아 퀴즈를 볼 수 없어요!</p>
					<Button onClick={resetErrorBoundary} variants="secondary">
						다시 퀴즈 불러오기
					</Button>
				</InfoStep>
			);
		default:
			return null;
	}
}
