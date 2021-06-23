import { compose, applyMiddleware, combineReducers, createStore } from 'redux';
import rootReducer from "./reducers";
import Thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(Thunk))
);

export default store;
