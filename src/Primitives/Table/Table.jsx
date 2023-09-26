import Grid from "@react-css/grid"
import Card from "../Card/Card"
import "./Table.css"
import React from "react"

const Table = ({children, rows, columns}) => {
  
  
  return (
    <Card outlineColor="neutral">
      <Grid rows={`repeat(${rows}, 1fr)`} columns={`repeat(${columns}, 1fr)`}>
        {React.Children.map(children, (child, i) => (
          <div className={
            "Cell"
            + ((i % columns == columns - 1) ? " NoRightBorder" : "")
            + ((i >= (rows - 1) * columns) ? " NoBottomBorder" : "")
          }>
            {child}
          </div>
        ))}
      </Grid>
    </Card>
  )
}

export default Table