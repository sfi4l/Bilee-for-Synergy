import "./Header.css"
import menuImg from "../../Img/Menu.svg"
import backImg from "../../Img/Back.png"
import { useContext } from "react"
import { ThemeContext } from "../../Themes"

const Header = ({ backButtonVisible }) => {
  const theme = useContext(ThemeContext)
  console.log(theme.neutral)

  return (
    <div className="Header" style={{ "--logo": theme.logo }}>
      {backButtonVisible ? (
        <button className="HeaderButton BackButton">
          <img src={backImg} alt="" />
        </button>
      ) : (
        <></>
      )}
      <p className="LogoText">Bilee</p>
      <button className="HeaderButton MenuButton" onClick={() => alert(1)}>
        <img src={menuImg} alt="" />
      </button>
    </div>
  )
}

export default Header
