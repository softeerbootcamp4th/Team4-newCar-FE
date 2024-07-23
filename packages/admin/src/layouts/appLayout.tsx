import { Outlet } from 'react-router-dom';
import Sidebar from 'src/components/appLayout/SideBar';

export default function AppLayout() {
  return (
	<div className="max-w-[1200px] w-full flex mx-auto">
		<Sidebar />
		<Outlet />
	</div>
  );
}
