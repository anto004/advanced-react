import { ADD_COMMENT } from "actions/types";
/*
	return a list of comments
	[
		{ id: 1234,
		  comment: "Hi"
		}
	]
*/
export default function commentsReducer(state = [], action) {
	const { type } = action;
	switch (type) {
		case ADD_COMMENT:
			return [
				...state,
				{
					id: action.id,
					comment: action.comment,
				},
			];
		default:
			return state;
	}
}
