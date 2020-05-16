import axios from "axios";
import { ADD_COMMENT, FETCH_COMMENTS } from "actions/types";

export default function saveComment(id, comment) {
	return {
		type: ADD_COMMENT,
		id,
		comment,
	};
}

export function fetchComments() {
	// Remove s in https
	const response = axios.get("http://jsonplaceholder.typicode.com/comments");
	return {
		type: FETCH_COMMENTS,
		comments: response,
	};
}
