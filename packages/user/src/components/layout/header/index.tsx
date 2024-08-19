import Logo from './Logo.tsx';
import NavigateTabs from './tab/index.tsx';
import AuthButton from './auth/index.tsx';

export default function Header() {
	return (
		<header className="bg-background container flex h-[65px] items-center justify-between gap-12">
			<Logo />
			<NavigateTabs />
			<AuthButton />
		</header>
	);
}
