import { useNavigate } from "react-router-dom"
import Header from "../../Elements/Header/Header"
import "./Menu.css"


const Menu = ({ children, title, subtitle, onBack, onMenu, add }) => {
  const navigate = useNavigate()
  onBack = onBack ?? (() => navigate(-1))
  onMenu = onMenu ?? (() => navigate("/"))

  return (
    <div className="Menu">
      <Header onBack={onBack} onMenu={onMenu} />

      {title && (
        <div className="TitleContainer">
          <p className="Title">{title}</p>
          {add}
        </div>
      )}

      {subtitle && <p className="Subtitle">{subtitle}</p>}

      {children}
    </div>
  )
}

export default Menu
