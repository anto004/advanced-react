/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react";
import { connect } from "react-redux";

// TODO: Generate unique ID

class CommentList extends Component {
	renderComments() {
		const { comments } = this.props;

		if (comments.length === 0) {
			return (
				<h5>
					No comments
					<span role="img" aria-label="sad face">
						😕
					</span>
				</h5>
			);
		}

		return comments.map(({ id, comment }) => {
			return <li key={id}>{comment}</li>;
		});
	}

	render() {
		return (
			<div>
				<h4>Comment List:</h4>
				<ul>{this.renderComments()}</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		comments: state.comments,
	};
}

export default connect(mapStateToProps)(CommentList);
