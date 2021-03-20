import { combineReducers } from "redux"
import steps from "./steps"
import cells from "./cells"
import startPosition from "./startPosition"
import statusGame from "./statusGame"


export default combineReducers({ steps, cells, startPosition, statusGame })