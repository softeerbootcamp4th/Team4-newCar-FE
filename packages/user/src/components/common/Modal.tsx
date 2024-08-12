import { PropsWithChildren, ReactElement, useCallback } from 'react';
import { Dialog, DialogContent, DialogProps, DialogTrigger } from 'src/components/ui/dialog.tsx';

export interface ModalProps extends Omit<DialogProps, 'onClose'> {
	openTrigger: ReactElement;
	onClose?: () => void;
}

export default function Modal({
	openTrigger, onClose, children, ...props }: PropsWithChildren<ModalProps>) {
		const handleOpenChange = useCallback((isOpen: boolean) => {
		if (!isOpen && onClose) {
			onClose();
		}
	}, [onClose]);

	return (
		<Dialog onOpenChange={handleOpenChange}>
			<DialogTrigger asChild>{openTrigger}</DialogTrigger>
			<DialogContent {...props}>{children}</DialogContent>
		</Dialog>
	);
}
