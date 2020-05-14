// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let wrapped;

beforeEach(() => {
	wrapped = shallow(<App />);
});

test("shows a comment box", () => {
	// (What we expect) and (what we are expecting)
	// The matcher part is not of enzyme
	// We expect 1 CommentBox and we are expecting 1
	expect(wrapped.find(CommentBox).length).toEqual(1);
});

// Check for a CommentList in the App component
test("shows a comment list", () => {
	expect(wrapped.find(CommentList).length).toEqual(1);
});
