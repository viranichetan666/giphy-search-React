import giphyReducer from "./giphy/reducer";
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

const createReducer = () =>
  combineReducers({
    giphy: giphyReducer,
    router: routerReducer
  });

export default createReducer;
