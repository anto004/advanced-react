import { ADD_COMMENT, FETCH_COMMENTS } from "actions/types";

// TODO: clean up code for action creators
// Return comment object
export function saveComment(id, comment) {
	return {
		type: ADD_COMMENT,
		id,
		comment,
	};
}

export function fetchComments(comments) {
	return {
		type: FETCH_COMMENTS,
		comments,
	};
}
