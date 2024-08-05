import { Outlet } from 'react-router-dom';
import Header from 'src/components/appLayout/Header.tsx';
import SideBarContainer from 'src/components/appLayout/SideBarContainer.tsx';
import SystemContainer from 'src/components/appLayout/System.tsx';
import useHeader from 'src/hooks/useHeader.tsx';

export default function AppLayout() {
	const { headerTitle } = useHeader();

	return (
		<div className="mx-auto flex h-screen w-screen min-w-[1200px]">
			<SideBarContainer />
			<div className="mx-auto flex h-screen w-full max-w-[1200px] gap-10">
				<SystemContainer />
				<div className="flex w-full flex-col p-4 pb-8 pt-8">
					<Header headerTitle={headerTitle} />
					<Outlet />
				</div>
			</div>
		</div>
	);
}
