import { useContext } from "react"
import Card from "../Card/Card"
import "./TextCard.css"
import { ThemeContext } from "../../Themes"

const TextCard = ({
  children,
  outlineColor,
  highlightColor,
  textColor,
  height
}) => {
  const theme = useContext(ThemeContext)
  height = height ?? "44px"

  let styleTextColor = theme.button_text_color
  if (!textColor) {
    if (!highlightColor) styleTextColor = theme.text_color
  } else styleTextColor = theme[textColor]

  return (
    <Card
      outlineColor={outlineColor}
      highlightColor={highlightColor}
      height={height}
    >
      <div
        className="TextCard"
        style={{
          "--text-color": styleTextColor
        }}
      >
        {children}
      </div>
    </Card>
  )
}

export default TextCard
