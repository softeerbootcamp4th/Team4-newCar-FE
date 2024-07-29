import { DialogTitle } from '@radix-ui/react-dialog';
import { Button } from 'src/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter } from 'src/components/ui/dialog';
import { useModal } from 'src/store/provider/ModalProvider';

export default function ActionModal() {
	const { isOpen, content, actionCallback, closeModal } = useModal();
	const handleSubmit = () => {
		actionCallback();
		closeModal();
	};
	return (
		<Dialog open={isOpen}>
			<DialogContent>
				<div className="flexcol flex min-h-[100px]">{content}</div>
				<DialogTitle />
				<DialogFooter>
					<DialogClose asChild onClick={closeModal}>
						<Button type="button" variant="secondary">
							취소
						</Button>
					</DialogClose>
					<Button type="button" variant="default" onClick={handleSubmit}>
						확인
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
