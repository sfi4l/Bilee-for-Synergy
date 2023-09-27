import "./MainMenu.css"
import Button from "../../Primitives/Button/Button"
import Grid from "@react-css/grid"
import Menu from "../Menu/Menu"
import { useNavigate } from "react-router-dom"
import { usePopup } from "../../Hooks/usePopup"
import ConfirmPopup from "../../Popup/ConfirmPopup/ConfirmPopup"

const MainMenu = () => {
  const navigate = useNavigate()
  const [displayPopup, exitPopup] = usePopup()

  return (
    <Menu title="Привет! Это Ваше меню" onBack={false}>
      <div className="MeetNews">
        <p className="NewsTxt">Новости</p>

        <div className="AllNews">
          <div className="BlueNews NewsCard">
            <p className="NewsFont">
              Мы <br />
              запусти
              <br />
              лись!
            </p>
          </div>
          <div className="BrownNews NewsCard">
            <p className="NewsFont">Скидки</p>
          </div>
          <div className="GreenNews NewsCard">
            <p className="NewsFont">Жопа</p>
          </div>
          <div className="PinkNews NewsCard">
            <p className="NewsFont">
              Шок <br />
              контент
            </p>
          </div>
        </div>

        <div className="TodayWork">
          <div className="Todotxt">
            <p className="Todotxt1">На сегодня у Вас N записей</p>
            <p className="Todotxt2">
              Заполненность <span className="ChangeClr"> N% (-n) ↓</span>
            </p>
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
          <Button>Предприятие</Button>
        </Grid.Item>

        <Button
          onClick={() =>
            displayPopup(<ConfirmPopup onCancel={() => exitPopup()} />)
          }
        >
          Записи
        </Button>

        <Button onClick={() => navigate("/settings")}>Настройки</Button>

        <Button onClick={() => navigate("/notfoundservice")}>Услуги</Button>

        <Button>Сотрудники</Button>

        <Grid.Item columnEnd="span 2">
          <Button highlightColor="accent_color">Подписка</Button>
        </Grid.Item>
      </Grid>
    </Menu>
  )
}
export default MainMenu
