// TODO create navbar

import React from "react"
import { NavLink } from "reactstrap"
import NavbarLeftLogo from "./NavbarLeftLogo"

const Link = ({ icon, nameLink }) => (
  <div>
    <NavLink
      href="#"
      style={{
        color: "white",
        opacity: 0.5
      }}
    >
      <img
        alt=""
        src={icon}
        style={{
          opacity: 0.8,
          paddingRight: 10
        }}
      />

      {nameLink}
    </NavLink>
    <hr />
  </div>
)

export default Link
