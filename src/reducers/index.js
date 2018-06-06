import { combineReducers } from "redux"

import foldersReducer from "./foldersReducer"
import userReducer from "./userReducer"

export default combineReducers({
  folders: foldersReducer,
  user: userReducer
})
