import Background from './Background.tsx';
import Cars from './Cars.tsx';
import Caspers from './Caspers.tsx';
import Effects from './Effects.tsx';

export default function CarRacing() {
	return (
		<div className="relative flex h-[520px] w-[1155px]">
			<Background />
			<Caspers />
			<Effects />
			<Cars />
		</div>
	);
}
