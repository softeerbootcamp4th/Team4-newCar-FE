import {
	Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from 'src/components/ui/accordion';
import SideBarRoutes from 'src/constants/sideBarRoutes';

interface SideBarProps {
	isChecked: boolean;
}

function SideBar({ isChecked } : SideBarProps) {
  return (
	<div className={`absolute w-[300px] m-[-100px_0_0_-100px] p-[50px] pt-[125px] list-none font-sans antialiased origin-[0%_0%] transform transition-transform duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1.0)] ${
        isChecked ? 'translate-x-0 ' : '-translate-x-full '
      }`}
	>
		{SideBarRoutes.map((route) => (
        route.subRoutes ? (
	<Accordion type="single" collapsible>
		<AccordionItem value={String(route.id)}>
			<AccordionTrigger>{route.name}</AccordionTrigger>
			<AccordionContent>
				{route.subRoutes.map((subRoute) => (
					<div key={subRoute.id} className="cursor-pointer hover:underline">
						{subRoute.name}
					</div>
                      ))}
			</AccordionContent>
		</AccordionItem>
	</Accordion>
        ) : (
	<div key={route.id} className="border-b py-4 hover:cursor-pointer hover:underline">
		{route.name}
	</div>
        )
      ))}
	</div>
);
}

export default SideBar;
