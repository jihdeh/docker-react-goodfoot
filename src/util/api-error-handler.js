import log from "./log";

export default function* apiErrorHandler(next) {
	try {
		yield next;
	} catch (_error) {
		console.log("Caught API error:");
		const {
			status = 500,
			message = error.stack || "Non-standard, nondescript error. Bug a dev to add messages to error objects, or at least throw a standard JS Error object. There is a collection of project-standard errors in lib/errors.js.",
			userMessage
		} = _error;
		const error = {status, message, userMessage};

		this.body = error;
		this.status = status;

		if (status >= 500) {
			this.app.emit("error", new Error(message), this);
			log.error(message, {status, event: "response", request: this.request.href, error});
		} else {
			log.info(message, {status, event: "response", request: this.request.href, error});
		}
	}
}
