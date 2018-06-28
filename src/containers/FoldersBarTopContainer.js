import React from "react"
import { connect } from "react-redux"
import {
  Col,
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
  Row,
  Container
} from "reactstrap"
import ModalCreateDirContainer from "./ModalCreateDirContainer"
import ModalCreateFileContainer from "./ModalCreateFileContainer"
import PathElement from "../components/PageFolders/PathElement"
import { makeShowModalCreateDir } from "../actions/modalCreateDirAction"
import { makeShowModalCreateFile } from "../actions/modalCreateFileAction"
import DragNDropContainers from "../containers/DragNDropContainers"

const mapDispatchToProps = dispatch => ({
  onShowCreateDir: () => dispatch(makeShowModalCreateDir()),
  onShowCreateFile: () => dispatch(makeShowModalCreateFile())
})

const mapStateToProps = state => ({
  currentDir: state.currentDir
})

class FoldersBarTopContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: "" }
  }

  render() {
    return (
      <Container>
        <ModalCreateDirContainer />
        <ModalCreateFileContainer />
        <Row>
          <Col xs="12">
            <Navbar
              expand="xs"
              style={{
                marginTop: "54px"
              }}
            >
              <NavbarBrand>
                Folders
                {this.props.currentDir.path &&
                  this.props.currentDir.path.map(pathElement => (
                    <PathElement name={pathElement.name} />
                  ))}
                {this.props.currentDir.name && (
                  <PathElement name={this.props.currentDir.name} />
                )}
              </NavbarBrand>
              <NavbarToggler />
              <Collapse navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <Button
                      type="button"
                      style={{
                        borderRadius: "50%",
                        height: "50px",
                        width: "50px",
                        backgroundColor: "#725fe3"
                      }}
                      onClick={() => this.props.onShowCreateDir()}
                    >
                      +
                    </Button>
                    <Button
                      type="button"
                      style={{
                        borderRadius: "50%",
                        height: "50px",
                        width: "50px",
                        backgroundColor: "black"
                      }}
                      onClick={() => this.props.onShowCreateFile()}
                    >
                      File
                    </Button>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </Col>
        </Row>
        <DragNDropContainers />
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  FoldersBarTopContainer
)
