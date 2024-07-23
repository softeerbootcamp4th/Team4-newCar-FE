import { Outlet } from 'react-router-dom';
import SideBarContainer from 'src/components/appLayout/SideBarContainer';

export default function AppLayout() {
  return (
	<div className="max-w-[1200px] w-full flex mx-auto">
		<SideBarContainer />
		<Outlet />
	</div>
  );
}
