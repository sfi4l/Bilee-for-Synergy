import { Children } from "react"
import Button from "../Button"
import "./IconButton.css"

const IconButton = ({
  children,
  icon,
  outlineColor,
  highlightColor,
  textColor,
  onClick,
  height
}) => {
  return (
    <Button
      outlineColor={outlineColor}
      highlightColor={highlightColor}
      textColor={textColor}
      onClick={onClick}
      height={height}
    >
      <img src={icon} />
      {children}
    </Button>
  )
}

export default IconButton
