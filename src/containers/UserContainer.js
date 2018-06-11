//TODO: container for user
import React, { Component } from "react"
import { connect } from "react-redux"
import NavbarTopProfile from "../components/NavbarTop/NavbarTopProfile"
import { connectUserSuccessAction } from "../actions/userAction"

//Map the prop articles to the state's user branch
const userStateToProps = state => ({
  profile: state.user
}) //state.user 'user' it is the name into combineReducers

const userDispatchToProps = dispatch => ({
  userIsConnected: response => dispatch(connectUserSuccessAction(response))
})

class UserConnected extends Component {
  render() {
    return <NavbarTopProfile profile={this.props.profile} />
  }
}

export default connect(userStateToProps, userDispatchToProps)(UserConnected)