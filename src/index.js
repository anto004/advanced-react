import React from "react";
import ReactDOM from "react-dom";
import Root from "Root";
import App from "./components/App";

/*
	This is where we're supposed to place our Provider and createStore
	For our test purposes, we need a helper component
	To pass our Provider in all those test Components
	Let's move our Provider and createStore to Root.js
*/

ReactDOM.render(
	<Root>
		<App />
	</Root>,
	document.getElementById("root")
);
