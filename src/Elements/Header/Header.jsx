import "./Header.css"
import menuImg from "../../Img/Menu.svg"
import backImg from "../../Img/Back.png"
import { useContext } from "react"
import { ThemeContext } from "../../Themes"

const Header = ({ backButtonVisible }) => {
  const theme = useContext(ThemeContext)
  
  return (
    <div className="Header" style={{
      "--icon-filter": theme.icons_filter
    }}>
      {backButtonVisible && (
        <button className="HeaderButton BackButton">
          <img src={backImg} alt="" />
        </button>
      )}
      <p className="LogoText">Bilee</p>
      <button className="HeaderButton MenuButton">
        <img src={menuImg} alt="" />
      </button>
    </div>
  )
}

export default Header
