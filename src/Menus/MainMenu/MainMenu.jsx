import "./MainMenu.css"
import Button from "../../Primitives/Button/Button"
import Grid from "@react-css/grid"
import Menu from "../Menu/Menu"
import { useNavigate } from "react-router-dom"
import { usePopup } from "../../Hooks/usePopup"
import ConfirmPopup from "../../Popup/ConfirmPopup/ConfirmPopup"
import Text from "../../Primitives/Text/Text"
import Color from "../../Primitives/Color/Color"

const MainMenu = () => {
  const navigate = useNavigate()
  const [displayPopup, exitPopup] = usePopup()

  return (
    <Menu title="Привет! Это Ваше меню" onBack={false}>
      <div className="MeetNews">
        <Text weight="400" color="hint_color" margin="30px 0px 10px 16px">
          Новости
        </Text>

        <div className="AllNews">
          <div className="BlueNews NewsCard">
            <Text>
              Мы <br />
              запусти
              <br />
              лись!
            </Text>
          </div>
          <div className="BrownNews NewsCard">
            <Text>Скидки</Text>
          </div>
          <div className="GreenNews NewsCard">
            <Text width="auto">Жопа</Text>
          </div>
          <div className="PinkNews NewsCard">
            <Text>
              Шок <br />
              контент
            </Text>
          </div>
        </div>

        <div className="TodayWork">
          <div className="Todotxt">
            <Text size="24px" align="center" margin="46px 0px 20px 20px">
              На сегодня у Вас N записей
            </Text>
            <Text weight="400" align="center" margin="8px 20px 0px 20px">
              Заполненность <Color color="red"> N% (-n) ↓</Color>
            </Text>
          </div>
        </div>
      </div>

      <Grid
        className="BtnCont"
        rows="repeat(5, 1fr)"
        columns="repeat(2, 1fr)"
        gap="9px"
      >
        <Grid.Item columnEnd="span 2">
          <Button
            highlightColor="accent_color"
            onClick={() => navigate("/employee")}
          >
            Карточка сотрудника
          </Button>
        </Grid.Item>

        <Grid.Item columnEnd="span 2">
          <Button onClick={() => navigate("/wtf")}>Предприятие</Button>
        </Grid.Item>

        <Button onClick={() => navigate("/records")}>Записи</Button>

        <Button onClick={() => navigate("/settings")}>Настройки</Button>

        <Button onClick={() => navigate("/notfoundservice")}>Услуги</Button>

        <Button>Сотрудники</Button>

        <Grid.Item columnEnd="span 2">
          <Button
            highlightColor="accent_color"
            onClick={() =>
              displayPopup(<ConfirmPopup onCancel={() => exitPopup()} />)
            }
          >
            Подписка
          </Button>
        </Grid.Item>
      </Grid>
    </Menu>
  )
}
export default MainMenu
