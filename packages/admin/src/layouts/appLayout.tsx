import { Outlet } from 'react-router-dom';
import SideBarContainer from 'src/components/appLayout/SideBarContainer';

export default function AppLayout() {
	return (
		<div className="mx-auto flex w-full max-w-[1200px]">
			<SideBarContainer />
			<Outlet />
		</div>
	);
}
