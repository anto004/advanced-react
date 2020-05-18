import React from "react";
import ReactDOM from "react-dom";
import Root from "Root";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/App";

/*
	This is where we're supposed to place our Provider and createStore
	For our test purposes, we need a helper component
	To pass our Provider in all those test Components
	Let's move our Provider and createStore to Root.js
*/

ReactDOM.render(
	<Root>
		{
			// Route to Main Page(App component)
		}
		<BrowserRouter>
			<Route path="/" component={App} />
		</BrowserRouter>
	</Root>,
	document.getElementById("root")
);
