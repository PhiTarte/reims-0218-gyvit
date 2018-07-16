export const FETCH_FOLDERS_SUCCESS = "FETCH_FOLDERS_SUCCESS"
export const CREATE_DIR_SUCCESS = "CREATE_DIR_SUCCESS"
export const RETRIEVE_DIR_SUCCESS = "RETRIEVE_DIR_SUCCESS"
export const UPDATE_A_FOLDER_SUCCESS = "UPDATE_A_FOLDER_SUCCESS"
export const DELETE_A_FOLDER_SUCCESS = "DELETE_A_FOLDER_SUCCESS"
export const LIST_ALL_DIRS = "LIST_ALL_DIRS"
export const REPLACE_FOLDERS_BY_FILE = "REPLACE_FOLDERS_BY_FILE"
export const LIST_INFORMATIONS_DIR_SUCCESS = "LIST_INFORMATIONS_DIR_SUCCESS"
export const SORT_DIRS_BY_NAME_ASC = "SORT_DIRS_BY_NAME_ASC"
export const SORT_DIRS_BY_NAME_DESC = "SORT_DIRS_BY_NAME_DESC"
export const SORT_DIRS_BY_DATE_ASC = "SORT_DIRS_BY_DATE_ASC"
export const SORT_DIRS_BY_DATE_DESC = "SORT_DIRS_BY_DATE_DESC"

export const makeSortDirsByNameAsc = response => ({
  type: SORT_DIRS_BY_NAME_ASC,
  response
})

export const makeSortDirsByNameDesc = response => ({
  type: SORT_DIRS_BY_NAME_DESC,
  response
})

export const makeSortDirsByDateAsc = response => ({
  type: SORT_DIRS_BY_DATE_ASC,
  response
})

export const makeSortDirsByDateDesc = response => ({
  type: SORT_DIRS_BY_DATE_DESC,
  response
})

export const makeFetchFoldersSuccess = response => ({
  type: FETCH_FOLDERS_SUCCESS,
  response
})

export const makeCreateDirSuccess = response => ({
  type: CREATE_DIR_SUCCESS,
  response
})

export const makeRetrieveDirSuccess = response => ({
  type: RETRIEVE_DIR_SUCCESS,
  response
})

export const makeUpdateAFolderSuccess = response => ({
  type: UPDATE_A_FOLDER_SUCCESS,
  response
})

export const makeReplaceFolder = response => ({
  type: REPLACE_FOLDERS_BY_FILE,
  response
})

export const makeDeleteAFolderSuccess = dirId => ({
  type: DELETE_A_FOLDER_SUCCESS,
  dirId
})

export const makeListAllDirs = response => ({
  type: LIST_ALL_DIRS,
  response
})

//like makeRetrieveDirSuccess but currentDir stay inchanged
export const makeInformationsDir = response => ({
  type: LIST_INFORMATIONS_DIR_SUCCESS,
  response
})
