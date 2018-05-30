//TODO: test : component Profile

import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import NavbarTopProfile from "./NavbarTopProfile"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<NavbarTopProfile />, div)
  ReactDOM.unmountComponentAtNode(div)
})

const profile = { firstname: "", lastname: "", business: "" }

it("renders correctly", () => {
  const tree = renderer.create(<NavbarTopProfile />).toJSON()
  expect(tree).toMatchSnapshot()
})
