//TODO: create component search bar
// 2 props: search a afficher dans value de l'input
//          onSearchType a appelé sur l'évenement onchange de l'input
// faire un SearchContainer, qui stockera dans son state, un search
import React from "react"
import {
  FormGroup,
  Input,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  DropdownToggle
} from "reactstrap"

//function to split with search criteria
const Highlight = (text, search) => {
  const highlightSuggestion = text.toLowerCase().split(search.toLowerCase())
  return highlightSuggestion
}

const NavbarTopSearch = ({
  _id,
  onDirclick,
  searchResults,
  search,
  onSearchType
}) => (
  <div>
    <FormGroup>
      <Input
        class="typeahead form-control"
        style={{
          marginTop: "22px",
          marginLeft: "6px",
          height: "46px",
          backgroundColor: "#fbfcfd",
          borderRadius: "2px",
          border: "none"
        }}
        type="search"
        id="exampleSearch"
        placeholder="Search..."
        onChange={onSearchType}
        searchResults={searchResults}
        value={search}
      />

      <Dropdown isOpen={search}>
        <DropdownMenu
          style={{
            transform: "none",
            marginLeft: "5px",
            width: "100%"
          }}
        >
          <DropdownToggle style={{ visibility: "hidden" }} />
          {search !== "" &&
            searchResults.map(searchResult => {
              // transform a string to display in several spans
              const searchResultString = Highlight(searchResult.name, search)
              return (
                <DropdownItem
                  onClick={() => onDirclick(searchResult._id)}
                  toggle={false}
                  key={searchResult.value}
                  value={searchResult.value}
                  {...searchResult}
                >
                  <span>{searchResultString[0]}</span>
                  <span style={{ color: "red" }}>{search}</span>
                  <span>{searchResultString[1]}</span>
                </DropdownItem>
              )
            })}
        </DropdownMenu>
      </Dropdown>
    </FormGroup>
  </div>
)

export default NavbarTopSearch
