import { PropsWithChildren, ReactElement } from 'react';
import { Button } from 'src/components/ui/button';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from 'src/components/ui/dialog';

interface ActionModalProps {
	title: string;
	openTrigger: ReactElement;
	actionTrigger: ReactElement;
}
export default function ActionModal({
	title,
	openTrigger,
	actionTrigger,
	children,
}: PropsWithChildren<ActionModalProps>) {
	return (
		<Dialog>
			<DialogTrigger asChild>{openTrigger}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
				</DialogHeader>
				<div className="flexcol flex min-h-[100px]">{children}</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button type="button" variant="secondary">
							취소
						</Button>
					</DialogClose>
					{actionTrigger}
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
