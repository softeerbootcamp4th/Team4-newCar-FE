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
	isAlertOpen: boolean;
	content: ReactElement;
	alertContent: ReactElement;
	alertType: AlertType;
	modalCallback: VoidFunction;
	addModalCallback: (newmodalCallback: VoidFunction) => void;
	alertCallback: VoidFunction;
	addAlertCallback: (newAlertCallback: VoidFunction) => void;
	openModal: (newContent: ReactElement) => void;
	openAlert: (newAlertContent: ReactElement, newAlertType: AlertType) => void;
	closeModal: VoidFunction;
	closeAlert: VoidFunction;
}

const ModalContext = createContext<ModalContextProps>({
	isAlertOpen: false,
	isModalOpen: false,
	content: <div />,
	alertContent: <div />,
	alertType: 'confirm',
	modalCallback: () => {},
	addModalCallback: () => {},
	alertCallback: () => {},
	addAlertCallback: () => {},
	openModal: () => {},
	openAlert: () => {},
	closeModal: () => {},
	closeAlert: () => {},
});

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }: PropsWithChildren) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isAlertOpen, setIsAlertOpen] = useState(false);
	const [alertType, setAlertType] = useState<AlertType>('confirm');
	const [content, setContent] = useState<ReactElement>(<div />);
	const [alertContent, setAlertContent] = useState<ReactElement>(<div />);
	const [modalCallback, setmodalCallback] = useState<() => void>(() => {});
	const [alertCallback, setAlertCallback] = useState<() => void>(() => {});

	const openModal = (newContent: ReactElement) => {
		setContent(newContent);
		setIsModalOpen(true);
	};

	const openAlert = (newAlertContent: ReactElement, newAlertType: AlertType) => {
		setAlertContent(newAlertContent);
		setAlertType(newAlertType);
		setIsAlertOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const closeAlert = () => {
		setIsAlertOpen(false);
	};

	const addModalCallback = (newmodalCallback: VoidFunction) => {
		setmodalCallback(() => newmodalCallback);
	};

	const addAlertCallback = (newAlertCallback: VoidFunction) => {
		setAlertCallback(() => newAlertCallback);
	};

	const context = useMemo(
		() => ({
			isModalOpen,
			isAlertOpen,
			content,
			alertContent,
			alertType,
			modalCallback,
			addModalCallback,
			alertCallback,
			addAlertCallback,
			openModal,
			openAlert,
			closeModal,
			closeAlert,
		}),
		[isModalOpen, isAlertOpen, content, alertContent, alertType, modalCallback],
	);

	return <ModalContext.Provider value={context}>{children}</ModalContext.Provider>;
}
