import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "reducers"; // This is from index.js
import { ADD_COMMENT } from "actions/types";

/* eslint-disable no-underscore-dangle */
const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

console.log(store.getState());

store.dispatch({
	type: ADD_COMMENT,
	id: 1234,
	comment: "Hello there!",
});

console.log(store.getState());

// Stateless function
export default (props) => {
	return <Provider store={store}>{props.children}</Provider>;
};
