import { useEffect } from 'react';
import { RealTimeChatting, RealTimeRacing } from 'src/components/event/index.ts';
import SECTION_ID from 'src/constants/sectionId.ts';
import scrollToElementId from 'src/utils/scrollToElementId.ts';

export default function EventPage() {
	useEffect(() => {
		scrollToElementId({ sectionId: SECTION_ID.RACING, behavior: 'instant' });
	}, []);

	return (
		<>
			<RealTimeRacing />
			<RealTimeChatting />
		</>
	);
}
