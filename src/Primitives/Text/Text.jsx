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
  width,
  margin,
  className
}) => {
  const theme = useContext(ThemeContext)
  if (color) color = theme[color]
  font = font ?? "sfpd"
  size = size ?? "16px"
  className = className && (" " + className) || ""
  align = align ?? "left"
  width = width ?? "auto"
  margin = margin ?? "0"

  return (
    <div
      className={"Text" + className}
      style={{
        "--font-family": font,
        "--weight": weight,
        "--style": style,
        "--text-color": color,
        "--size": size,
        "--align": align,
        "--width": width,
        "--margin": margin
      }}
    >
      {children}
    </div>
  )
}

export default Text
