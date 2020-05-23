/*
	function ({ dispatch }) {
	// NEXT refers to the next middleware
	return function (next) {
		return function (action) {
			
		}
	}
}
*/

export default ({ dispatch }) => (next) => (action) => {
	if (!action.comments || !action.comments.then) {
		return next(action);
	}

	action.comments.then((response) => {
		const newAction = { ...action, comments: response.data };
		dispatch(newAction);
	});
};
