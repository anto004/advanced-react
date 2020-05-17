import axios from "axios";

export default async function fetchCommentsAPI() {
	// Remove s in https
	const url = "http://jsonplaceholder.typicode.com/comments";

	const comments = axios
		.get(url)
		.then(function (response) {
			console.log("API status: ", response.status);

			// handle success
			return response.data;
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});

	return comments;
}
