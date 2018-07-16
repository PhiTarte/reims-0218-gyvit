import React from "react"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Container,
  Row
} from "reactstrap"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import "./styles-page-dashboard/dashboardCard.css"
const DashboardCard = ({ id, image, titre, bio, buttonText, link }) => {
  return (
    <div>
      <Container>
        <Row>
          <Card className="card-home">
            <CardImg
              className="card-img-home"
              src={process.env.PUBLIC_URL + image}
              alt="folder"
            />
            <CardBody d-flex flex-column>
              <CardTitle className="card-title ">{titre}</CardTitle>
              <CardText className="card-text">{bio}</CardText>
              <Button className=" btn btn-secondary">
                <NavLink
                  className="navlink-button"
                  to={link}
                  activeClassName="selected"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                >
                  {buttonText}
                </NavLink>
              </Button>
            </CardBody>
          </Card>
        </Row>
      </Container>
    </div>
  )
}

DashboardCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  titre: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default DashboardCard
