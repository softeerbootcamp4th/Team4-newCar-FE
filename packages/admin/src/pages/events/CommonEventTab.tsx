import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Button } from 'src/components/ui/button';
import { Input } from 'src/components/ui/input';
import useEvent, { CommonEvent } from 'src/hooks/useEvent';
import { useAlert } from 'src/store/provider/AlertProvider';
import { getPickerTimeFromUtc } from 'src/utils/time';

function CommonEventItem({ description, element }: { description: string; element: JSX.Element }) {
	return (
		<div className="w-1/2 p-1">
			<div className="flex rounded-sm border-[1px] border-black">
				<div className="flex w-32 items-center justify-center border-r-[1px] border-black min-h-[40px]">
					{description}
				</div>
				<div className="flex w-full items-center justify-center">{element}</div>
			</div>
		</div>
	);
}

function CommonEventBox({ commonEvent }: { commonEvent: CommonEvent }) {
	const { openAlert, addAlertCallback } = useAlert();
	const [startTime, setStartTime] = useState('');
	const [endTime, setEndTime] = useState('');

	useEffect(() => {
		if (commonEvent) {
			setStartTime(getPickerTimeFromUtc(commonEvent.startTime));
			setEndTime(getPickerTimeFromUtc(commonEvent.endTime));
		}
	}, [commonEvent]);

	const getDurationDiff = (start: string, end: string) => {
		const tmpDiff = new Date(end).getTime() - new Date(start).getTime();
		if (Number.isNaN(tmpDiff)) return 0;
		return tmpDiff;
	};

	const validateDate = (start: string, end: string) => {
		const diff = getDurationDiff(start, end);
		const validCondition = diff >= 0;
		return validCondition;
	};

	const saveStartDate = (date: string) => {
		if (validateDate(date, endTime)) {
			setStartTime(date);
		} else {
			toast('올바르지 않은 기간입니다.');
		}
	};

	const saveEndDate = (date: string) => {
		if (validateDate(startTime, date)) {
			setEndTime(date);
		} else {
			toast('올바르지 않은 기간입니다.');
		}
	};

	const handleSave = () => {
		addAlertCallback(() => {
			console.log('수정완료');
		});
		openAlert('이벤트를 수정할까요?', 'confirm');
	};

	return (
		<div className="flex flex-row flex-wrap rounded-sm border-[1px] border-black p-1">
			<CommonEventItem description="이벤트 명" element={<div>{commonEvent.eventName}</div>} />
			<CommonEventItem description="상태" element={<div>{commonEvent.status}</div>} />
			<CommonEventItem
				description="담당자"
				element={
					<div>
						{commonEvent.eventManager}
					</div>

				}
			/>
			<CommonEventItem
				description="진행 기간"
				element={
					<>
						<Input
							type="date"
							value={startTime}
							onChange={(e) => {
								saveStartDate(e.target.value);
							}}
						/>
						~
						<Input
							type="date"
							value={endTime}
							onChange={(e) => {
								saveEndDate(e.target.value);
							}}
						/>
					</>
				}
			/>
			<Button onClick={handleSave}>수정완료</Button>
		</div>
	);
}

function CommonEventTab() {
	const { commonEvent } = useEvent();

	return (
		<div className="mt-4 flex flex-col gap-2">
			{commonEvent && <CommonEventBox commonEvent={commonEvent} />}
		</div>
	);
}
export default CommonEventTab;
