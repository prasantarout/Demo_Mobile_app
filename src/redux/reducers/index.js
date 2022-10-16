import { combineReducers } from "redux";

import counterReducer from "./counterReducer";


const appReducer = combineReducers({
     counterReducer
})

export default appReducer