import moment from 'moment';

// eslint-disable-next-line import/prefer-default-export
export const getPickerTimeFromKst = (time: string) => {
	const current = moment(time);
	return current.format('YYYY-MM-DD');
};

export const getKstFromPickerTime = (time: string) => {
	const kstDate = moment(time).utcOffset(9);
	return kstDate.format('YYYY-MM-DDTHH:mm:ss');
};
