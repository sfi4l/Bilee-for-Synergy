import "./ThemedIcon.css"
import { useContext } from "react"
import { ThemeContext } from "../../Themes"

const ThemedIcon = ({ icon, className }) => {
  const theme = useContext(ThemeContext)
  className = className && (" " + className) || ""

  return (
    <img
      src={icon}
      className={"ThemedIcon" + className}
      alt=""
      style={{
        "--icon-filter": theme.icons_filter
      }}
    />
  )
}

export default ThemedIcon
