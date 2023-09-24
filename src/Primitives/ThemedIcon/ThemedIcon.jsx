import "./ThemedIcon.css"
import { useContext } from "react"
import { ThemeContext } from "../../Themes"

const ThemedIcon = ({ icon }) => {
  const theme = useContext(ThemeContext)

  return (
    <img
      src={icon}
      className="ThemedIcon"
      alt=""
      style={{
        "--icon-filter": theme.icons_filter
      }}
    />
  )
}

export default ThemedIcon
