import { AlertDialog, AlertDialogContent, AlertDialogFooter } from 'src/components/ui/alert-dialog';
import { Button } from 'src/components/ui/button';
import { useModal } from 'src/store/provider/ModalProvider';

export default function Alert() {
	const { isAlertOpen, actionCallback, alertText, alertType, closeAlert } = useModal();
	const showCancelButton = alertType === 'confirm';
	const handleSubmit = () => {
		if (showCancelButton) {
			actionCallback();
		}
		closeAlert();
	};
	return (
		<AlertDialog open={isAlertOpen}>
			<AlertDialogContent>
				<div>{alertText}</div>
				<AlertDialogFooter>
					<div className="flex flex-row justify-end">
						{showCancelButton && <Button>취소</Button>}
						<Button onClick={handleSubmit}>확인</Button>
					</div>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
