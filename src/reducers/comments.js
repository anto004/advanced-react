import { ADD_COMMENT, FETCH_COMMENTS } from "actions/types";
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
		case FETCH_COMMENTS:
			// eslint-disable-next-line no-case-declarations
			const comments = action.comments.map((comment) => {
				return {
					id: comment.id,
					comment: comment.name,
				};
			});
			return state.concat(comments);
		default:
			return state;
	}
}
