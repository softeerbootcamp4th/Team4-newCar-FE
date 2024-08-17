import { useNavigate, useRouteError } from 'react-router-dom';
import ErrorContainer from 'src/components/layout/ErrorContainer.tsx';
import RoutePaths from 'src/constants/routePath.ts';
import CustomError from 'src/utils/error.ts';

export default function ErrorPage({ message = '문제가 발생했어요!' }: { message?: string }) {
	const error = useRouteError() as CustomError;

	const navigate = useNavigate();

	return (
		<ErrorContainer
			errorMessage={error?.message ?? message}
			reset={() => navigate(RoutePaths.Home)}
		/>
	);
}
