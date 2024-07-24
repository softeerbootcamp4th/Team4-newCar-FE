import { ChangeEvent, useState } from 'react';
import { Button } from 'src/components/ui/button';
import { Input } from 'src/components/ui/input';

function QuizWinnerDraw() {
	const [rankList, setRankList] = useState<{ rank: number; winnerCount: string }[]>([]);

	const generateRankItem = () => ({
		rank: rankList.length + 1,
		winnerCount: '0',
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

	const handleDraw = () => {};

	const handleChangeWinnerCount = ({ target }: ChangeEvent<HTMLInputElement>, index: number) => {
		setRankList((pre) => {
			const nextValue = target.value;
			const tmp = [...pre];
			tmp[index].winnerCount = nextValue;
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
					<div className="mr-2 flex w-[100px] items-center justify-center border-r-2 border-black">
						{rankData.rank}등
					</div>
					<div className="flex w-full flex-row justify-between p-2">
						<div>
							<Input
								value={rankData.winnerCount}
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
export default QuizWinnerDraw;
