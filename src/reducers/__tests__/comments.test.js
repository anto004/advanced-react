import commentsReducer from "reducers/comments";
import { ADD_COMMENT } from "actions/types";

test("handles action of type ADD_COMMENT", () => {
	const action = {
		type: ADD_COMMENT,
		id: 10001,
		comment: "testing reducer",
	};

	const newState = commentsReducer([], action);

	const expState = [
		{
			id: action.id,
			comment: action.comment,
		},
	];

	expect(newState).toEqual(expState);
});
