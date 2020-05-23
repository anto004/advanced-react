import tv4 from "tv4";
import stateSchema from "./stateSchema";

export default ({ dispatch, getState }) => (next) => (action) => {
	// We want all the other middlewares to finish first
	next(action);

	console.log(getState());
	const valid = tv4.validate(getState(), stateSchema);

	if (!valid) {
		console.warn("Invalid state Schema detected");
	}
};
