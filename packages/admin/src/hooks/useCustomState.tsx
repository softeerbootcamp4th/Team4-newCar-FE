import { useState } from 'react';

function useCustomState<T>(initialState: T) {
	const [state, setState] = useState<T>(initialState);

	const setCustomState = (newState: Partial<T>) => {
		setState({ ...state, ...newState });
	};

	return [state, setCustomState];
}

export default useCustomState;
