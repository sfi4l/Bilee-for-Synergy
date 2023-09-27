import { useNavigate } from "react-router-dom"
import Header from "../../Elements/Header/Header"
import "./Menu.css"
import Text from "../../Primitives/Text/Text"

const Menu = ({ children, title, subtitle, onBack, onMenu, add }) => {
  const navigate = useNavigate()
  onBack = onBack ?? (() => navigate(-1))
  onMenu = onMenu ?? (() => navigate("/"))

  return (
    <div className="Menu">
      <Header onBack={onBack} onMenu={onMenu} />

      {title && (
        <div className="TitleContainer">
          <Text font="sfpdn" size="24px">
            {title}
          </Text>
          {add}
        </div>
      )}

      {subtitle && (
        <Text color="hint_color" weight="400" margin="0px 0px 0px 16px">
          {subtitle}
        </Text>
      )}

      {children}
    </div>
  )
}

export default Menu
