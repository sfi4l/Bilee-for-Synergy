import ThemedIcon from "../../Primitives/ThemedIcon/ThemedIcon"
import "./NotFoundMenu.css"
import Text from "../../Primitives/Text/Text"
import Button from "../../Primitives/Button/Button"
import SupportedMenu from "../SupportedMenu/SupportedMenu"
import NotFoundIcon from "../../Elements/NotFoundIcon/NotFoundIcon"
import { useNavigate } from "react-router-dom"

const NotFoundMenu = ({ title, onClick }) => {
  const navigate = useNavigate()
  onClick = onClick ?? (() => navigate("/filter"))

  return (
    <SupportedMenu>
      <NotFoundIcon title={title} margin="63px 0px 57px 0px" />

      <Button highlightColor="accent_color" onClick={onClick} className="AddButton">
        Добавить
      </Button>
    </SupportedMenu>
  )
}

export default NotFoundMenu
