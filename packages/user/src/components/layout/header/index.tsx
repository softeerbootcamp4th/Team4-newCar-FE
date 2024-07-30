import Logo from './Logo';
import NavigateTabs from './tab';
import User from './user';

export default function Header() {
	return (
		<header className="bg-background container flex h-[65px] items-center justify-between gap-12">
			<Logo />
			<NavigateTabs />
			<User />
		</header>
	);
}
