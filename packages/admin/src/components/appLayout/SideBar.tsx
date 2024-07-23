import {
	Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from 'src/components/ui/accordion';
import SideBarRoutes from 'src/constants/sideBarRoutes';

function Sidebar() {
  return (
	<div className="min-w-fit p-5">
		{SideBarRoutes.map((route) => (
        route.subRoutes ? (
	<Accordion type="single" collapsible>
		<AccordionItem value={String(route.id)}>
			<AccordionTrigger>{route.name}</AccordionTrigger>
			<AccordionContent>
				{route.subRoutes.map((subRoute) => (
					<div key={subRoute.id}>
						{subRoute.name}
					</div>
                      ))}
			</AccordionContent>
		</AccordionItem>
	</Accordion>
        ) : (
	<div key={route.id} className="border-b py-4">
		{route.name}
	</div>
        )
      ))}
	</div>
);
}

export default Sidebar;
