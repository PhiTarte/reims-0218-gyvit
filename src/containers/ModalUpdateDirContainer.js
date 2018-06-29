import React, { Component } from "react"
import { connect } from "react-redux"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap"

import { makeShowModalUpdateDir } from "../actions/modalUpdateDirAction"
import { makeUpdateAFolderSuccess } from "../actions/foldersActions"
import { updateDirectory } from "../api/directorys/updateDirectory"

const mapStateToProps = state => {
  return {
    name: state.name,
    destination: state.currentDir._id,
    modalUpdateDir: state.modalUpdateDir.visibilityUpdateDir

    // modalCreateDir: state.modalCreateDir.visibilityCreateDir
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmitUpdateDir: response => dispatch(makeUpdateAFolderSuccess(response)),
  onHideModal: () => dispatch(makeShowModalUpdateDir())
})

class ModalUpdateDirContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { name: "" }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.onUpdateDir = this.onUpdateDir.bind(this)
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }
  onUpdateDir() {
    updateDirectory(this.state.name)
      .then(response => this.props.onSubmitUpdateDir(response))
      .then(() => this.props.onHideModal()) // close modal after creating a dir
  }
  render() {
    return (
      <div>
        <Modal isOpen={this.props.modalUpdateDir}>
          <ModalHeader toggle={() => this.props.onHideModal()}>
            Rename the directory
          </ModalHeader>
          <ModalBody>
            <Form name="formUpdateDir">
              <FormGroup>
                <Label for="name">Nom: </Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={this.state.name}
                  placeholder="Change the name of the Directory"
                  onChange={event => this.handleNameChange(event)}
                />
              </FormGroup>
              <Button type="button" onClick={() => this.onUpdateDir()}>
                Submit
              </Button>
            </Form>
          </ModalBody>
          <ModalFooter />
        </Modal>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ModalUpdateDirContainer
)
