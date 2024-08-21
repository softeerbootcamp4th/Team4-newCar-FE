import { ACCESS_TOKEN_KEY } from '@softeer/common/constants';
import { Cookie } from '@softeer/common/utils';
import { PropsWithChildren, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button.tsx';

export function CommonErrorFallback({
	error,
	resetErrorBoundary,
	}: {
		error: Error,
		resetErrorBoundary: () => void
	}) {
		const navigate = useNavigate();
		useEffect(() => {
			switch (error.message) {
				case '관리자 로그인을 먼저 진행해주세요':
				case '로그인이 만료 되었습니다':
					Cookie.clearCookie(ACCESS_TOKEN_KEY);
					navigate('/');
					break;
				default:
			}
		}, []);

    return (
		<div className="min-w-screen min-h-screen flex justify-center items-center flex-col gap-4 bg-skyblue-500 ">
			<Button onClick={resetErrorBoundary}>다시 시도하기</Button>{error.message}
		</div>
	);
}

function CommonErrorBoundary({ children }: PropsWithChildren) {
    return (
        <ErrorBoundary
			FallbackComponent={CommonErrorFallback}
			onReset={() => { window.location.reload(); }}
        >
            {children}
        </ErrorBoundary>
    );
}
export default CommonErrorBoundary;
