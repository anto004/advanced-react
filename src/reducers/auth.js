import { CHANGE_AUTH } from "actions/types";
/*
	state = true/false
*/

export default function changeAuthReducer(state = false, action) {
	const { type, isLoggedIn } = action;

	switch (type) {
		case CHANGE_AUTH:
			return isLoggedIn;
		default:
			return state;
	}
}
