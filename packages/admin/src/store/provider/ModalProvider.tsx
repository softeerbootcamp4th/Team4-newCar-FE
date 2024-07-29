import {
	createContext,
	PropsWithChildren,
	ReactElement,
	useContext,
	useMemo,
	useState,
} from 'react';

type AlertType = 'error' | 'confirm';

interface ModalContextProps {
	isModalOpen: boolean;
	isAlertOpen: boolean;
	content: ReactElement;
	alertText: string;
	alertType: AlertType;
	actionCallback: () => void;
	openModal: (newContent: ReactElement, actionCallback: () => void) => void;
	openAlert: (newAlertText: string, newAlertType: AlertType, newActionCallback: () => void) => void;
	closeModal: () => void;
	closeAlert: () => void;
}

const ModalContext = createContext<ModalContextProps>({
	isAlertOpen: false,
	isModalOpen: false,
	content: <div />,
	alertText: '',
	alertType: 'confirm',
	actionCallback: () => {},
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
	const [actionCallback, setActionCallback] = useState<() => void>(() => {});

	const openModal = (newContent: ReactElement, newActionCallback: () => void) => {
		setContent(newContent);
		setActionCallback(() => newActionCallback);
		setIsModalOpen(true);
	};

	const openAlert = (
		newAlertText: string,
		newAlertType: AlertType,
		newActionCallback: () => void = () => {},
	) => {
		setAlertText(newAlertText);
		setAlertType(newAlertType);
		setActionCallback(() => newActionCallback);
		setIsAlertOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const closeAlert = () => {
		setIsAlertOpen(false);
	};

	const context = useMemo(
		() => ({
			isModalOpen,
			isAlertOpen,
			content,
			alertText,
			alertType,
			actionCallback,
			openModal,
			openAlert,
			closeModal,
			closeAlert,
		}),
		[isModalOpen, isAlertOpen, content, alertText, alertType, actionCallback],
	);

	return <ModalContext.Provider value={context}>{children}</ModalContext.Provider>;
}
