//TODO: Rename this SigninForm
// Add the signin button
// Make it a presentational (function) componenent
// 3 function props onEmailChange, onPasswordChange, onSubmit
// 2 value props email and password
// Create a SigninContainer that will have a this.state.email and this.state.password value
// and functions handleEmailChange and handlePasswordChange that will do setState
// submitLogin that will do login fetch then stores token and do retrieveMe fetch then dispatch retrieveMeSuccess

import React from "react"
import { Form, FormGroup, Label, Input, NavLink } from "reactstrap"

export default class SignInEmail extends React.Component {
  render() {
    return (
      <Form
        style={{
          marginBottom: "40px",
          marginTop: "60px"
        }}
      >
        <FormGroup>
          <Label for="email">Email
          
           </Label>
          <Input type="email" name="email" id="IdEmail" placeholder="Email" style={{width:"80%"}}/>
        </FormGroup>
        <FormGroup>
          <Label style={{ marginTop: "30px" }} for="password">
            Password
          </Label>
          <NavLink
            style={{
              display: "inline",
              fontSize: "14px",
              fontWeight: "normal",
              fontStyle: "normal",
              fontStretch: "normal",
              lineHeight: "normal",
              letterSpacing: "normal",
              textAlign: "right",
              color: "#7a57d1",
              paddingLeft: "10px",
              width:"50%"

            }}
            href="#"
          >
            Forgot password?
          </NavLink>

          <Input
           style={{width:"80%"}}
            type="password"
            name="password"
            id="IdPassword"
            placeholder="Password"
          />
        </FormGroup>
      </Form>
    )
  }
}
