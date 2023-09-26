import { Children } from "react"
import Button from "../Button/Button"
import Iconify from "../Iconify/Iconify"

const IconButton = ({
  children,
  icon,
  outlineColor,
  highlightColor,
  textColor,
  onClick,
  height,
  iconSize,
  margin,
  className
}) => {
  return (
    <Button
      outlineColor={outlineColor}
      highlightColor={highlightColor}
      textColor={textColor}
      onClick={onClick}
      height={height}
      className={className}
      margin={margin}
    >
      <Iconify icon={icon} size={iconSize}>
        {children}
      </Iconify>
    </Button>
  )
}

export default IconButton
