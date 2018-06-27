import React, { Component } from "react"
import { connect } from "react-redux"
import NavbarTopSearch from "../components/NavbarTop/NavbarTopSearch"
import { listAllDir } from "../api/directorys/listAllDirectorys"
import { makeShowModalError } from "../actions/errorsActions"
import { makeListAllDirs } from "../actions/foldersActions"
// PR 1
// resultSearch reducer handling listAllDirs action
// mapStateToProps connect options to resultSearch reducer

const mapStateToProps = state => ({
  options: state.resultSearch
})

// PR 2
// on dir click retrieve dir

// PR3
// highlight letters

const mapDispatchToProps = dispatch => ({
  onFilesSearch: response => dispatch(makeListAllDirs(response)),
  onError: message => dispatch(makeShowModalError(message))
})

export class NavbarTopFilter extends Component {
  constructor(props) {
    super(props)
    this.state = { search: "" }
    this.onSearchType = this.onSearchType.bind(this)
  }
  onSearchType(event) {
    this.setState({ search: event.target.value })
    const value = event.target.value
    listAllDir(value)
      .then(response => this.props.onFilesSearch(response))
      .catch(response => this.props.onError(response.message))
  }

  render() {
    return (
      <div>
        <NavbarTopSearch
          onSearchType={this.onSearchType}
          search={this.state.search}
          options={this.props.options}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarTopFilter)
