import React from "react"

const PathElement = ({ name }) => {
<<<<<<< HEAD
=======
  console.log(process.env.PUBLIC_URL.concat("Icons/icon_arrow_right.png"))
>>>>>>> displayPathWell
  return (
    <a>
      <img
        style={{ width: "0.2em", margin: "0.4em" }}
        src={process.env.PUBLIC_URL.concat("Icons/icon_arrow_right.png")}
        alt="icon right arrow"
      />
      {`  ${name} `}
    </a>
  )
}

export default PathElement
