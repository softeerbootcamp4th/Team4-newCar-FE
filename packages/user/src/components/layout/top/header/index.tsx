import Logo from 'src/components/layout/top/header/Logo';
import NavigateTabs from 'src/components/layout/top/header/tab';

export default function Header() {
	return (
		<header className="bg-background container flex h-[65px] items-center justify-between">
			<Logo />
			<NavigateTabs />
		</header>
	);
}
