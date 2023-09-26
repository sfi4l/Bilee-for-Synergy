import TextCard from "../TextCard/TextCard"
import "./Button.css"
import { motion } from "framer-motion"

const Button = ({
  children,
  outlineColor,
  highlightColor,
  textColor,
  onClick,
  height,
  margin,
  className
}) => {
  className = className && (" " + className) || ""
  
  return (
    <motion.button onClick={onClick} className={"Button" + className} style={{
      "--margin": margin
    }}>
      <TextCard
        outlineColor={outlineColor}
        highlightColor={highlightColor}
        textColor={textColor}
        height={height}
      >
        {children}
      </TextCard>
    </motion.button>
  )
}

export default Button
