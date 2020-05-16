import axios from "axios";

export default async function fetchCommentsAPI() {
	// Remove s in https
	const url = "http://jsonplaceholder.typicode.com/comments";

	const comments = axios
		.get(url)
		.then(function (response) {
			// handle success
			console.log(response);
			return response.data;
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});

	return comments;
}
