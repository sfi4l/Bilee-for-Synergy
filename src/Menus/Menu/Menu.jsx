import { useNavigate } from "react-router-dom"
import Header from "../../Elements/Header/Header"
import "./Menu.css"
import Text from "../../Primitives/Text/Text"
import { useShowPopup, useWebApp } from "@vkruglikov/react-telegram-web-app"

const Menu = ({ children, title, subtitle, onBack, onMenu, add, padding }) => {
  const navigate = useNavigate()
  const main = useWebApp().MainButton
  onBack = onBack ?? (() => {
    navigate(-1)
    main.show()
    main.setText(`${main.text}-1`)
  })
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

      <div style={{ margin: padding }}>{children}</div>
    </div>
  )
}

export default Menu
