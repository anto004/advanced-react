import { combineReducers } from "redux";
import commentsReducer from "reducers/comments";
import changeAuthReducer from "reducers/auth";

// comments contains all the reducers for our app
const reducers = combineReducers({
	comments: commentsReducer,
	changeAuth: changeAuthReducer,
});

export default reducers;
