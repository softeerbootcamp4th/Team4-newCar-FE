const TEAM_TYPES = ['pet', 'leisure', 'place', 'travel'] as const;

type Category = (typeof TEAM_TYPES)[number];

interface ChatProps {
  type: Category
}

export default function Chat({ type }: ChatProps) {
  return <div className="flex gap-[8px]">{type}</div>;
}
