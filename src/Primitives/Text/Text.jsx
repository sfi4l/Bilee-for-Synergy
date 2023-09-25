import { useContext } from "react"
import "./Text.css"
import { ThemeContext } from "../../Themes"

const Text = ({
  children,
  font,
  size,
  weight,
  style,
  color,
  align,
  className
}) => {
  const theme = useContext(ThemeContext)
  if (color) color = theme[color]
  font = font ?? "sfpd"
  size = size ?? "16px"
  className = " " + className ?? ""
  align = align ?? "left"

  return (
    <div
      className={"Text" + className}
      style={{
        "--font-family": font,
        "--weight": weight,
        "--style": style,
        "--text-color": color,
        "--size": size,
        "--align": align
      }}
    >
      {children}
    </div>
  )
}

export default Text
