import { combineReducers } from "redux"

import userReducer from "./userReducer"
import foldersReducer from "./foldersReducer"
import filesReducer from "./filesReducer"
import parentReducer from "./parentReducer"
import errorsReducer from "./errorsReducer"
import currentDirReducer from "./currentDirReducer"
import modalCreateDirReducer from "./modalCreateDirReducer"
import resultSearchReducer from "./resultSearchReducer"
import NotifReducer from "./NotifReducer"

export default combineReducers({
  error: errorsReducer,
  dirs: foldersReducer,
  files: filesReducer,
  user: userReducer,
  parent: parentReducer,
  currentDir: currentDirReducer,
  modalCreateDir: modalCreateDirReducer,
  resultSearch: resultSearchReducer,
  notif: NotifReducer
})
