import React from "react"
import {
  FormGroup,
  Input,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  DropdownToggle
} from "reactstrap"
import "./styles-navbar-top/navbarTopSearch.css"
//function to split with search criteria
const highlight = (text, search) => {
  const highlightSuggestion = text.toLowerCase().split(search.toLowerCase())
  return highlightSuggestion
}

const NavbarTopSearch = ({
  _id,
  onDirclick,
  results,
  search,
  onSearchType
}) => (
  <div>
    <FormGroup>
      <Input
        className="search-bar typeahead form-control"
        type="text"
        id="exampleSearch"
        placeholder="Search..."
        onChange={onSearchType}
        value={search}
        style={{
          marginTop: "22px",
          marginLeft: "6px",
          height: "46px",
          backgroundColor: "#fbfcfd",
          borderRadius: "2px",
          border: "none"
        }}
      />

      <Dropdown isOpen={search ? true : false} toggle={() => {}}>
        <DropdownMenu
          style={{
            transform: "none",
            marginLeft: "5px",
            width: "100%"
          }}
          className="search-dropdown"
        >
          <DropdownToggle style={{ visibility: "hidden" }} />
          {search !== "" &&
            results.map((result, index) => {
              // transform a string to display in several spans
              const resultString = highlight(result.name, search)
              return (
                <DropdownItem
                  onClick={() => onDirclick(result._id)}
                  key={index}
                >
                  <span>{resultString[0]}</span>
                  <span style={{ color: "red" }}>{search}</span>
                  <span>{resultString[1]}</span>
                </DropdownItem>
              )
            })}
        </DropdownMenu>
      </Dropdown>
    </FormGroup>
  </div>
)

export default NavbarTopSearch
