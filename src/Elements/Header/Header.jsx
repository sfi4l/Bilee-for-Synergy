import "./Header.css"
import menuImg from "../../Img/Menu.svg"
import backImg from "../../Img/Back.png"
import ThemedIcon from "../../Primitives/ThemedIcon/ThemedIcon"

const Header = ({ backButtonVisible }) => {
  return (
    <div className="Header">
      {backButtonVisible && (
        <button className="HeaderButton BackButton">
          <ThemedIcon icon={backImg} />
        </button>
      )}
      <p className="LogoText">Bilee</p>
      <button className="HeaderButton MenuButton">
        <ThemedIcon icon={menuImg} />
      </button>
    </div>
  )
}

export default Header
