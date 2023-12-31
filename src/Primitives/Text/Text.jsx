import { useContext } from "react"
import "./Text.css"
import { ThemeContext } from "../../Themes"
import { motion } from "framer-motion"

const Text = ({
  children,
  font,
  size,
  weight,
  lineHeight,
  maxLines,
  style,
  color,
  align,
  width,
  margin,
  motionKey,
  className
}) => {
  const theme = useContext(ThemeContext)
  color = color ? theme[color] : "var(--text-color)"
  className = className && (" " + className) || ""

  return (
    <motion.div layout
      className={"Text" + className}
      style={{
        "--font-family": font ?? "sfpd",
        "--weight": weight ?? "unset",
        "--style": style ?? "unset",
        "--size": size ?? "16px",
        "--align": align ?? "left",
        "--width": width ?? "auto",
        "--margin": margin ?? "0",
        "--line-height": lineHeight ?? "normal",
        "--max-lines": maxLines ?? "unset",
        overflow: maxLines ? "hidden" : "unset"
      }}
      initial={{
        color: color
      }}
      animate={{
        color: color
      }}
      key={motionKey}
      layoutId={motionKey}
    >
      {children}
    </motion.div>
  )
}

export default Text
