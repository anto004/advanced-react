import { ADD_COMMENT } from "actions/types";

export default function saveComment(id, comment) {
	return {
		type: ADD_COMMENT,
		id,
		comment,
	};
}
