import {
	createContext,
	PropsWithChildren,
	ReactElement,
	useContext,
	useMemo,
	useState,
} from 'react';

export type AlertType = 'alert' | 'confirm';

interface ModalContextProps {
	isModalOpen: boolean;
	modalContent: ReactElement;
	modalCallback: VoidFunction;
	addModalCallback: (newmodalCallback: VoidFunction) => void;
	openModal: (newContent: ReactElement) => void;
	closeModal: VoidFunction;
}

const ModalContext = createContext<ModalContextProps>({
	isModalOpen: false,
	modalContent: <div />,
	modalCallback: () => {},
	addModalCallback: () => {},
	openModal: () => {},
	closeModal: () => {},
});

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }: PropsWithChildren) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalContent, setModalContent] = useState<ReactElement>(<div />);
	const [modalCallback, setmodalCallback] = useState<() => void>(() => {});

	const openModal = (newContent: ReactElement) => {
		setModalContent(newContent);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const addModalCallback = (newmodalCallback: VoidFunction) => {
		setmodalCallback(() => newmodalCallback);
	};

	const context = useMemo(
		() => ({
			isModalOpen,
			modalContent,
			modalCallback,
			addModalCallback,
			openModal,
			closeModal,
		}),
		[isModalOpen, modalContent, modalCallback],
	);

	return <ModalContext.Provider value={context}>{children}</ModalContext.Provider>;
}
