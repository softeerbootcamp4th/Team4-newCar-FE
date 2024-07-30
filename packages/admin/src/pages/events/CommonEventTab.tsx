import { useState } from 'react';
import { Button } from 'src/components/ui/button';
import { Input } from 'src/components/ui/input';
import { useAlert } from 'src/store/provider/AlertProvider';

function CommonEventItem({ description, element }: { description: string; element: JSX.Element }) {
	return (
		<div className="w-1/2 p-1">
			<div className="flex rounded-sm border-[1px] border-black">
				<div className="flex w-32 items-center justify-center border-r-[1px] border-black">
					{description}
				</div>
				<div className="flex w-full items-center justify-center">{element}</div>
			</div>
		</div>
	);
}

function CommonEventBox() {
	const { openAlert, addAlertCallback } = useAlert();
	const [managerName, setManagerName] = useState('');
	const [startDate, setsStartDate] = useState('');
	const [endDate, setEndDate] = useState('');

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
		if (validateDate(date, endDate)) {
			setsStartDate(date);
		} else {
			openAlert('올바르지 않은 기간입니다.', 'alert');
		}
	};

	const saveEndDate = (date: string) => {
		if (validateDate(startDate, date)) {
			setEndDate(date);
		} else {
			openAlert('올바르지 않은 기간입니다.', 'alert');
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
			<CommonEventItem description="이벤트 명" element={<div>이벤트명</div>} />
			<CommonEventItem description="상태" element={<div>상태입니다</div>} />
			<CommonEventItem
				description="담당자"
				element={
					<Input
						className="w-full"
						placeholder=""
						value={managerName}
						onChange={(e) => {
							setManagerName(e.target.value);
						}}
					/>
				}
			/>
			<CommonEventItem
				description="진행 기간"
				element={
					<>
						<Input
							type="date"
							value={startDate}
							onChange={(e) => {
								saveStartDate(e.target.value);
							}}
						/>
						~
						<Input
							type="date"
							value={endDate}
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
	return (
		<div className="mt-4 flex flex-col gap-2">
			<CommonEventBox />
			<CommonEventBox />
			<CommonEventBox />
		</div>
	);
}
export default CommonEventTab;
