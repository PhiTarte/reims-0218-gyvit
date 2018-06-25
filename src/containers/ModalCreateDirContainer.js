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

import { makeHideModalCreateDir } from "../actions/modalCreateDirAction"
import { makeCreateDirSuccess } from "../actions/foldersActions"
import { createDir } from "../api/directorys/createDir"

const mapStateToProps = state => {
  return {
    destination: state.currentDir._id,
    modalCreateDir: state.modalCreateDir.visibilityCreateDir
  }
}

const mapDispatchToProps = dispatch => ({
  onCreateDir: name => {
    createDir(name, this.state.currentDir._id).then(response =>
      dispatch(makeCreateDirSuccess(response))
    )
  },
  // function for cancelling
  onHideModal: () => dispatch(makeHideModalCreateDir())
})

class ModalCreateDirContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { name: "" }
    // this.props.onCreateDir = this.props.onCreateDir.bind(this)
  }

  handleClick(event) {
    this.setState({ name: event.target.form[0].attributes.value })
    this.props
      .onCreateDir(this.state.name)
      .then(response => this.props.onHideModal()) // after creating dir, i hide the modal
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modalCreateDir}>
          <ModalHeader toggle={() => this.props.onHideModal() /*cancel modal*/}>
            Add a directory
          </ModalHeader>
          <ModalBody>
            <Form name="formCreateDir">
              <FormGroup>
                <Label for="name">Nom: </Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter the name of the new Directory"
                />
              </FormGroup>
              <Button type="button" onClick={event => this.handleClick(event)}>
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
  ModalCreateDirContainer
) // If you want to use mapDispatchToProps without a mapStateToProps just use null for the first argument.
