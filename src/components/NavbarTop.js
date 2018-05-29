//TODO: create navbar top with search bar, notification icon and profile.

import React from "react"
import { Nav } from "reactstrap"

import NavbarTopNotif from "./NavbarTopNotif"
import NavbarTopSearch from "./NavbarTopSearch"
import NavbarTopProfile from "./NavbarTopProfile"

const NavbarTop = () => (
  <Nav className="row">
    <NavbarTopSearch />
    <NavbarTopNotif />
    <NavbarTopProfile />
  </Nav>
)

export default NavbarTop
