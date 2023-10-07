import { useContext } from "react"
import "./Card.css"
import { ThemeContext } from "../../Themes"
import { motion } from "framer-motion"

const Card = ({
  children,
  outlineColor,
  highlightColor,
  height,
  width,
  margin,
  transition,
  className,
  onClick,
  ref
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
  className = (className && " " + className) || ""
  margin = margin ?? "0"

  return (
    <motion.div
      layout
      ref={ref}
      className={"Card" + className}
      style={{
        margin: margin,
        border: outlineColor !== false ? "1px solid" : "none"
      }}
      initial={{
        height: height,
        width: width,
        borderColor: styleOutlineColor,
        "--highlight-color": styleHighlightColor
      }}
      animate={{
        height: height,
        width: width,
        borderColor: styleOutlineColor,
        "--highlight-color": styleHighlightColor
      }}
      transition={transition ?? { duration: 0.15, ease: "easeIn" }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}

export default Card
