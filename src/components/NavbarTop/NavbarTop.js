//TODO: create navbar top with search bar, notification icon and profile.

import React from "react"
import { Row, Container, Col } from "reactstrap"
import NavbarTopNotif from "./NavbarTopNotif"
import NavbarTopSearch from "./NavbarTopSearch"
import NavbarTopProfile from "./NavbarTopProfile"

const NavbarTop = ({ notif, profile }) => (
  <Container
    style={{
      height: "90px",
      "background-color": "#ffffff",
      border: "solid 1px #E5E8F4"
    }}
  >
    <Row>
      <Col xs="8">
        <NavbarTopSearch />
      </Col>
      <NavbarTopNotif {...notif} />
      <NavbarTopProfile {...profile} />
    </Row>
  </Container>
)

export default NavbarTop
