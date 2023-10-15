import "./Header.css"
import menuImg from "../../Img/Menu.svg"
import backImg from "../../Img/Back.png"
import ThemedIcon from "../../Primitives/ThemedIcon/ThemedIcon"
import Text from "../../Primitives/Text/Text"
import FlatButton from "../../Primitives/FlatButton/FlatButton"
import { useWebApp } from "@vkruglikov/react-telegram-web-app"
import { useEffect } from "react"
import { IN_TELEGRAM } from "../../App"

const Header = ({ onBack, onMenu }) => {
  const backButton = useWebApp().BackButton

  useEffect(() => {
    if (!onBack) {
      backButton.hide()
      return
    }
    backButton.onClick(onBack)
    backButton.show()

    return () => backButton.offClick(onBack)
  }, [backButton])

  return (
    <div className="Header">
      {/* {onBack && (
        <FlatButton icon={backImg} onClick={onBack} className="BackButton"/>
        )} */}
      <Text font="sfpdn" size="24px" color="logo_color">
        Bilee
      </Text>
      {/* <FlatButton icon={menuImg} onClick={onMenu} className="MenuButton"/> */}
    </div>
  )
}

export default Header
