import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "Root";

// TODO: Use describe to group test together
// Write repeated code in one section (beforeEach)
let wrapper;

beforeEach(() => {
	// Render it to a fake DOM
	// Does not unmount our component from the fake DOM
	wrapper = mount(
		<Root>
			<CommentBox />
		</Root>
	);
});

afterEach(() => {
	// Every instanct to test will receive a beforeEach and aferEach
	wrapper.unmount();
});

test("has a textarea and a button", () => {
	// Expecting to find one textarea
	expect(wrapper.find("textarea").length).toEqual(1);

	// Expecting to find one submit button
	expect(wrapper.find("button").length).toEqual(2);
});

/*
	Find the textarea element
	Simulate a change event
	Supply a fake value
	Force the component to update(state has changed)
	Assert the textarea value has changed

*/
test("has a textarea that users can type in", () => {
	// Find the textarea
	const textArea = wrapper.find("textarea");

	// Simulate accepts two args
	// (event, mock event)
	// We're simulating the change event of the textarea
	// With the fake event object
	// event.target.value = "Hey Antonio!"
	textArea.simulate("change", {
		target: { value: "Hey Antonio!" },
	});

	// Make sure the state is updated and re-rendered
	// Force a component to re-render
	textArea.update();

	// Verify what the prop(attribute) value of the textarea
	// What we're expecting
	// console.log(wrapper.find("textarea").debug());
	expect(wrapper.find("textarea").prop("value")).toEqual("Hey Antonio!");
});

/*
	Submit button
	When the button is pressed
	The textarea clears out
*/
test("when a submit button is clicked, textarea is cleared", () => {
	// Populate our textarea
	wrapper.find("textarea").simulate("change", {
		target: { value: "hello!" },
	});

	wrapper.update();
	expect(wrapper.find("textarea").prop("value")).toEqual("hello!");

	// After a submit button is clicked
	wrapper.find("form").simulate("submit");

	// Force re-render
	wrapper.find("form").update();

	// What we're expecting the state comment to be empty
	expect(wrapper.find("textarea").prop("value")).toEqual("");
});
