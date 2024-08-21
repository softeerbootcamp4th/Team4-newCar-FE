import { ChatList } from '@softeer/common/components';
import { useRef } from 'react';
import { AdminSocketReturnType } from 'src/hooks/socket/index.ts';
import { useAlert } from 'src/store/provider/AlertProvider.tsx';
import { Button } from '../ui/button.tsx';
import { Input } from '../ui/input.tsx';
import Chat from './Chat.js';

/** 실시간 기대평 섹션 */

function RealTimeChatting({
	chatSocket: { messages, onBlock, onNotice, notice },
}: Pick<AdminSocketReturnType, 'chatSocket'>) {
	const { openAlert, addAlertCallback } = useAlert();
	const noticeInputRef = useRef<HTMLInputElement>(null);

	const handleSend: React.FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		const { value } = noticeInputRef!.current!;
		if (value !== '') {
			addAlertCallback(() => {
				onNotice(value);
			});
			openAlert('공지사항을 업데이트 합니다.', 'confirm');
		} else {
			openAlert('공지사항을 입력하세요.', 'alert');
		}
	};

	return (
		<section className="container flex max-w-[1200px] snap-start flex-col items-center pb-[115px] pt-[50px]">
			<form className="mb-4 flex w-full flex-row gap-2" onSubmit={handleSend}>
				<Input ref={noticeInputRef} className="flex flex-1" placeholder="공지사항을 입력하세요." />
				<Button type="submit">공지사항 변경</Button>
			</form>
			<div className="rounded-4 mb-4 w-full border-2 border-yellow-900 p-6">
				공지사항 : {notice}
			</div>
			<div className="h-[1000px] w-full overflow-y-auto rounded-[10px] bg-yellow-300 py-10">
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
