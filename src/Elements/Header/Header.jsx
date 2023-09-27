import "./Header.css"
import menuImg from "../../Img/Menu.svg"
import backImg from "../../Img/Back.png"
import ThemedIcon from "../../Primitives/ThemedIcon/ThemedIcon"
import Text from "../../Primitives/Text/Text"

const Header = ({ onBack, onMenu }) => {
  return (
    <div className="Header">
      {onBack && (
        <button className="HeaderButton BackButton" onClick={onBack}>
          <ThemedIcon icon={backImg} />
        </button>
      )}
      <Text font="sfpdn" size="24px" color="logo_color">
        Bilee
      </Text>
      <button className="HeaderButton MenuButton" onClick={onMenu}>
        <ThemedIcon icon={menuImg} />
      </button>
    </div>
  )
}

export default Header
