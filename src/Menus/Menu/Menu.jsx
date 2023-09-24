import { useContext } from "react"
import Header from "../../Elements/Header/Header"
import "./Menu.css"
import { ThemeContext } from "../../Themes"

const Menu = ({ children, title, subtitle, backButtonVisible }) => {
  const theme = useContext(ThemeContext)

  return (
    <div className="Menu">
      <Header backButtonVisible={backButtonVisible} />
      <p className="Title">{title}</p>
      {subtitle && <p className="Subtitle">{subtitle}</p>}
      {children}
    </div>
  )
}

export default Menu
