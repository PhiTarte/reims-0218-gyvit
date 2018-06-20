import React, { Component } from "react"
import { connect } from "react-redux"
import FoldersTable from "../components/PageFolders/FoldersTable"
import { makeRetrieveDirSuccess } from "../actions/foldersActions"
import { retrieveDir } from "../api/directorys/retrieveDirectorys"

const mapStateToProps = state => ({
  folders: state.folders,
  files: state.files,
  parent: state.parent
})

const mapDispatchToProps = dispatch => ({
  onRetrieveDirSuccess: response => dispatch(makeRetrieveDirSuccess(response)),
  onDirclick: id =>
    retrieveDir(id).then(response => dispatch(makeRetrieveDirSuccess(response)))
})

class FoldersTableWrap extends Component {
  render() {
    const { parent, files, folders, onDirclick, onBackclick } = this.props
    return (
      <FoldersTable
        parent={parent}
        files={files}
        dirs={folders}
        onDirclick={onDirclick}
        onBackclick={onBackclick}
      />
    )
  }

  componentDidMount() {
    retrieveDir().then(dirs => this.props.onRetrieveDirSuccess(dirs))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FoldersTableWrap)
