import { useState } from 'react';
import SideBar from './SideBar';

function SideBarContainer() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const spanStyled = 'block w-8 h-1 mb-1 relative bg-[#cdcdcd] rounded z-10 origin-[4px_0px] transition-transform transition-bg duration-500 ease-custom-bezier ';
  return (
	<nav role="navigation" className="mt-5 ml-5">
		<div id="menuToggle" className="relative z-10 select-none">
			<input
  type="checkbox"
  checked={isChecked}
  onChange={handleToggle}
  className="w-10 h-8 absolute top-[-7px] right-1 cursor-pointer opacity-0 z-20"
			/>

			<span
  className={`${spanStyled} ${
        isChecked ? 'transform rotate-45 translate-x-[-2px] translate-y-[-1px] bg-slate-500' : ''
      }`}
			/>
			<span
  className={` ${spanStyled} ${
        isChecked ? 'opacity-0 transform rotate-0 scale-[0.2,0.2]' : ''
      }`}
			/>
			<span
  className={`${spanStyled}  ${
        isChecked ? 'transform rotate-[-45deg] translate-x-[-2px translate-y-[-1px] bg-slate-500' : ''
      }`}
			/>

			<SideBar isChecked={isChecked} />
		</div>
	</nav>
  );
}

export default SideBarContainer;
