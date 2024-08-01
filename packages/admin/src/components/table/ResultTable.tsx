import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from 'src/components/ui/table';

interface ResultTableProps {
	headers: Array<{
		text: string;
		width: number | string;
	}>;
	rows: Array<Array<string>>;
}

function ResultTable({ headers, rows }: ResultTableProps) {
	return (
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
					<TableRow key={`row-${row.join()}`} key={rowIndex}>
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
