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

import ModalErrorContainer from "./ModalErrorContainer"
import { makeHideModalCreateDir } from "../actions/modalCreateDirAction"
import { makeCreateDirSuccess } from "../actions/foldersActions"
import { makeShowModalError } from "../actions/errorsActions"
import { createDir } from "../api/directorys/createDir"

const mapStateToProps = state => {
  return {
    destination: state.currentDir._id,
    modalCreateDir: state.modalCreateDir.visibilityCreateDir
  }
}

const mapDispatchToProps = dispatch => ({
  // function to store the new dir
  onSubmitCreateDir: response => dispatch(makeCreateDirSuccess(response)),
  // function for cancelling modal
  onHideModal: () => dispatch(makeHideModalCreateDir()),
  onError: message => dispatch(makeShowModalError(message))
})

class ModalCreateDirContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { name: "", visibilityError: false }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.onCreateDir = this.onCreateDir.bind(this)
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onCreateDir() {
    createDir(this.state.name, this.props.destination)
      .then(res => {
        this.props.onSubmitCreateDir(res)
      })
      .catch(res => this.props.onError(res))
      .then(() => this.props.onHideModal()) // close modal after creating a dir
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modalCreateDir}>
          <ModalHeader toggle={() => this.props.onHideModal() /*cancel modal*/}>
            Ajout d'un dossier :
          </ModalHeader>
          <ModalErrorContainer />
          <ModalBody>
            <Form
              name="formCreateDir"
              onSubmit={event => event.preventDefault()}
            >
              <FormGroup>
                <Label for="name">Nom: </Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Entrez le nom du nouveau dossier"
                  onChange={event => this.handleNameChange(event)} // controlled seizure of input for new name
                />
              </FormGroup>
              <Button
                style={{
                  backgroundColor: "#7a57d1",
                  borderRadius: "100px",
                  border: "solid 1px #7a57d1",
                  color: "white",
                  marginRight: "5px"
                }}
                type="button"
                onClick={() => this.onCreateDir()}
              >
                Envoyez
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalCreateDirContainer) // If you want to use mapDispatchToProps without a mapStateToProps just use null for the first argument.
