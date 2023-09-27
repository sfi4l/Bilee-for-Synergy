import { useContext } from "react"
import { ThemeContext } from "../../Themes"

const Color = ({ children, color}) => {
  const theme = useContext(ThemeContext)

  return (
    <span style={{
      "color": theme[color]
    }} >
      {children}
    </span>
  )
}

export default Color