import moment from 'moment';

// eslint-disable-next-line import/prefer-default-export
export const getPickerTimeFromUtc = (time: string) => {
	const current = moment(time);
	return current.format('YYYY-MM-DD');
};
