import todoReducer from "./todoreducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todoReducer,
});

export default rootReducer;