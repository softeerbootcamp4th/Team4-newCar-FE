import { PropsWithChildren, useMemo } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import ErrorContainer from 'src/components/common/ErrorContainer.tsx';

export default function GlobalErrorBoundary({ children }: PropsWithChildren) {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback} onReset={window.location.reload}>
			{children}
		</ErrorBoundary>
	);
}

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
	const errorMessage = useMemo(() => {
		switch (error.status) {
			case 400:
				return '잘못된 요청입니다. 입력된 정보를 확인해주세요.';
			case 401:
				return '로그인이 필요합니다. 다시 로그인해주세요.';
			case 403:
				return '접근 권한이 없습니다. 권한을 확인해주세요.';
			case 404:
				return '요청한 페이지를 찾을 수 없습니다.';
			case 408:
				return '요청 시간이 초과되었습니다. 다시 시도해주세요.';
			case 500:
				return '서버에 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
			case 502:
				return '잘못된 게이트웨이입니다. 서비스가 불안정할 수 있습니다.';
			case 503:
				return '서비스가 현재 이용 불가능합니다. 잠시 후 다시 시도해주세요.';
			case 504:
				return '게이트웨이 시간 초과입니다. 다시 시도해주세요.';
			default:
				return '무언가 문제가 발생했어요!';
		}
	}, [error]);

	return <ErrorContainer errorMessage={errorMessage} reset={resetErrorBoundary} />;
}
