import { AlertDialogTitle } from '@radix-ui/react-alert-dialog';
import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogFooter,
} from 'src/components/ui/alert-dialog.tsx';
import { Button } from 'src/components/ui/button.tsx';
import { useAlert } from 'src/store/provider/AlertProvider.tsx';

export default function Alert() {
	const { isAlertOpen, alertCallback, alertContent, alertType, closeAlert } = useAlert();
	const showCancelButton = alertType === 'confirm';
	const handleSubmit = () => {
		if (showCancelButton) {
			alertCallback();
		}
		closeAlert();
	};
	const handleClose = () => {
		closeAlert();
	};
	return (
		<AlertDialog open={isAlertOpen}>
			<AlertDialogTitle />
			<AlertDialogContent>
				<div>{alertContent}</div>
				<AlertDialogFooter>
					<div className="flex flex-row justify-end">
						{showCancelButton && (
							<Button variant="secondary" className="mr-2" onClick={handleClose}>
								취소
							</Button>
						)}
						<Button onClick={handleSubmit}>확인</Button>
					</div>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
