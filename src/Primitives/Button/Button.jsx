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
  className,
  motionKey,
  style
}) => {
  className = (className && " " + className) || ""

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
      >
        {children}
      </TextCard>
    </motion.button>
  )
}

export default Button
