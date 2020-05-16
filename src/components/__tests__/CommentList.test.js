import React from "react";
import { mount } from "enzyme";

import CommentList from "components/CommentList";
import Root from "Root";

let wrapper;
let initialState;

beforeEach(() => {
	initialState = {
		comments: [
			{ id: 1, comment: "test comment 1" },
			{ id: 2, comment: "test comment 2" },
		],
	};

	wrapper = mount(
		<Root initialState={initialState}>
			<CommentList />
		</Root>
	);
});

// Expect li tag for each comment
test("creates one li per comment", () => {
	console.log(wrapper.find("li").debug());

	const { comments } = initialState;
	expect(wrapper.find("li").length).toEqual(comments.length);
});

// Expect a text
// text() not recommended by enzyme to look for text
// We use render() instead
test("shows a text for a comment", () => {
	// render() returns a cheerio
	const { comments } = initialState;
	const cheerio = wrapper.render();

	// We can't test for multiple li text at once
	expect(cheerio.find("li").text).toContain(comments[0].comments);
	expect(cheerio.find("li").text).toContain(comments[1].comments);

	// Not recommended
	// wrapper.find("li").forEach((li, index) => {
	//	 expect(li.text()).toEqual(comments[index].comment);
	// });
});
