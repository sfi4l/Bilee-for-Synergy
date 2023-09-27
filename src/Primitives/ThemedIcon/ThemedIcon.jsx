import "./ThemedIcon.css"
import { useContext } from "react"
import { ThemeContext } from "../../Themes"
import { motion } from "framer-motion"

const ThemedIcon = ({ icon, size, rotation, className }) => {
  const theme = useContext(ThemeContext)
  className = className && (" " + className) || ""
  size = size ?? "auto"

  return (
    <motion.img
      src={icon}
      className={"ThemedIcon" + className}
      alt=""
      style={{
        "filter": theme.icons_filter,
        "width": size
      }}
      animate={{
        rotate: rotation
      }}
    />
  )
}

export default ThemedIcon
