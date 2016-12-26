import {combineReducers} from "redux-immutable";
import {routerReducer} from "react-router-redux";
import signature from "./homepage/homepage-reducer";

export default combineReducers({
	routing: routerReducer,
	signature
})
