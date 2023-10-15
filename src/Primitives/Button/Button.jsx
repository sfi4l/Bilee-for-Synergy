import { useContext } from "react"
import TextCard from "../TextCard/TextCard"
import "./Button.css"
import { motion } from "framer-motion"
import { ThemeContext } from "../../Themes"

const Button = ({
  children,
  outlineColor,
  highlightColor,
  hoverColor,
  textColor,
  onClick,
  height,
  margin,
  className,
  motionKey,
  style
}) => {
  const theme = useContext(ThemeContext)
  className = (className && " " + className) || ""

  let styleHoverColor
  if (hoverColor !== false) {
    styleHoverColor = theme.hover_color
    if (highlightColor === "accent_color") styleHoverColor = theme.accent_hover_color
    if (hoverColor && hoverColor !== true) styleHoverColor = hoverColor
  }

  return (
    <motion.button
      layout
      layoutId={motionKey}
      key={motionKey}
      onClick={onClick}
      className={"Button" + className}
      style={{
        margin: margin,
        ...style
      }}
    >
      <TextCard
        outlineColor={outlineColor}
        highlightColor={highlightColor}
        textColor={textColor}
        height={height}
        hoverColor={styleHoverColor}
      >
        {children}
      </TextCard>
    </motion.button>
  )
}

export default Button
