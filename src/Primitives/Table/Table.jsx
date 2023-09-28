import Grid from "@react-css/grid"
import Card from "../Card/Card"
import "./Table.css"
import React, { useContext } from "react"
import { ThemeContext } from "../../Themes"

const Table = ({
  children,
  rows,
  className,
  colWidth,
  rowHeight,
  margin,
  outlineColor,
  verticalColor,
  horizontalColor,
  cellPadding,
  columns
}) => {
  const theme = useContext(ThemeContext)
  colWidth = colWidth ?? "1fr"
  rowHeight = rowHeight ?? "40px"
  outlineColor = outlineColor ?? "neutral"
  if (horizontalColor != false) horizontalColor = theme[horizontalColor ?? "neutral"]
  if (verticalColor != false) verticalColor = theme[verticalColor ?? "neutral"]

  return (
    <Card
      outlineColor={outlineColor}
      className={"Table" + (className ? ` ${className}` : "")}
      margin={margin}
    >
      <Grid
        rows={`repeat(${rows}, ${rowHeight})`}
        columns={`repeat(${columns}, ${colWidth})`}
        className="TableGrid"
      >
        {React.Children.map(children, (child, i) => (
          <div
            className={
              "Cell" +
              (i % columns == columns - 1 ? " NoRightBorder" : "") +
              (i >= (rows - 1) * columns ? " NoBottomBorder" : "")
            }
            style={{
              "borderBottom": (horizontalColor != false) ? `1px solid ${horizontalColor}` : "none",
              "borderRight": (verticalColor != false) ? `1px solid ${verticalColor}` : "none",
              "padding": cellPadding ?? "10px"
            }}
          >
            {child}
          </div>
        ))}
      </Grid>
    </Card>
  )
}

export default Table
