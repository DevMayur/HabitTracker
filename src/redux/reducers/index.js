// src/redux/reducers/index.js
import { combineReducers } from "redux";
import habitsReducer from "./habits";

const rootReducer = combineReducers({
    habits: habitsReducer,
});

export default rootReducer;
