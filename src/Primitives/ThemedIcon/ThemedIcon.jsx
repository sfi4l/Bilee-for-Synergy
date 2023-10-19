import "./ThemedIcon.css"
import { useContext } from "react"
import { ThemeContext } from "../../Themes"
import { motion } from "framer-motion"
import { hexToCSSFilter } from "hex-to-css-filter"


const ThemedIcon = ({ icon, size, color, rotation, square, className, text }) => {
  const theme = useContext(ThemeContext)
  className = className && (" " + className) || ""
  size = size ?? "24px"
  color = theme[color ?? "text_color"]

  return (
    
      <motion.img
        src={icon}
        className={"ThemedIcon" + className}
        alt=""
        style={{
          "filter": hexToCSSFilter(color).filter.slice(0, -1),
          width: size,
          height: square ? size : "auto"
        }}
        animate={{
          rotate: rotation
        }}
      />
     

  )
}

export default ThemedIcon
