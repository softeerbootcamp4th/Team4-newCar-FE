import { lazy } from 'react';
import { Outlet } from 'react-router-dom';
import InViewLoadSection from 'src/components/common/InViewLoadSection.tsx';
import Banner from './banner/index.tsx';
import BodyContainer from './BodyContainer.tsx';
import Header from './header/index.tsx';
import TopSectionContainer from './TopSectionContainer.tsx';

const Footer = lazy(() => import('./footer/index.tsx'));

export default function Layout() {
	return (
		<div className="flex h-screen min-w-max flex-col overflow-hidden">
			<TopSectionContainer>
				<Header />
				<Banner />
			</TopSectionContainer>
			<BodyContainer>
				<Outlet />
				<InViewLoadSection<HTMLDivElement> component={Footer} />
			</BodyContainer>
		</div>
	);
}
