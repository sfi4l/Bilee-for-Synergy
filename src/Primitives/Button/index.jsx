import { useContext } from "react"
import { ThemeContext } from "../../Themes"
import Card from "../Card"
import "./Button.css"

const Button = ({
  children,
  outlineColor,
  highlightColor,
  textColor,
  onClick,
  height
}) => {
  const theme = useContext(ThemeContext)
  height = height ?? "44px"

  let styleTextColor = theme.anti_neutral
  if (!textColor) {
    if (!highlightColor) styleTextColor = theme.neutral
  } else styleTextColor = theme[textColor]

  return (
    <Card outlineColor={outlineColor} highlightColor={highlightColor}>
      <button
        onClick={onClick}
        className="Button"
        style={{
          "--height": height,
          "--text-color": styleTextColor
        }}
      >
        {children}
      </button>
    </Card>
  )
}

export default Button
