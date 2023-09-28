import TextCard from "../TextCard/TextCard"
import "./Button.css"

const Button = ({
  children,
  outlineColor,
  highlightColor,
  textColor,
  onClick,
  height,
  margin,
  className,
  style
}) => {
  className = className && (" " + className) || ""
  
  return (
    <button onClick={onClick} className={"Button" + className} style={{
      "margin": margin,
      ...style
    }}>
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
