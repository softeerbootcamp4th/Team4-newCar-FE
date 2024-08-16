import { useNavigate } from 'react-router-dom';
import ErrorContainer from 'src/components/layout/ErrorContainer.tsx';
import RoutePaths from 'src/constants/routePath.ts';

export default function ErrorPage({ message = '문제가 발생했어요!' }:{ message?:string }) {
	const navigate = useNavigate();

	return (
		<ErrorContainer errorMessage={message} reset={() => navigate(RoutePaths.Home)} />
	);
}
