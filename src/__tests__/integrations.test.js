import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "Root";
import App from "components/App";

beforeEach(() => {
	const url = "http://jsonplaceholder.typicode.com/comments";

	// Turn off any axios requests
	moxios.install();

	// Respond with fake data
	moxios.stubRequest(url, {
		status: 200,
		response: [
			{ id: 100, comment: "test 1" },
			{ id: 101, comment: "test 2" },
		],
	});
});

afterEach(() => {
	moxios.uninstall();
});

test("can fetch a list of comments", (done) => {
	// Attempt to render our app
	const wrapper = mount(
		<Root>
			<App />
		</Root>
	);

	// Find the fetch button
	wrapper.find(".fetch-comments").simulate("click");

	moxios.wait(() => {
		wrapper.update();

		// Expect to find a list of comments
		expect(wrapper.find("li").length).toEqual(2);
		done();

		wrapper.unmount();
	});
});
