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

const DashboardCard = ({ contenu }) => {
  const { titre, bio, buttonText, link } = { ...contenu }
  return (
    <div>
      <Container>
        <Row>
          <Card
            style={{
              width: "288px",
              height: "423px",
              marginRight: "32px"
            }}
          >
            <CardImg
              src={process.env.PUBLIC_URL + "img/folder.ico"}
              alt="folder"
              style={{
                width: "151.2px",
                height: "120px",
                marginTop: "31px",
                marginLeft: "72px",
                marginRight: "64.8px"
              }}
            />
            <CardBody
              style={{
                padding: "0px"
              }}
            >
              <CardTitle
                style={{
                  width: "175px",
                  height: "24px",
                  fontSize: "18px",
                  textAlign: "center",
                  paddingLeft: "0px",
                  paddingRight: "0px",
                  marginTop: "15px",
                  marginLeft: "57px",
                  marginRight: "56px"
                }}
              >
                {titre}
              </CardTitle>
              <CardText
                style={{
                  width: "228px",
                  height: "96px",
                  fontSize: "15px",
                  opacity: 0.45,
                  textAlign: "center",
                  marginTop: "13px",
                  marginLeft: "30px",
                  marginRight: "30px",
                  marginBottom: "50px",
                  lineHeight: "24px"
                }}
              >
                {bio}
              </CardText>
              <Button
                style={{
                  width: "170px",
                  height: "44px",
                  fontSize: "16px",
                  borderRadius: "2px",
                  marginRight: "59px",
                  marginLeft: "59px ",
                  marginBottom: "30px",
                  padding: "0px"
                }}
                src={link}
              >
                {buttonText}
              </Button>
            </CardBody>
          </Card>
        </Row>
      </Container>
    </div>
  )
}
export default DashboardCard
