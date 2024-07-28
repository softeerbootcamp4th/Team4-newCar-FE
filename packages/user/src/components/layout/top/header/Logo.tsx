import { useNavigate } from 'react-router-dom';
import LogoIcon from 'src/assets/icons/casper-white.svg?react';
import RoutePaths from 'src/constants/routePath';

export default function Logo() {
	const navigate = useNavigate();
	const handleClick = () => navigate(RoutePaths.Home);

	return (
		<button type="button" onClick={handleClick} className="flex gap-7 items-center">
			<LogoIcon />
			<p className="text-heading-12">CASPER Electric</p>
		</button>
	);
}
