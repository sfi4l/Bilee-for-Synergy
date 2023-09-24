import { useContext } from "react"
import "./Card.css"
import { ThemeContext } from "../../Themes"

const Card = ({ children, outlineColor, highlightColor }) => {
  const theme = useContext(ThemeContext)
  const styleOutlineColor = theme[outlineColor]
  let styleHighlightColor = "none"
  if (highlightColor) styleHighlightColor = theme[highlightColor]

  return (
    <div
      className="Card"
      style={{
        "--outline-color": styleOutlineColor,
        "--highlight-color": styleHighlightColor
      }}
    >
      {children}
    </div>
  )
}

export default Card
