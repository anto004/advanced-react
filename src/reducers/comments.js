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
	const { type, comment } = action;
	switch (type) {
		case ADD_COMMENT:
			return [...state, comment];
		case FETCH_COMMENTS:
			// eslint-disable-next-line no-case-declarations
			const comments = action.comments.map((com) => {
				return {
					id: com.id,
					comment: com.name,
				};
			});
			return state.concat(comments);
		default:
			return state;
	}
}
