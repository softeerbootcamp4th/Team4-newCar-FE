import { useNavigate } from 'react-router-dom';
import ErrorContainer from 'src/components/layout/ErrorContainer.tsx';
import RoutePaths from 'src/constants/routePath.ts';

export default function ErrorPage() {
	const navigate = useNavigate();

	return (
		<ErrorContainer errorMessage="문제가 발생했어요!" reset={() => navigate(RoutePaths.Home)} />
	);
}
