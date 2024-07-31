import { Outlet } from 'react-router-dom';
import Banner from './banner';
import BodyContainer from './BodyContainer';
import Footer from './footer';
import Header from './header';
import TopSectionContainer from './TopSectionContainer';

export default function Layout() {
	return (
		<div className="flex h-screen min-w-max flex-col overflow-hidden">
			<TopSectionContainer>
				<Header />
				<Banner />
			</TopSectionContainer>
			<BodyContainer>
				<Outlet />
				<Footer />
			</BodyContainer>
		</div>
	);
}
