import { Outlet } from 'react-router-dom';
import Header from 'src/components/appLayout/Header';
import SideBarContainer from 'src/components/appLayout/SideBarContainer';
import SystemContainer from 'src/components/appLayout/System';
import useHeader from 'src/hooks/useHeader';

export default function AppLayout() {
	const { headerTitle } = useHeader();

	return (
		<div className="mx-auto mt-5 flex h-screen w-screen min-w-[1200px] gap-10">
			<SideBarContainer />
			<div className="mx-auto mt-5 flex h-screen w-full max-w-[1200px] gap-10">
				<SystemContainer />
				<div className="mb-8 mt-8 flex w-full flex-col border-4 border-blue-50 p-4">
					<Header headerTitle={headerTitle} />
					<Outlet />
				</div>
			</div>
		</div>
	);
}
