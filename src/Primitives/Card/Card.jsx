import { useContext } from "react"
import "./Card.css"
import { ThemeContext } from "../../Themes"

const Card = ({
  children,
  outlineColor,
  highlightColor,
  height,
  width,
  margin,
  className
}) => {
  const theme = useContext(ThemeContext)

  let styleOutlineColor = theme.accent_color
  if (outlineColor) styleOutlineColor = theme[outlineColor]
  let styleHighlightColor = "none"
  if (highlightColor) {
    styleHighlightColor = theme[highlightColor]
    if (!outlineColor) styleOutlineColor = styleHighlightColor
  }
  height = height ?? "auto"
  width = width ?? "100%"
  className = className && (" " + className) || ""
  margin = margin ?? "0" 

  return (
    <div
      className={"Card" + className}
      style={{
        "--outline-color": styleOutlineColor,
        "--highlight-color": styleHighlightColor,
        "--height": height,
        "--width": width,
        "--margin": margin
      }}
    >
      {children}
    </div>
  )
}

export default Card
