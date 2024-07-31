import { ReactElement } from 'react';

export interface OpenModalProps {
	title: string;
	content: ReactElement;
	modalCallback?: () => void;
}
