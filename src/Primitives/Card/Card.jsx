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
    <motion.div
      className={"Card" + className}
      animate={{
        "--outline-color": styleOutlineColor,
        "--highlight-color": styleHighlightColor,
        "--height": height,
        "--width": width,
        "--margin": margin
      }}
      transition={{ duration: 0.1, ease: "easeIn" }}
    >
      {children}
    </motion.div>
  )
}

export default Card
