// utils/customError.ts
export default class CustomError extends Error {
	status: number;

	constructor(message: string, status: number) {
		super(message);
		this.status = status;
		this.name = this.constructor.name;
	}
}
