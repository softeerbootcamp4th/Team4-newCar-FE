import * as XLSX from 'xlsx';

const excelDownload = (data: object[], fileName: string) => {
	const excelFileName = `${fileName}.xlsx`;
	const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
	const wb: XLSX.WorkBook = XLSX.utils.book_new();
	XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
	XLSX.writeFile(wb, excelFileName);
};

export default excelDownload;
