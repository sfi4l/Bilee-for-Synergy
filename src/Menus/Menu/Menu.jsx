import { useContext } from "react"
import Header from "../../Elements/Header/Header"
import "./Menu.css"
import { ThemeContext } from "../../Themes"

const Menu = ({ children, title, subtitle, onBack, onMenu, add }) => {
  const theme = useContext(ThemeContext)

  return (
    <div className="Menu">
      <Header onBack={onBack} onMenu={onMenu} />

      <div className="TitleContainer">
        <p className="Title">{title}</p>
        {add}
      </div>

      {subtitle && <p className="Subtitle">{subtitle}</p>}

      {children}
    </div>
  )
}

export default Menu
