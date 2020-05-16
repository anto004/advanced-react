import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "reducers"; // This is from index.js
import { ADD_COMMENT } from "actions/types";

/* eslint-disable no-underscore-dangle */
const store = (initialState) =>
	createStore(
		reducers,
		initialState,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
/* eslint-enable */

// console.log("Store: ", store({}));

// Stateless function
// Set initialState for our CommentList testing purpose
// If initialState is not passed, pass it an empty state
export default ({ children, initialState = {} }) => {
	return <Provider store={store(initialState)}>{children}</Provider>;
};
