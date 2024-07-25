import {
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
	Pagination as ShadcnPagination,
} from 'src/components/ui/pagination';

interface PaginationProps {
	pageIndex: number;
	total: number;
	setPageIndex: React.Dispatch<React.SetStateAction<number>>;
}

function Pagination({ pageIndex, setPageIndex, total }: PaginationProps) {
	const listItemCount = 10;
	const minPageIndex = 0;
	const maxPageIndex = Math.ceil(total / listItemCount) - 1;
	const pageList = new Array(maxPageIndex + 1).fill(0).map((_, index) => index);
	const handlePrevious = () => {
		if (pageIndex - 1 >= minPageIndex) {
			setPageIndex(pageIndex - 1);
		}
	};
	const handleNext = () => {
		if (pageIndex + 1 <= maxPageIndex) {
			setPageIndex(pageIndex + 1);
		}
	};
	const handleClick = (index: number) => {
		setPageIndex(index);
	};
	return (
		<ShadcnPagination>
			<PaginationContent>
				<PaginationItem className="cursor-pointer">
					<PaginationPrevious onClick={handlePrevious} />
				</PaginationItem>
				{pageList.map((pageNum) => (
					<PaginationItem
						key={pageNum}
						className="cursor-pointer"
						onClick={() => {
							handleClick(pageNum);
						}}
					>
						<PaginationLink isActive={pageIndex === pageNum}>{pageNum + 1}</PaginationLink>
					</PaginationItem>
				))}

				<PaginationItem className="cursor-pointer">
					<PaginationNext onClick={handleNext} />
				</PaginationItem>
			</PaginationContent>
		</ShadcnPagination>
	);
}

export default Pagination;
