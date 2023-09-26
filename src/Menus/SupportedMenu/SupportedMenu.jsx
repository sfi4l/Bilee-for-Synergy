import Text from "../../Primitives/Text/Text"
import Menu from "../Menu/Menu"
import "./SupportedMenu.css"

const SupportedMenu = ({ children, title, subtitle, onBack, onMenu, add }) => {
  return (
    <Menu
      title={title}
      subtitle={subtitle}
      onBack={onBack}
      onMenu={onMenu}
      add={add}
    >
      <div className="SupportContainer">
        <div className="InnerContainer">
          {children}
        </div>
        <Text
          align="center"
          size="12px"
          font="Inter"
          weight="400"
          className="SupportText"
        >
          Что-то не так? Нажмите на меня для связи с поддержкой
        </Text>
      </div>
    </Menu>
  )
}

export default SupportedMenu
