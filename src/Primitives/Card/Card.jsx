import { useContext } from "react"
import "./Card.css"
import { ThemeContext } from "../../Themes"

const Card = ({
  children,
  outlineColor,
  highlightColor,
  height,
  width,
  className
}) => {
  const theme = useContext(ThemeContext)

  let styleOutlineColor = theme.accent
  if (outlineColor) styleOutlineColor = theme[outlineColor]
  let styleHighlightColor = "none"
  if (highlightColor) {
    styleHighlightColor = theme[highlightColor]
    if (!outlineColor) styleOutlineColor = styleHighlightColor
  }
  height = height ?? "auto"
  width = width ?? "100%"
  className = " " + className ?? ""

  return (
    <div
      className={"Card" + className}
      style={{
        "--outline-color": styleOutlineColor,
        "--highlight-color": styleHighlightColor,
        "--height": height,
        "--width": width
      }}
    >
      {children}
    </div>
  )
}

export default Card
