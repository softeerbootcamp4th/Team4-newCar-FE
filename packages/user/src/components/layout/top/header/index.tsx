import Logo from 'src/components/layout/top/header/Logo';

export default function Header() {
	return (
		<header className="bg-background container h-[65px] items-center flex justify-between font-medium">
			<Logo />
		</header>
	);
}
