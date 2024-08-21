import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from 'src/components/ui/table.tsx';

interface ResultTableProps {
	headers: Array<{
		text: string;
		width: number | string;
	}>;
	rows: Array<Array<string>>;
}

function ResultTable({ headers, rows }: ResultTableProps) {
	const isBeforeDraw = rows.length === 0;

	return isBeforeDraw ? (
		<div className="flex h-full flex-col items-center justify-center">
			아직 당첨자 추첨이 이루어지지 않았습니다.
		</div>
	) : (
		<Table>
			<TableHeader>
				<TableRow>
					{headers.map((header, headerIndex) => (
						<TableHead key={headerIndex} className={`w-[${header.width}px]`}>
							{header.text}
						</TableHead>
					))}
				</TableRow>
			</TableHeader>
			<TableBody>
				{rows.map((row, rowIndex) => (
					<TableRow key={rowIndex}>
						{row.map((item, colIndex) => (
							<TableCell className="font-medium" key={colIndex}>
								{item}
							</TableCell>
						))}
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}

export default ResultTable;
