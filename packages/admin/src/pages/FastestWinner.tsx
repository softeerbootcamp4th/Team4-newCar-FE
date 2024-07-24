import { ChangeEvent, useState } from 'react';
import { Button } from 'src/components/ui/button';
import { Input } from 'src/components/ui/input';

function FastestWinner() {
    const [rankList,setRankList] = useState<{rank: number, winnerCount: string}[]>([]);

    const generateRankItem = () => {
        return {
            rank: rankList.length+1,
            winnerCount: "0"
        }
    }

    const handleAdd = () => {
            console.log(generateRankItem())
            setRankList(pre => {
            const tmp = [...pre];
            tmp.push(generateRankItem());
            return tmp;
        });
    };

    const handleDelete = (index: number) => {
        setRankList(pre => {
            const tmp = [...pre];
            tmp.splice(index,1);
            return tmp;
        });
    }

    const handleChangeWinnerCount = ({ target }: ChangeEvent<HTMLInputElement>,index: number) => {
        setRankList(pre => {
            const tmp = [...pre];
            tmp[index].winnerCount = target.value;
            return tmp;
        });
    }
    console.log("rerender")
    return (
	<div className='flex flex-col gap-2 w-[600px]' >
		{
            rankList.map((rankData, index) => (
                <div key={(Math.random() * Number.MAX_VALUE)} className="flex flex-row justify-start border-black border-2 rounded-sm">
                    <div className="mr-2 border-r-2 border-black w-[100px] flex justify-center items-center"  >
                        {rankData.rank}등
                    </div>
                    <div className='flex flex-row justify-between p-2 w-full' >
                        <div>
                            <Input value={rankData.winnerCount} onChange={(event) => {
                                handleChangeWinnerCount(event,index);
                            }} type='number' />
                        </div>
                        <div>
                            {
                                rankList.length === rankData.rank && <Button onClick={() => {
                                handleDelete(index);
                            }} >삭제</Button>
                            }
                            
                        </div>
                    </div>
                </div>
            ))
        }
		<Button onClick={handleAdd}>당첨 순위 추가하기 + </Button>
	</div>
);
}
export default FastestWinner;
