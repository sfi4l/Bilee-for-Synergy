import { useTranslation } from "i18nano"
import Text from "../../Primitives/Text/Text"
import Menu from "../Menu/Menu"
import "./SupportedMenu.css"

const SupportedMenu = ({ children, title, subtitle, onBack, onMenu, add }) => {
  const t = useTranslation()
  
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
          {t("support.click_me")}
        </Text>
      </div>
    </Menu>
  )
}

export default SupportedMenu
