import { useState } from 'react';
import SideBar from 'src/components/appLayout/SideBar.tsx';

function SideBarContainer() {
	const [isChecked, setIsChecked] = useState(false);

	const handleToggle = () => {
		setIsChecked(!isChecked);
	};

	const handleClose = () => {
		setIsChecked(false);
	};

	const spanStyled =
		'block w-8 h-1 mb-1 relative bg-[#cdcdcd] rounded z-10 origin-[4px_0px] transition-transform transition-bg duration-500 ease-custom-bezier';

	return (
		<nav role="navigation" className="ml-5 mt-10">
			<div id="menuToggle" className="relative z-10 select-none">
				<input
					type="checkbox"
					checked={isChecked}
					onChange={handleToggle}
					className="absolute right-1 top-[-7px] z-20 h-8 w-10 cursor-pointer opacity-0"
				/>

				<span
					className={`${spanStyled} ${
						isChecked
							? 'translate-x-[-2px] translate-y-[-1px] rotate-45 transform bg-slate-500'
							: ''
					}`}
				/>
				<span
					className={` ${spanStyled} ${isChecked ? 'rotate-0 scale-[0.2,0.2] transform opacity-0' : ''}`}
				/>
				<span
					className={`${spanStyled} ${
						isChecked
							? 'translate-x-[-2px] translate-y-[-1px] rotate-[-45deg] transform bg-slate-500'
							: ''
					}`}
				/>

				<SideBar isChecked={isChecked} handleClose={handleClose} />
			</div>
		</nav>
	);
}

export default SideBarContainer;
