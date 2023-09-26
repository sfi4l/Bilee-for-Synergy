import { useContext } from "react"
import Card from "../Card/Card"
import "./TextCard.css"
import { ThemeContext } from "../../Themes"
import { motion } from "framer-motion"

const TextCard = ({
  children,
  outlineColor,
  highlightColor,
  textColor,
  height,
  width,
  margin,
  className
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
      width={width}
      className={className}
      margin={margin}
    >
      <motion.div
        className="TextCard"
        style={{
          "--text-color": styleTextColor
        }}
      >
        {children}
      </motion.div>
    </Card>
  )
}

export default TextCard
