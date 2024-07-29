import { Outlet } from 'react-router-dom';
import Header from 'src/components/appLayout/Header';
import SideBarContainer from 'src/components/appLayout/SideBarContainer';
import SystemContainer from 'src/components/appLayout/System';

export default function AppLayout() {
	return (
		<div className="mx-auto mt-5 flex h-screen w-full max-w-[1200px] gap-10">
			<SideBarContainer />
			<SystemContainer />
			<div className="mt-8 flex w-full flex-col">
				<Header headerTitle="이벤트 등록" />
				<Outlet />
			</div>
		</div>
	);
}
