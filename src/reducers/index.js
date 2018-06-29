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
import modalCreateFileReducer from "./modalCreateFileReducer"
import modalUpdateDirReducer from "./modalUpdateDirReducer"

export default combineReducers({
  error: errorsReducer,
  dirs: foldersReducer,
  files: filesReducer,
  user: userReducer,
  parent: parentReducer,
  currentDir: currentDirReducer,
  modalCreateDir: modalCreateDirReducer,
  modalCreateFile: modalCreateFileReducer,
  modalUpdateDir: modalUpdateDirReducer,
  resultSearch: resultSearchReducer,
  notif: NotifReducer
})
