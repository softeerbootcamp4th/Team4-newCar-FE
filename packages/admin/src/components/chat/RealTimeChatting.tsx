import { ChatList } from '@softeer/common/components';
import { useRef } from 'react';
import { AdminSocketReturnType } from 'src/hooks/socket/index.ts';
import { useAlert } from 'src/store/provider/AlertProvider.tsx';
import { Button } from '../ui/button.tsx';
import { Input } from '../ui/input.tsx';
import Chat from './Chat.tsx';

/** 실시간 기대평 섹션 */

function RealTimeChatting({ chatSocket: { messages, onBlock } }: Pick<AdminSocketReturnType, 'chatSocket'>) {
	const { openAlert, addAlertCallback } = useAlert();

	const noticeInputRef = useRef<HTMLInputElement>(null);
	const handleSend: React.FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		addAlertCallback(() => {
			// 삭제하는 로직 들어가야함
			if (noticeInputRef.current) {
				noticeInputRef.current.value = '';
			}
		});
		openAlert(<p>정말로 전송하겠습니까?<br />전송 이후엔 수정이 불가능합니다.</p>, 'confirm');
	};
	return (
		<section className="container flex max-w-[1200px] snap-start flex-col items-center pb-[115px] pt-[50px]">
			<form className="flex w-full flex-row mb-4 gap-2" onSubmit={handleSend}>
				<Input ref={noticeInputRef} className="flex flex-1" placeholder="공지사항을 입력하세요." />
				<Button type="submit">공지사항 전송</Button>
			</form>
			<div className="h-[1000px] w-full overflow-y-auto rounded-[10px] bg-neutral-800 py-10">
				<ChatList>
					{messages.map((message) => (
						<Chat onBlock={onBlock} key={message.id} {...message} />
					))}
				</ChatList>
			</div>
		</section>
	);
}

export default RealTimeChatting;
