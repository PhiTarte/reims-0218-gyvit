import { connect } from "react-redux"
import React from "react"
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap"
import {
  makeDeleteAFolderSuccess,
  makeUpdateAFolderSuccess,
  makeInformationsDir
} from "../../actions/foldersActions"
import ModalUpdateDirContainer from "../../containers/ModalUpdateDirContainer"
import { makeShowModalUpdateDir } from "../../actions/modalUpdateDirAction"
import { makeShowModalError } from "../../actions/errorsActions"
import { deleteDirectory } from "../../api/directorys/deleteDirectory"
import ModalInformationsDirContainer from "../../containers/ModalInformationsDirContainer"
//import { updateDir } from "../../api/directorys/updateDir"

const mapDispatchToProps = dispatch => ({
  onDeleteDir: dirId => dispatch(makeDeleteAFolderSuccess(dirId)),
  onShowUpdateDir: (dirId, dirName) =>
    dispatch(makeShowModalUpdateDir(dirId, dirName)),
  onShowInformationsDir: (dirId, dirName) =>
    dispatch(makeShowModalUpdateDir(dirId, dirName)),
  onListInformationsDir: response => dispatch(makeInformationsDir(response)),
  onUpdateDir: response => dispatch(makeUpdateAFolderSuccess(response)),
  onError: message => dispatch(makeShowModalError(message))
})

class DropDown extends React.Component {
  constructor(props) {
    super(props)

    const { _id, name, created, modified, shares } = props.dir
    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false,
      dirName: name
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  render() {
    return (
      <ButtonDropdown
        style={{ marginTop: "15px" }}
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
      >
        <ModalUpdateDirContainer />
        <ModalInformationsDirContainer />
        <DropdownToggle color="link">
          <img
            src="Assets/icon_dots_more.svg"
            alt="Button Dropdown"
            aria-hidden="true"
          />
        </DropdownToggle>
        <DropdownMenu>
          <div>
            <a
              style={{
                color: "black"
              }}
              className="dropdown-item"
              href=""
            >
              <img
                style={{
                  marginRight: "6%"
                }}
                src="Assets/icon_share_dropdown.png"
                alt=""
                aria-hidden="true"
              />
              <span>Share</span>
            </a>
            <a
              style={{
                color: "black"
              }}
              className="dropdown-item"
              href=""
            >
              <img
                style={{
                  marginRight: "8%"
                }}
                src="Assets/icon_create_public_access.png"
                alt=""
                aria-hidden="true"
              />
              <span>Create public access</span>
            </a>
            <a
              style={{
                color: "black"
              }}
              className="dropdown-item"
              href=""
            >
              <img
                style={{
                  marginRight: "8%"
                }}
                src="Assets/icon_create_private_access.png"
                alt=""
                aria-hidden="true"
              />
              <span>Create private access</span>
            </a>
            <div>
              <Button
                style={{
                  color: "black"
                }}
                className="dropdown-item"
                onClick={() => {
                  this.props.onListInformationsDir(this.props.dir)
                }}
              >
                <img
                  style={{
                    marginRight: "8%"
                  }}
                  src="Assets/icon_informations.png"
                  alt=""
                  aria-hidden="true"
                />
                <span>Informations</span>
              </Button>
            </div>
          </div>
          <DropdownItem divider />
          <div>
            <Button
              style={{
                color: "black"
              }}
              className="dropdown-item"
              onClick={() => {
                console.log("before button rename", this._id, this.name)
                return this.props.onShowUpdateDir(this._id, this.name)
              }}
            >
              <span>Renommer {this.name}</span>
            </Button>
            <Button
              style={{
                color: "black"
              }}
              className="dropdown-item"
              onClick={() => {
                deleteDirectory(this._id, this.name)
                  .then(response => {
                    // if response isn't with _id, error is catched
                    return this.props.onDeleteDir(response._id)
                  })
                  // errors not wanted
                  .catch(response => this.props.onError(response.message))
              }}
            >
              <span>Delete</span>
            </Button>
          </div>
        </DropdownMenu>
      </ButtonDropdown>
    )
  }
}
export default connect(null, mapDispatchToProps)(DropDown)
