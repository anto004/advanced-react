import React, { Component } from "react";
import { connect } from "react-redux";
import saveComment from "actions";

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

		// eslint-disable-next-line react/destructuring-assignment
		this.props.dispatch(saveComment(101, this.state.comment));

		this.setState({ comment: "" });
	};

	render() {
		const { comment } = this.state;

		return (
			<form onSubmit={this.handleSubmit}>
				<h4>Add a Comment</h4>
				<textarea value={comment} onChange={this.handleChange} />
				<div>
					<button type="submit">Submit</button>
					<button type="button">Fetch Comments</button>
				</div>
			</form>
		);
	}
}

// const mapStateToProps = (state) => {
//	return {
//		comments: state, // Pass all the array of comments in the state
//	};
// };

export default connect()(CommentBox);
