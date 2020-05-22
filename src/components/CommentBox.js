import React, { Component } from "react";
import { connect } from "react-redux";
import { saveComment, fetchComments, changeAuth } from "actions";
import fetchCommentsAPI from "utils/api";
import CommentList from "components/CommentList";
import requireAuth from "components/requireAuth";

class CommentBox extends Component {
	constructor(props) {
		super(props);
		this.state = { comment: " " };
	}

	componentDidUpdate() {
		console.log("CommentBox componentDidUdate called");
	}

	handleChange = (event) => {
		const { value } = event.target;
		this.setState(() => ({
			comment: value,
		}));

		// this.setState({ comment: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const { boundSaveComment } = this.props;
		const { comment } = this.state;
		boundSaveComment(101, comment);

		this.setState({ comment: "" });
	};

	handleFetchComments = () => {
		const { boundFetchComments } = this.props;

		// API request
		fetchCommentsAPI().then((results) => {
			if (results) {
				// Dipatch an action when api return results
				boundFetchComments(results);
			}
		});
	};

	authenticateUser(auth) {
		const { boundChangeAuth } = this.props;

		boundChangeAuth(!auth);
	}

	render() {
		const { comment } = this.state;
		const { isLoggedIn } = this.props;
		console.log("isLoggedIn:", isLoggedIn);

		// TODO: Create a HOC Log In button
		return !isLoggedIn ? (
			<div>
				<h4>Please Login to Add Comments</h4>
				<button type="button" onClick={() => this.authenticateUser(isLoggedIn)}>
					Log In
				</button>
			</div>
		) : (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h4>Add a Comment</h4>
					<textarea value={comment} onChange={this.handleChange} />
					<div>
						<button type="submit">Submit</button>
					</div>
				</form>
				<button
					type="button"
					className="fetch-comments"
					onClick={() => this.handleFetchComments()}
				>
					Fetch Comments
				</button>
				<CommentList />
			</div>
		);
	}
}

function dispatchStateToProps(dispatch) {
	return {
		boundSaveComment: (id, comment) => dispatch(saveComment(id, comment)),
		boundFetchComments: (comments) => dispatch(fetchComments(comments)),
		boundChangeAuth: (auth) => dispatch(changeAuth(auth)),
	};
}

export default connect(null, dispatchStateToProps)(requireAuth(CommentBox));
