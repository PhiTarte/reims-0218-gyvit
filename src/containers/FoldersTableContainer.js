import React, { Component } from "react"
import { connect } from "react-redux"
import {
  makeRetrieveDirSuccess,
  makeSortDirsByNameAsc,
  makeSortDirsByDateAsc
} from "../actions/foldersActions"
import { retrieveDir } from "../api/directorys/retrieveDirectorys"
import { Container, Button } from "reactstrap"
import FoldersTable from "../components/PageFolders/FoldersTable"

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
  constructor(props) {
    super(props)

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this)
  }
  onRadioBtnClick(rSelected) {
    this.setState({ rSelected })
  }

  render() {
    const { parent, files, dirs, onDirclick, onBackclick } = this.props
    return (
      <Container fluid>
        <Button
          color="primary"
          onClick={() => this.onRadioBtnClick(1)}
          active={this.state.rSelected === 1}
        >
          <p>Selected: {this.state.rSelected}</p>
        </Button>

        <FoldersTable
          parent={parent}
          files={files}
          dirs={dirs}
          onDirclick={onDirclick}
          onBackclick={onBackclick}
        />
      </Container>
    )
  }

  componentDidMount() {
    retrieveDir().then(root => this.props.onRetrieveDirSuccess(root))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoldersTableWrap)
