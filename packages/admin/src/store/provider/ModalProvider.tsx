import {
	createContext,
	PropsWithChildren,
	ReactElement,
	useContext,
	useMemo,
	useState,
} from 'react';

interface ModalContextProps {
	isOpen: boolean;
	content: ReactElement;
	actionCallback: () => void;
	closeModal: () => void;
	openModal: (newContent: ReactElement, actionCallback: () => void) => void;
}

const ModalContext = createContext<ModalContextProps>({
	isOpen: false,
	content: <div />,
	actionCallback: () => {},
	closeModal: () => {},
	openModal: () => {},
});

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }: PropsWithChildren) {
	const [isOpen, setIsOpen] = useState(false);
	const [content, setContent] = useState<ReactElement>(<div />);
	const [actionCallback, setActionCallback] = useState<() => void>(() => {});

	const openModal = (newContent: ReactElement, newActionCallback: () => void) => {
		setContent(newContent);
		setActionCallback(() => newActionCallback);
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const context = useMemo(
		() => ({
			isOpen,
			content,
			actionCallback,
			openModal,
			closeModal,
		}),
		[isOpen, content, actionCallback],
	);

	return <ModalContext.Provider value={context}>{children}</ModalContext.Provider>;
}
