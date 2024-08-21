import { useNavigate } from 'react-router-dom';
import RoutePaths from 'src/constants/routePath.ts';

export default function Logo() {
	const navigate = useNavigate();
	const handleClick = () => navigate(RoutePaths.Home);

	return (
		<button type="button" onClick={handleClick} className="flex items-center gap-7">
			<img src="/casper/white.webp" alt="캐스퍼 로고" className="w-[50px]" />
			<p className="text-heading-11 font-medium">CASPER Electric</p>
		</button>
	);
}
