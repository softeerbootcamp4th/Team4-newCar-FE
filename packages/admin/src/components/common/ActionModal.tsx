import { DialogTitle } from '@radix-ui/react-dialog';
import { Button } from 'src/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter } from 'src/components/ui/dialog';
import { useModal } from 'src/store/provider/ModalProvider';

export default function ActionModal() {
	const { isModalOpen, modalContent, modalCallback, closeModal } = useModal();
	const handleSubmit = () => {
		closeModal();
		modalCallback();
	};
	return (
		<Dialog open={isModalOpen}>
			<DialogContent className="w-auto max-w-fit">
				<div className="flexcol flex min-h-[100px] w-full">{modalContent}</div>
				<DialogTitle />
				<div className="flex w-full flex-row justify-end">
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
				</div>
			</DialogContent>
		</Dialog>
	);
}
