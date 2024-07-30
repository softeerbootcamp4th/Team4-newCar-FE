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
	alertText: string;
	alertType: AlertType;
	modalCallback: VoidFunction;
	addModalCallback: (newmodalCallback: VoidFunction) => void;
	alertCallback: VoidFunction;
	addAlertCallback: (newAlertCallback: VoidFunction) => void;
	openModal: (newContent: ReactElement) => void;
	openAlert: (newAlertText: string, newAlertType: AlertType) => void;
	closeModal: VoidFunction;
	closeAlert: VoidFunction;
}

const ModalContext = createContext<ModalContextProps>({
	isAlertOpen: false,
	isModalOpen: false,
	content: <div />,
	alertText: '',
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
	const [alertText, setAlertText] = useState('');
	const [modalCallback, setmodalCallback] = useState<() => void>(() => {});
	const [alertCallback, setAlertCallback] = useState<() => void>(() => {});

	const openModal = (newContent: ReactElement) => {
		setContent(newContent);
		setIsModalOpen(true);
	};

	const openAlert = (newAlertText: string, newAlertType: AlertType) => {
		setAlertText(newAlertText);
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
			alertText,
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
		[isModalOpen, isAlertOpen, content, alertText, alertType, modalCallback],
	);

	return <ModalContext.Provider value={context}>{children}</ModalContext.Provider>;
}
