export class FetcherError extends Error {
	response: Response;
	data: {
		message: string;
	};
	constructor({
		message,
		response,
		data,
	}: {
		message: string;
		response: Response;
		data: {
			message: string;
		};
	}) {
		super(message);

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, FetcherError);
		}

		this.name = "ResponseError";
		this.response = response;
		this.data = data ?? { message };
	}
}
