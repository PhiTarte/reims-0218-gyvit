import React from "react"
import { Col } from "reactstrap"
import { NavLink } from "react-router-dom"

const NavbarLeftLogo = () => {
  return (
    <div
      className="d-flex align-items-center"
      style={{
        color: "white",
        fontWeight: "bold",
        height: "90px",
        marginBottom: "0px",
        textAlign: "center",
        backgroundColor: "#181048",
        fontSize: "20px"
      }}
    >
      <Col>
        <NavLink style={{ color: "white" }} to="/Home">
          GYVIT
        </NavLink>
      </Col>
    </div>
  )
}

export default NavbarLeftLogo
