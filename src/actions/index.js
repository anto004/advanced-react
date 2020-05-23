import { ADD_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from "actions/types";
import fetchCommentsAPI from "utils/api";
import axios from "axios";

export function saveComment(id, comment) {
	return {
		type: ADD_COMMENT,
		comment: { id, comment },
	};
}

// Middleware waits between actions and reducers
//export function fetchComments(comments) {
//	return {
//		type: FETCH_COMMENTS,
//		comments,
//	};
//}

export function fetchComments() {
	const url = "http://jsonplaceholder.typicode.com/comments";
	const comments = axios.get(url);
	return {
		type: FETCH_COMMENTS,
		comments,
	};
}

export function changeAuth(isLoggedIn) {
	return {
		type: CHANGE_AUTH,
		isLoggedIn,
	};
}

// Thunk action creators
export const fetchCommentsThunk = () => (dispatch) => {
	fetchCommentsAPI().then((comments) => dispatch(fetchComments(comments)));
};
