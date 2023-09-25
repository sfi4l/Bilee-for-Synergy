import TextCard from "../TextCard/TextCard"
import "./Button.css"

const Button = ({
  children,
  outlineColor,
  highlightColor,
  textColor,
  onClick,
  height,
  className
}) => {
  className = " " + className ?? ""
  
  return (
    <button onClick={onClick} className={"Button" + className}>
      <TextCard
        outlineColor={outlineColor}
        highlightColor={highlightColor}
        textColor={textColor}
        height={height}
      >
        {children}
      </TextCard>
    </button>
  )
}

export default Button
