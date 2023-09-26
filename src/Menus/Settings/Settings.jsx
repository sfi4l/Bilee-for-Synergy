
import Button from "../../Primitives/Button/Button"
import SupportedMenu from "../SupportedMenu/SupportedMenu"
import "./Settings.css"
import { useNavigate } from "react-router-dom"

const Settings = () => {
  const navigate = useNavigate()
  return (
    <SupportedMenu title="Настройки">
      <Button outlineColor={"accent_color"} onClick={() => navigate("/notfoundfilial")} margin="40px 0px 0px 0px">Филиалы</Button>
      <Button outlineColor={"accent_color"} margin="7px 0px 0px 0px">Категории</Button>
      <Button outlineColor={"accent_color"} margin="7px 0px 0px 0px">Контент</Button>
      <Button outlineColor={"accent_color"} onClick={() => navigate("/settings/notification")}margin="7px 0px 0px 0px">Уведомления</Button>
      <Button outlineColor={"accent_color"} margin="7px 0px 0px 0px">Логирование</Button>
    </SupportedMenu>
  )
}

export default Settings