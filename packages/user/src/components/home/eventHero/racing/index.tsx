import Background from './Background';
import Cars from './Cars';
import Caspers from './Caspers';
import Effects from './Effects';

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
