import HyundaiLogo from 'src/assets/icons/hyundai.svg?react';
import ContactInfo from './ContactInfo';
import WebLinks from './WebLinks';

export default function Footer() {
	return (
		<footer className="text-detail-1 bg-neutral-700 py-11 text-neutral-300">
			<div className="container flex flex-col items-center gap-11">
				<HyundaiLogo />
				<WebLinks />
				<ContactInfo />
			</div>
		</footer>
	);
}
