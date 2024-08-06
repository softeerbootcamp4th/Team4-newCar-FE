import { ChatList } from '@softeer/common/components';
import Chat from 'src/components/event/chatting/Chat.tsx';
import ChatInputArea from './inputArea/index.tsx';

export default function RealTimeChatting() {
	return (
		<section className="container flex max-w-[1200px] flex-col items-center pb-[115px] pt-[95px]">
			<h6 className="text-heading-10 mb-[25px] font-medium">기대평을 남겨보세요!</h6>
			<ChatInputArea />
			<div className="h-[1000px] w-full overflow-y-auto rounded-[10px] bg-neutral-800 py-10">
				<ChatList>
					<Chat type="message" user={{ category: 'pet', id: 1234223 }} message="안녕" />
					<Chat type="blocked" />
					<Chat type="notice" message="이건 공지야" />
					<Chat
						type="message"
						user={{ category: 'place', id: 1234567890 }}
						message="안녕 나는 좀 긴 문구야"
					/>
					<Chat
						type="message"
						user={{ category: 'leisure', id: 12223 }}
						message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloremque hic pariatur mollitia obcaecati veritatis sed repudiandae vero, esse, ut laudantium rerum aspernatur alias! Quidem molestias assumenda labore perspiciatis. Adipisci?"
					/>
					<Chat
						type="message"
						user={{ category: 'travel', id: 12223 }}
						message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloremque hic pariatur mollitia obcaecati veritatis sed repudiandae vero, esse, ut laudantium rerum aspernatur alias! Quidem molestias assumenda labore perspiciatis. Adipisci?"
					/>
					<Chat
						type="notice"
						message="이것도 공지야 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloremque hic pariatur mollitia obcaecati veritatis sed repudiandae vero, esse, ut laudantium rerum aspernatur alias! Quidem molestias assumenda labore perspiciatis. Adipisci?"
					/>
					<Chat type="blocked" />
					<Chat type="blocked" />
					<Chat type="message" user={{ category: 'pet', id: 1234223 }} message="안녕" />
					<Chat type="blocked" />
					<Chat type="notice" message="이건 공지야" />
					<Chat
						type="message"
						user={{ category: 'place', id: 1234567890 }}
						message="안녕 나는 좀 긴 문구야"
					/>
					<Chat
						type="message"
						user={{ category: 'leisure', id: 12223 }}
						message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloremque hic pariatur mollitia obcaecati veritatis sed repudiandae vero, esse, ut laudantium rerum aspernatur alias! Quidem molestias assumenda labore perspiciatis. Adipisci?"
					/>
					<Chat
						type="message"
						user={{ category: 'travel', id: 12223 }}
						message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloremque hic pariatur mollitia obcaecati veritatis sed repudiandae vero, esse, ut laudantium rerum aspernatur alias! Quidem molestias assumenda labore perspiciatis. Adipisci?"
					/>
					<Chat
						type="notice"
						message="이것도 공지야 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloremque hic pariatur mollitia obcaecati veritatis sed repudiandae vero, esse, ut laudantium rerum aspernatur alias! Quidem molestias assumenda labore perspiciatis. Adipisci?"
					/>
					<Chat type="blocked" />
					<Chat type="blocked" />
					<Chat type="message" user={{ category: 'pet', id: 1234223 }} message="안녕" />
					<Chat type="blocked" />
					<Chat type="notice" message="이건 공지야" />
					<Chat
						type="message"
						user={{ category: 'place', id: 1234567890 }}
						message="안녕 나는 좀 긴 문구야"
					/>
					<Chat
						type="message"
						user={{ category: 'leisure', id: 12223 }}
						message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloremque hic pariatur mollitia obcaecati veritatis sed repudiandae vero, esse, ut laudantium rerum aspernatur alias! Quidem molestias assumenda labore perspiciatis. Adipisci?"
					/>
					<Chat
						type="message"
						user={{ category: 'travel', id: 12223 }}
						message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloremque hic pariatur mollitia obcaecati veritatis sed repudiandae vero, esse, ut laudantium rerum aspernatur alias! Quidem molestias assumenda labore perspiciatis. Adipisci?"
					/>
					<Chat
						type="notice"
						message="이것도 공지야 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloremque hic pariatur mollitia obcaecati veritatis sed repudiandae vero, esse, ut laudantium rerum aspernatur alias! Quidem molestias assumenda labore perspiciatis. Adipisci?"
					/>
					<Chat type="blocked" />
					<Chat type="blocked" />
				</ChatList>
			</div>
		</section>
	);
}
