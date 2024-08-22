import { Outlet } from 'react-router-dom';
import InViewLoadSection from 'src/components/common/InViewLoadSection.tsx';
import useInitialize from 'src/hooks/useInitialize.ts';
import Banner from './banner/index.tsx';
import BodyContainer from './BodyContainer.tsx';
import FCFSFloatingButtonController from './fcfsController/index.tsx';
import Footer from './footer/index.tsx';
import Header from './header/index.tsx';
import TopSectionContainer from './TopSectionContainer.tsx';

export default function Layout() {
	useInitialize();

	return (
		<div className="relative flex h-screen min-w-max flex-col overflow-hidden">
			<TopSectionContainer>
				<Header />
				<Banner />
			</TopSectionContainer>
			<BodyContainer>
				<div className="flex-grow">
					<Outlet />
				</div>
				<InViewLoadSection component={Footer} className="h-[270px]" />
			</BodyContainer>
			<FCFSFloatingButtonController />
		</div>
	);
}
