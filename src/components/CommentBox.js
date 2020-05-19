import React, { Component } from "react";
import { connect } from "react-redux";
import { saveComment, fetchComments } from "actions";
import fetchCommentsAPI from "utils/api";
import CommentList from "components/CommentList";

class CommentBox extends Component {
	constructor(props) {
		super(props);
		this.state = { comment: " " };
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

	render() {
		const { comment } = this.state;

		return (
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

// const mapStateToProps = (state) => {
//	return {
//		comments: state, // Pass all the array of comments in the state
//	};
// };

function dispatchStateToProps(dispatch) {
	return {
		boundSaveComment: (id, comment) => dispatch(saveComment(id, comment)),
		boundFetchComments: (comments) => dispatch(fetchComments(comments)),
	};
}

export default connect(null, dispatchStateToProps)(CommentBox);
