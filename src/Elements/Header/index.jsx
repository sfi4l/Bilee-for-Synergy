import "./Header.css"
import menuImg from "../../Img/Menu.svg"
import backImg from "../../Img/Back.png"
import { useContext } from "react"
import { ThemeContext } from "../../Themes"

const Header = ({ backButtonVisible }) => {
  return (
    <div className="Header">
      {backButtonVisible && (
        <button className="HeaderButton BackButton">
          <img src={backImg} alt="" />
        </button>
      )}
      <p className="LogoText">Bilee</p>
      <button className="HeaderButton MenuButton" onClick={() => alert(1)}>
        <img src={menuImg} alt="" />
      </button>
    </div>
  )
}

export default Header
