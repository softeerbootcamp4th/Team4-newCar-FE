import { useEffect } from 'react';
import { RealTimeChatting, RealTimeRacing } from 'src/components/event/index.ts';
import SECTION_ID from 'src/constants/sectionId.ts';
import scrollToElementId from 'src/utils/scrollToElementId.tsx';

export default function EventPage() {
	useEffect(() => {
		scrollToElementId(SECTION_ID.RACING);
	}, []);

	return (
		<>
			<RealTimeRacing />
			<RealTimeChatting />
		</>
	);
}
