import NavTitle from 'src/types/appLayout/types';

interface HeaderProps {
	headerTitle: string;
	navTitles?: NavTitle[];
}

function Header({ headerTitle, navTitles }: HeaderProps) {
	const h2Styled = 'font-bold text-3xl';

	if (!navTitles) return <h2 className={`${h2Styled}`}>{headerTitle}</h2>;
	return (
		<div className="flex flex-col">
			<h2 className={`${h2Styled}`}>{headerTitle}</h2>

			<ul className="flex gap-2 rounded-sm bg-slate-200">
				{navTitles.map(navTitle => (
					<li key={navTitle.navTitleId}>{navTitle.navTitle}</li>
				))}
			</ul>
		</div>
	);
}

export default Header;
