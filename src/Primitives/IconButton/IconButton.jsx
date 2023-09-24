import { Children } from "react"
import Button from "../Button/Button"
import IconText from "../IconText/IconText"

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
      <IconText icon={icon}>
        {children}
      </IconText>
    </Button>
  )
}

export default IconButton
