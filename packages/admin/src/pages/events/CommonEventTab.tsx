import moment, { Moment } from 'moment';
import { useEffect, useLayoutEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Button } from 'src/components/ui/button';
import { Input } from 'src/components/ui/input';
import useEvent from 'src/hooks/useEvent';
import { CommonEvent } from 'src/services/api/types/apiType';
import { useAlert } from 'src/store/provider/AlertProvider';
import {
	getKstTimeFromDateAndTime,
	getPickerDateFromKst,
	getPickerTimeFromKst,
} from 'src/utils/time';

function CommonEventItem({ description, element }: { description: string; element: JSX.Element }) {
	return (
		<div className="w-1/2 p-1">
			<div className="flex rounded-sm border-[1px] border-black">
				<div className="flex min-h-[40px] w-32 items-center justify-center border-r-[1px] border-black">
					{description}
				</div>
				<div className="flex w-full items-center justify-center">{element}</div>
			</div>
		</div>
	);
}

const getStatus = (startMoment: Moment, endMoment: Moment) => {
	const beforeCondition = moment().isBefore(startMoment);
	const aterCondition = moment().isAfter(endMoment);
	if (beforeCondition) return '예약';
	if (aterCondition) return '종료';
	return '진행중';
};

function CommonEventBox({
	commonEvent,
	handleUpdateEvent,
}: {
	commonEvent: CommonEvent;
	handleUpdateEvent: (newCommonEvent: CommonEvent) => void;
}) {
	const { openAlert, addAlertCallback } = useAlert();
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [startTime, setStartTime] = useState('00:00');
	const [endTime, setEndTime] = useState('00:00');
	const [managerName, setManagerName] = useState('');
	const [status, setStatus] = useState('');

	useEffect(() => {
		if (commonEvent) {
			// date
			setStartDate(getPickerDateFromKst(commonEvent.startTime));
			setEndDate(getPickerDateFromKst(commonEvent.endTime));
			// time
			setStartTime(getPickerTimeFromKst(commonEvent.startTime));
			setEndTime(getPickerTimeFromKst(commonEvent.endTime));
			// manager, status
			setManagerName(commonEvent.managerName);
			setStatus(getStatus(moment(commonEvent.startTime), moment(commonEvent.endTime)));
		}
	}, [commonEvent]);

	const validateDate = (startMoment: Moment, endMoment: Moment) =>
		startMoment.isSameOrBefore(endMoment);

	const saveStartDate = (date: string) => {
		const startMoment = moment(getKstTimeFromDateAndTime(date, startTime));
		const endMoment = moment(getKstTimeFromDateAndTime(endDate, endTime));
		if (validateDate(startMoment, endMoment)) {
			setStartDate(date);
		} else {
			toast('올바르지 않은 기간입니다.');
		}
	};

	const saveEndDate = (date: string) => {
		const startMoment = moment(getKstTimeFromDateAndTime(startDate, startTime));
		const endMoment = moment(getKstTimeFromDateAndTime(date, endTime));
		if (validateDate(startMoment, endMoment)) {
			setEndDate(date);
		} else {
			toast('올바르지 않은 기간입니다.');
		}
	};

	const saveStartTime = (time: string) => {
		const startMoment = moment(getKstTimeFromDateAndTime(startDate, time));
		const endMoment = moment(getKstTimeFromDateAndTime(endDate, endTime));
		if (validateDate(startMoment, endMoment)) {
			setStartTime(time);
		} else {
			toast('올바르지 않은 기간입니다.');
		}
	};

	const saveEndTime = (time: string) => {
		const startMoment = moment(getKstTimeFromDateAndTime(startDate, startTime));
		const endMoment = moment(getKstTimeFromDateAndTime(endDate, time));
		if (validateDate(startMoment, endMoment)) {
			setEndTime(time);
		} else {
			toast('올바르지 않은 기간입니다.');
		}
	};

	const saveManagerName = (newManagerName: string) => {
		setManagerName(newManagerName);
	};

	const handleSave = () => {
		addAlertCallback(() => {
			handleUpdateEvent({
				startTime: getKstTimeFromDateAndTime(startDate, startTime),
				endTime: getKstTimeFromDateAndTime(endDate, endTime),
				managerName,
				eventName: commonEvent.eventName,
			});
		});
		openAlert('이벤트를 수정할까요?', 'confirm');
	};

	return (
		<div className="flex flex-row flex-wrap rounded-sm border-[1px] border-black p-1">
			<CommonEventItem description="이벤트 명" element={<div>{commonEvent.eventName}</div>} />
			<CommonEventItem description="상태" element={<div>{status}</div>} />
			<CommonEventItem
				description="담당자"
				element={
					<Input
						value={managerName}
						onChange={(event) => {
							saveManagerName(event.target.value);
						}}
					/>
				}
			/>
			<CommonEventItem
				description="진행 기간"
				element={
					<>
						<div>
							<Input
								type="date"
								value={startDate}
								onChange={(e) => {
									saveStartDate(e.target.value);
								}}
							/>
							<Input
								type="time"
								value={startTime}
								onChange={(e) => {
									saveStartTime(e.target.value);
								}}
							/>
						</div>
						~
						<div>
							<Input
								type="date"
								value={endDate}
								onChange={(e) => {
									saveEndDate(e.target.value);
								}}
							/>
							<Input
								type="time"
								value={endTime}
								onChange={(e) => {
									saveEndTime(e.target.value);
								}}
							/>
						</div>
					</>
				}
			/>
			<Button onClick={handleSave}>수정완료</Button>
		</div>
	);
}

function CommonEventTab() {
	const { commonEvent, updateCommonEvent, refechCommonEvent } = useEvent();
	useLayoutEffect(() => {
		refechCommonEvent();
	}, []);
	const handleUpdateEvent = (newCmmonEvent: CommonEvent) => {
		updateCommonEvent(newCmmonEvent);
	};
	return (
		<div className="mt-4 flex flex-col gap-2">
			{commonEvent && (
				<CommonEventBox commonEvent={commonEvent} handleUpdateEvent={handleUpdateEvent} />
			)}
		</div>
	);
}
export default CommonEventTab;
