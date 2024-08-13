import { Outlet } from 'react-router-dom';
import Banner from './banner/index.tsx';
import BodyContainer from './BodyContainer.tsx';
import Footer from './footer/index.tsx';
import Header from './header/index.tsx';
import TopSectionContainer from './TopSectionContainer.tsx';

export default function Layout() {
	return (
		<div className="flex h-screen min-w-max flex-col overflow-hidden">
			<TopSectionContainer>
				<Header />
				<Banner />
			</TopSectionContainer>
			<BodyContainer>
				<div className="flex-grow">
					<Outlet />
				</div>
				<Footer />
			</BodyContainer>
		</div>
	);
}
