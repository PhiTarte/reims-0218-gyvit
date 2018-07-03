import {
  FETCH_FOLDERS_SUCCESS,
  CREATE_DIR_SUCCESS,
  RETRIEVE_DIR_SUCCESS,
  UPDATE_A_FOLDER_SUCCESS,
  DELETE_A_FOLDER_SUCCESS,
  LIST_INFORMATIONS_DIR_SUCCESS
} from "../actions/foldersActions"

const initialState = []

const foldersReducer = (prevState = initialState, action) => {
  if (action.type === FETCH_FOLDERS_SUCCESS) {
    return prevState
  }
  if (action.type === CREATE_DIR_SUCCESS) {
    return [...prevState, action.response]
  }
  if (action.type === RETRIEVE_DIR_SUCCESS) {
    return action.response.dirs
  }

  if (action.type === UPDATE_A_FOLDER_SUCCESS) {
    return prevState.map(dir => {
      if (dir._id === action.response._id) {
        return {
          ...dir,
          name: action.response.name
        }
      }
      return dir
    })
  }
  if (action.type === DELETE_A_FOLDER_SUCCESS) {
    return prevState.filter(dir => action.dirId !== dir._id)
  }
  if (action.type === LIST_INFORMATIONS_DIR_SUCCESS) {
    return prevState.filter(dir => action.response._id === dir._id)
  }

  return prevState
}

export default foldersReducer
