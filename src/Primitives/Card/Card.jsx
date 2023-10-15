import { useContext } from "react"
import "./Card.css"
import { ThemeContext } from "../../Themes"
import { motion } from "framer-motion"

const Card = ({
  children,
  outlineColor,
  highlightColor,
  hoverColor,
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
  let styleHighlightColor = theme.bg_color
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
        backgroundColor: styleHighlightColor
      }}
      animate={{
        height: height,
        width: width,
        borderColor: styleOutlineColor,
        backgroundColor: styleHighlightColor
      }}
      whileHover={!hoverColor ? undefined : {
        backgroundColor: hoverColor,
        transition: {
          duration: 0.1
        }
      }}
      transition={transition ?? { duration: 0.12, ease: "easeIn" }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}

export default Card
