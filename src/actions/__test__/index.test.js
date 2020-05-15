import saveComment from "actions";
import { ADD_COMMENT } from "actions/types";

describe("save Comment action", () => {
	it("has the correct type", () => {
		const action = saveComment();

		expect(action.type).toEqual(ADD_COMMENT);
	});

	it("has the correct id", () => {
		const id = 1234;
		const action = saveComment(id);

		expect(action.id).toEqual(id);
	});

	it("has the correct comment", () => {
		const comment = "testing action creator";
		const action = saveComment(1234, comment);

		expect(action.comment).toEqual(comment);
	});
});
