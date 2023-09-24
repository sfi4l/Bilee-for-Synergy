import { useContext } from "react"
import Header from "../../Elements/Header"
import "./Menu.css"
import { ThemeContext } from "../../Themes"

const Menu = ({ children, title, subtitle, backButtonVisible }) => {
  const theme = useContext(ThemeContext)

  return (
    <div className="Menu" style={{
      "--title-color": theme.neutral,
      "--subtitle-color": theme.secondary_neutral
    }}>
      <Header backButtonVisible={backButtonVisible} />
      <p className="Title">{title}</p>
      {subtitle && <p className="Subtitle">{subtitle}</p>}
      {children}
    </div>
  )
}

export default Menu
