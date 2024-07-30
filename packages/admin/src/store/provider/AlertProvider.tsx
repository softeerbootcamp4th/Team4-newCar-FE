import {
	createContext,
	PropsWithChildren,
	ReactElement,
	useContext,
	useMemo,
	useState,
} from 'react';

export type AlertType = 'alert' | 'confirm';

interface AlertContextProps {
	isAlertOpen: boolean;
	alertContent: ReactElement | string;
	alertType: AlertType;
	alertCallback: VoidFunction;
	addAlertCallback: (newAlertCallback: VoidFunction) => void;
	openAlert: (newAlertContent: ReactElement | string, newAlertType: AlertType) => void;
	closeAlert: VoidFunction;
}

const AlertContext = createContext<AlertContextProps>({
	isAlertOpen: false,
	alertContent: <div />,
	alertType: 'confirm',
	alertCallback: () => {},
	addAlertCallback: () => {},
	openAlert: () => {},
	closeAlert: () => {},
});

export const useAlert = () => useContext(AlertContext);

export function AlertProvider({ children }: PropsWithChildren) {
	const [isAlertOpen, setIsAlertOpen] = useState(false);
	const [alertType, setAlertType] = useState<AlertType>('confirm');
	const [alertContent, setAlertContent] = useState<ReactElement | string>(<div />);
	const [alertCallback, setAlertCallback] = useState<() => void>(() => {});

	const openAlert = (newAlertContent: ReactElement | string | string, newAlertType: AlertType) => {
		setAlertContent(newAlertContent);
		setAlertType(newAlertType);
		setIsAlertOpen(true);
	};

	const closeAlert = () => {
		setIsAlertOpen(false);
	};

	const addAlertCallback = (newAlertCallback: VoidFunction) => {
		setAlertCallback(() => newAlertCallback);
	};

	const context = useMemo(
		() => ({
			isAlertOpen,
			alertContent,
			alertType,
			alertCallback,
			addAlertCallback,
			openAlert,
			closeAlert,
		}),
		[isAlertOpen, alertContent, alertType],
	);

	return <AlertContext.Provider value={context}>{children}</AlertContext.Provider>;
}
