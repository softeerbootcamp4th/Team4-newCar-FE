import NavTitle from 'src/types/appLayout/types';

interface HeaderProps {
    headerTitle: string;
    navTitles?: NavTitle[];
}

function Header({ headerTitle, navTitles } : HeaderProps) {
	if (!navTitles) return <h2>{headerTitle}</h2>;
	return (
		<div>
			<h2>{headerTitle}</h2>

			<ul className="flex gap-2">
				{navTitles.map(navTitle => (<li key={navTitle.navTitleid}>{navTitle.navTitle}</li>))}
			</ul>
		</div>
	);
}

export default Header;
