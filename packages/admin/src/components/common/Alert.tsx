import { PropsWithChildren } from 'react';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogTrigger,
} from 'src/components/ui/alert-dialog';

interface AlertProps {
	openTrigger: React.ReactElement;
	actionTrigger: React.ReactElement;
	showCancelButton?: boolean;
}

export default function Alert({
	openTrigger,
	actionTrigger,
	showCancelButton = true,
	children,
}: PropsWithChildren<AlertProps>) {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>{openTrigger}</AlertDialogTrigger>
			<AlertDialogContent>
				{children}
				<AlertDialogFooter>
					{showCancelButton && <AlertDialogCancel>취소</AlertDialogCancel>}
					<AlertDialogAction asChild>{actionTrigger}</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}