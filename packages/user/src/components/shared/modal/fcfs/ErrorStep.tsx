import { FallbackProps } from 'react-error-boundary';
import Button from 'src/components/common/Button.tsx';
import InfoStep from 'src/components/shared/modal/InfoStep.tsx';
import ResultStep from './ResultStep.tsx';

export default function ErrorStep({ error, resetErrorBoundary }: FallbackProps) {
	switch (error.status) {
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
		case 400:
			return (
				<InfoStep>
					<p className="text-heading-10 font-medium">이미 마감된 이벤트입니다.</p>
				</InfoStep>
			);
		case 404:
			return (
				<InfoStep>
					<p className="text-heading-10 font-medium">오늘 날짜에 해당하는 퀴즈가 없어요</p>
					<p className="text-body-3 text-neutral-200">
						문제가 발생하였습니다. 관리자에게 문의해주세요
					</p>
				</InfoStep>
			);
		case 1234:
			return (
				<InfoStep>
					<p className="text-heading-10 font-medium">퀴즈 제출 중 오류가 발생했어요</p>
				</InfoStep>
			);
		default:
			return (
				<InfoStep>
					<p className="text-heading-10 font-medium">선착순 퀴즈 정보를 불러올 수 없어요</p>
					<p className="text-body-3 text-neutral-200">
						문제가 발생하였습니다. 관리자에게 문의해주세요
					</p>
				</InfoStep>
			);
	}
}
