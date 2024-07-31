import { Outlet, useLocation, useMatches } from 'react-router-dom';
import Header from 'src/components/appLayout/Header';
import SideBarContainer from 'src/components/appLayout/SideBarContainer';
import SystemContainer from 'src/components/appLayout/System';

export default function AppLayout() {
	const matches = useMatches();
	const location = useLocation();
	const matchResult = matches
		.filter((match) => match.id !== '0')
		.find((match) => match.pathname === location.pathname);
	const headerTitle = matchResult?.id ?? '';

	return (
		<div className="mx-auto mt-5 flex h-screen w-full max-w-[1200px] gap-10">
			<SideBarContainer />
			<SystemContainer />
			<div className="mt-8 flex w-full flex-col">
				<Header headerTitle={headerTitle} />
				<Outlet />
			</div>
		</div>
	);
}
