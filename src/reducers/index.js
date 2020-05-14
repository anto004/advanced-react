import { combineReducers } from "redux";
import commentsReducer from "reducers/comments";

// comments contains all the reducers for our app
const reducers = combineReducers({
	comments: commentsReducer,
});

export default reducers;
