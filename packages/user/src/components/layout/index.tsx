import { Outlet } from 'react-router-dom';
import BodyContainer from 'src/components/layout/BodyContainer';
import Footer from 'src/components/layout/Footer';
import Banner from 'src/components/layout/top/Banner';
import Header from 'src/components/layout/top/Header';
import TopSectionContainer from 'src/components/layout/top/TopSectionContainer';

export default function Layout() {
	return (
		<div className="flex flex-col min-h-screen">
			<TopSectionContainer>
				<Header />
				<Banner />
			</TopSectionContainer>
			<BodyContainer>
				<Outlet />
			</BodyContainer>
			<Footer />
		</div>
	);
}
