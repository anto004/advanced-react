import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxPromise from "redux-promise";
import reducers from "reducers"; // This is from index.js

// Stateless function
// Set initialState for our CommentList testing purpose
// If initialState is not passed, pass it an empty state
export default ({ children, initialState = {} }) => {
	// Use composeEnhancers to pass middleware to createStore
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const store = createStore(
		reducers,
		initialState,
		composeEnhancers(applyMiddleware(reduxPromise))
	);

	// console.log(store.getState());

	return <Provider store={store}>{children}</Provider>;
};
