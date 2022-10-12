import { createStore } from "redux";
import allReducers from "./reducers/allReducer";

const store = createStore(allReducers);

export default store;
