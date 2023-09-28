import "./Header.css"
import menuImg from "../../Img/Menu.svg"
import backImg from "../../Img/Back.png"
import ThemedIcon from "../../Primitives/ThemedIcon/ThemedIcon"
import Text from "../../Primitives/Text/Text"
import FlatButton from "../../Primitives/FlatButton/FlatButton"

const Header = ({ onBack, onMenu }) => {
  return (
    <div className="Header">
      {onBack && (
        <FlatButton icon={backImg} onClick={onBack} className="BackButton"/>
        )}
      <Text font="sfpdn" size="24px" color="logo_color">
        Bilee
      </Text>
      <FlatButton icon={menuImg} onClick={onMenu} className="MenuButton"/>
    </div>
  )
}

export default Header
