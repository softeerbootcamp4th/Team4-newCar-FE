import { useNavigate } from 'react-router-dom';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from 'src/components/ui/accordion';
import SideBarRoutes from 'src/constants/sideBarRoutes';

interface SideBarProps {
	isChecked: boolean;
}

function SideBar({ isChecked }: SideBarProps) {
	const navigate = useNavigate();
	const hnadleClick = (path: string | undefined) => {
		if (path) {
			navigate(path);
		}
	};
	return (
		<div
			className={`absolute m-[-100px_0_0_-50px] h-screen w-[300px] origin-[0%_0%] transform list-none bg-slate-200 px-10 pt-[125px] font-sans antialiased transition-all duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1.0)] ${
				isChecked ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
			}`}
		>
			{SideBarRoutes.map((route) =>
				route.subRoutes ? (
					<Accordion type="single" collapsible>
						<AccordionItem value={String(route.id)}>
							<AccordionTrigger>{route.name}</AccordionTrigger>
							<AccordionContent>
								{route.subRoutes.map((subRoute) => (
									<div
										role="presentation"
										key={subRoute.id}
										className="cursor-pointer hover:underline"
										onClick={() => {
											hnadleClick(subRoute.path);
										}}
									>
										{subRoute.name}
									</div>
								))}
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				) : (
					<div
						role="presentation"
						key={route.id}
						className="border-b border-gray-400 py-4 hover:cursor-pointer hover:underline"
						onClick={() => {
							hnadleClick(route.path);
						}}
					>
						{route.name}
					</div>
				),
			)}
		</div>
	);
}

export default SideBar;
