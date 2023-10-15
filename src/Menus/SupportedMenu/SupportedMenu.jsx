import { useTranslation } from "i18nano"
import Text from "../../Primitives/Text/Text"
import Menu from "../Menu/Menu"
import "./SupportedMenu.css"
import { motion } from "framer-motion"

const SupportedMenu = ({ children, title, subtitle, onBack, onMenu, add, props }) => {
  const t = useTranslation()
  
  return (
    <Menu
      title={title}
      subtitle={subtitle}
      onBack={onBack}
      onMenu={onMenu}
      add={add}
      props={props}
    >
      <motion.div layout className="SupportContainer">
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
      </motion.div>
    </Menu>
  )
}

export default SupportedMenu
