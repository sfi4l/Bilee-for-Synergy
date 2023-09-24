import { useContext } from "react"
import "./Card.css"
import { ThemeContext } from "../../Themes"

const Card = ({ children, outlineColor, highlightColor, height }) => {
  const theme = useContext(ThemeContext)
  
  let styleOutlineColor = theme.accent
  let styleHighlightColor = "none"
  if (highlightColor) {
    styleHighlightColor = theme[highlightColor]
    if (!outlineColor) styleOutlineColor = styleHighlightColor
  }
  const styleHeight = height ?? "auto"

  return (
    <div
      className="Card"
      style={{
        "--outline-color": styleOutlineColor,
        "--highlight-color": styleHighlightColor,
        "--height": styleHeight
      }}
    >
      {children}
    </div>
  )
}

export default Card
