import React, { Component } from "react";
import { connect } from "react-redux";

export default (ChildComponent) => {
	class ComposedComponent extends Component {
		// Component just got rendered
		componentDidMount() {
			// console.log("ComponentDidMount: ");
		}

		// Component after update
		componentDidUpdate() {
			// console.log("requireAuth componentDidUdate called");
		}

		// Authentiation code would go in here
		authenticateUser() {
			const { auth } = this.props;

			if (!auth) {
				console.log("Not logged In");
				// this.props.history.push("/");
				return false;
			}
			return true;
		}

		render() {
			// Whenever state.changeAuth is changed
			// AuthenticateUser is called with new values
			const isLoggedIn = this.authenticateUser();

			return <ChildComponent {...this.props} isLoggedIn={isLoggedIn} />;
		}
	}

	const mapStateToProps = (state) => {
		return {
			auth: state.changeAuth,
		};
	};

	return connect(mapStateToProps)(ComposedComponent);
};
