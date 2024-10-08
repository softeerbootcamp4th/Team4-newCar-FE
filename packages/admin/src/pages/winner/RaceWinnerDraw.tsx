import { ChangeEvent, useState } from 'react';
import { Button } from 'src/components/ui/button.tsx';
import { Input } from 'src/components/ui/input.tsx';
import useEvent from 'src/hooks/useEvent.tsx';
import { WinnerSetting } from 'src/services/api/types/apiType.ts';
import { useAlert } from 'src/store/provider/AlertProvider.tsx';

function RaceWinnerDraw() {
	const { updateRacingWinner } = useEvent();

	const { openAlert, addAlertCallback } = useAlert();

	const [rankList, setRankList] = useState<WinnerSetting[]>([]);

	const generateRankItem = (): WinnerSetting => ({
		rank: rankList.length + 1,
		num: 0,
	});

	const handleAdd = () => {
		setRankList((pre) => {
			const tmp = [...pre];
			tmp.push(generateRankItem());
			return tmp;
		});
	};

	const handleDelete = (index: number) => {
		setRankList((pre) => {
			const tmp = [...pre];
			tmp.splice(index, 1);
			return tmp;
		});
	};

	const handleDraw = () => {
		addAlertCallback(() => {
			updateRacingWinner(rankList);
		});
		openAlert(
			<div>
				<p>당첨자 추첨을 진행할까요?</p>
				<p className="text-xs text-red-600">
					ⓘ 재추첨 시 기존 당첨자 목록은 초기화됩니다.
					<br />
					추첨 전 목록을 다운로드 받아주세요.
				</p>
			</div>,
			'confirm',
		);
	};

	const handleChangeWinnerCount = ({ target }: ChangeEvent<HTMLInputElement>, index: number) => {
		setRankList((pre) => {
			const nextValue = target.value;
			const tmp = [...pre];
			tmp[index].num = parseInt(nextValue, 10);
			return tmp;
		});
	};

	return (
		<div className="flex w-[600px] flex-col gap-2">
			{rankList.map((rankData, index) => (
				<div
					key={rankData.rank}
					className="flex flex-row justify-start rounded-sm border-2 border-black"
				>
					<p className="mr-2 flex w-[100px] items-center justify-center border-r-2 border-black">
						{rankData.rank}등
					</p>
					<div className="flex w-full flex-row justify-between p-2">
						<div>
							<Input
								value={rankData.num}
								onChange={(event) => {
									handleChangeWinnerCount(event, index);
								}}
								type="number"
							/>
						</div>
						<div>
							{rankList.length === rankData.rank && (
								<Button
									onClick={() => {
										handleDelete(index);
									}}
								>
									삭제
								</Button>
							)}
						</div>
					</div>
				</div>
			))}
			<Button onClick={handleAdd}>당첨 순위 추가하기 + </Button>

			<Button onClick={handleDraw}>추첨하기</Button>
		</div>
	);
}
export default RaceWinnerDraw;
