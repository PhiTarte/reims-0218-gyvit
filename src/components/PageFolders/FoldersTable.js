import React from "react"
import { Table } from "reactstrap"
import PropTypes from "prop-types"
import FoldersTableTbody from "./FoldersTableTbody"
import FoldersTableCategory from "./FoldersTableCategory"
import { Scrollbars } from "react-custom-scrollbars"
const FoldersTable = ({
  files = [],
  dirs = [],
  parent = {},
  onDirclick,
  onBackclick,
  onSortNameAscClick,
  onSortDateAscClick
}) => (
  <div>
    <Scrollbars
      style={{
        padding: "15px",
        width: "100%",
        height: "65vh"
      }}
    >
      <Table borderless striped>
        <thead>
          <tr>
            <th onClick={() => onSortNameAscClick()}>
              <FoldersTableCategory name="Name  " direction={null} />
            </th>
            <th onClick={() => onSortDateAscClick()}>
              <FoldersTableCategory name="Last update  " direction={null} />
            </th>
            <th>
              <FoldersTableCategory name="Users  " direction={"asc"} />
            </th>
            <th />
          </tr>
        </thead>
        <FoldersTableTbody
          onDirclick={onDirclick}
          onBackclick={onBackclick}
          files={files}
          parent={parent}
          dirs={dirs}
        />
      </Table>
    </Scrollbars>
  </div>
)

FoldersTable.propTypes = {
  files: PropTypes.array,
  dir: PropTypes.array
}

export default FoldersTable
