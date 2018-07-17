import React, { Component } from "react"
import { connect } from "react-redux"
import { makeRetrieveDirSuccess } from "../actions/foldersActions"
import { retrieveDir } from "../api/directorys/retrieveDirectorys"
import { Container } from "reactstrap"
import FoldersTable from "../components/PageFolders/FoldersTable"
import Example from "./ButtonFolders"

const mapStateToProps = state => ({
  dirs: state.dirs,
  files: state.files,
  parent: state.parent
})

const mapDispatchToProps = dispatch => ({
  onRetrieveDirSuccess: response => dispatch(makeRetrieveDirSuccess(response)),
  onDirclick: id =>
    retrieveDir(id).then(response =>
      dispatch(makeRetrieveDirSuccess(response))
    ),
  onBackclick: idParent =>
    retrieveDir(idParent).then(response =>
      dispatch(makeRetrieveDirSuccess(response))
    )
})

class FoldersTableWrap extends Component {
  render() {
    const { parent, files, dirs, onDirclick, onBackclick } = this.props
    return (
      <Container fluid>
        <Example />
        <FoldersTable
          parent={parent}
          files={files}
          dirs={dirs}
          onDirclick={onDirclick}
          onBackclick={onBackclick}
          onSortDate={() => {
            console.log("SortDate")
          }}
          onSortName={() => {
            console.log("SortName")
          }}
          onSortShare={() => {
            console.log("SortShare")
          }}
          directionDate={null}
          directionName={null}
          directionShar={null}
        />
      </Container>
    )
  }

  componentDidMount() {
    retrieveDir().then(root => this.props.onRetrieveDirSuccess(root))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoldersTableWrap)
