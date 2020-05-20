import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeAuth } from "actions";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

// TODO: Create a main page in the App component
// Navigate to CommentBox
// Navigate to CommentList

class App extends Component {
	handleLoggingIn() {
		const { auth, boundChangeAuth } = this.props;

		// If LoggedIn(true) pass false
		// If LoggedOut(false) pass true
		boundChangeAuth(!auth);
	}

	renderButton() {
		const { auth } = this.props;

		return (
			<button type="button" onClick={() => this.handleLoggingIn()}>
				{auth ? `Sign Out` : `Sign In`}
			</button>
		);
	}

	render() {
		return (
			<ul>
				<li>
					<nav>
						<Link to="/">Home</Link>
						{this.renderButton()}
					</nav>
				</li>
				<li>
					<Link to="/comments">Comments</Link>
				</li>
				<li>
					<Link to="/post">Add Comment</Link>
				</li>
			</ul>
		);
	}
}

function mapStateToProps(state) {
	return {
		auth: state.changeAuth,
	};
}

function dispatchStateToProps(dispatch) {
	return {
		boundChangeAuth: (isLoggedIn) => dispatch(changeAuth(isLoggedIn)),
	};
}

export default connect(mapStateToProps, dispatchStateToProps)(App);
