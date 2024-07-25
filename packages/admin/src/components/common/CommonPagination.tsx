import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from 'src/components/ui/pagination';

interface CommonPaginationProps {
	pageIndex: number;
	total: number;
	setPageIndex: React.Dispatch<React.SetStateAction<number>>;
}

function CommonPagination({ pageIndex, setPageIndex, total }: CommonPaginationProps) {
	const listItemCount = 10;
	// total%listItemCount
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
		<Pagination>
			<PaginationContent>
				<PaginationItem className="cursor-pointer">
					<PaginationPrevious onClick={handlePrevious} />
				</PaginationItem>
				{pageList.map((pageNum) => (
					<PaginationItem
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
		</Pagination>
	);
}

export default CommonPagination;
