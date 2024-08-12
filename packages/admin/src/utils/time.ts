import moment from 'moment';

// eslint-disable-next-line import/prefer-default-export
export const getPickerDateFromKst = (time: string) => {
	const current = moment(time);
	return current.format('YYYY-MM-DD');
};

export const getKstFromPickerDate = (time: string) => {
	const kstDate = moment(time).utcOffset(9);
	return kstDate.format('YYYY-MM-DDTHH:mm:ss');
};

export const getPickerTimeFromKst = (kst: string) => {
	const kstDate = moment(kst).utcOffset(9);
	return kstDate.format('HH:mm');
};

export const getKstTimeFromDateAndTime = (date: string, time: string) => `${date}T${time}:00`;
