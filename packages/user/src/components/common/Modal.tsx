import { PropsWithChildren, ReactElement } from 'react';
import { Dialog, DialogContent, DialogProps, DialogTrigger } from 'src/components/ui/dialog';

interface ModalProps extends DialogProps {
	openTrigger: ReactElement;
}
export default function Modal({ openTrigger, children, ...props }: PropsWithChildren<ModalProps>) {
	return (
		<Dialog>
			<DialogTrigger asChild>{openTrigger}</DialogTrigger>
			<DialogContent {...props}>{children}</DialogContent>
		</Dialog>
	);
}
