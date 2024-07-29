import { createContext } from 'react';
import { OpenModalProps } from '../types/ModalContextType';

const initialModal = {
	title: '',
	isOpen: false,
	content: null,
};

interface ModalContextProps {
	openMogin: (payload: OpenModalProps) => void;
	closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps>({
	openMogin: () => null,
	closeModal: () => null,
});

export { initialModal, ModalContext };
