import { useContext } from "react"
import "./Text.css"
import { ThemeContext } from "../../Themes"

const Text = ({ children, font, size, weight, style, color }) => {
  const theme = useContext(ThemeContext)
  if (color) color = theme[color]
  font = font ?? "sfpd"
  size = size ?? "16px"

  return (
    <div className="Text" style={{
      "--font-family": font, 
      "--weight": weight,
      "--style": style,
      "--text-color": color,
      "--size": size
    }}>
      {children}
    </div>
  )
}

export default Text