import { useContext } from "react"
import "./Text.css"
import { ThemeContext } from "../../Themes"
import { motion } from "framer-motion"

const Text = ({
  children,
  font,
  size,
  weight,
  style,
  color,
  align,
  width,
  margin,
  motionKey,
  className
}) => {
  const theme = useContext(ThemeContext)
  if (color) color = theme[color]
  font = font ?? "sfpd"
  size = size ?? "16px"
  className = className && (" " + className) || ""
  align = align ?? "left"
  width = width ?? "auto"
  margin = margin ?? "0"

  return (
    <motion.div layout
      className={"Text" + className}
      style={{
        "--font-family": font,
        "--weight": weight,
        "--style": style,
        "--text-color": color,
        "--size": size,
        "--align": align,
        "--width": width,
        "--margin": margin
      }}
      key={motionKey}
      layoutId={motionKey}
    >
      {children}
    </motion.div>
  )
}

export default Text
