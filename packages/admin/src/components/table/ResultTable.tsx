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
		width: number;
	}>;
	rows: Array<Array<string>>;
}

function ResultTable({ headers, rows }: ResultTableProps) {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					{headers.map((header) => (
						<TableHead className={`w-[${header.width}px]`}>{header.text}</TableHead>
					))}
				</TableRow>
			</TableHeader>
			<TableBody>
				{rows.map((row) => (
					<TableRow>
						{row.map((item) => (
							<TableCell className="font-medium">{item}</TableCell>
						))}
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}

export default ResultTable;
