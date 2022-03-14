import { FetcherError } from "../util";

export async function fetcher<Response = unknown>(
	input: RequestInfo,
	init?: RequestInit
): Promise<Response | undefined> {
	const response = await fetch(input, init);

	if (response.headers.get("Content-Length") === "0") {
		return undefined;
	}
	const data = await response.json();

	if (response.ok) {
		return data;
	}
	throw new FetcherError({
		message: response.statusText,
		response,
		data,
	});
}
