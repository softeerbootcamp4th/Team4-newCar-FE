import { useLocation, useMatches } from 'react-router-dom';

const useHeader = () => {
	const matches = useMatches();
	const location = useLocation();
	const matchResult = matches
		.filter((match) => match.id !== '0')
		.find((match) => match.pathname === location.pathname);
	const headerTitle = matchResult?.id ?? '';
	return { headerTitle };
};
export default useHeader;
