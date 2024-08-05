import type { Category } from 'src/types/index.ts';

interface ChatProps {
	type: Category;
}

export default function Chat({ type }: ChatProps) {
	return <div className="flex gap-3">{type}</div>;
}
