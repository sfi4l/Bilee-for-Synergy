import "./MainMenu.css"
import Button from "../../Primitives/Button"
import Grid from "@react-css/grid"
import Menu from "../Menu"

const MainMenu = () => {
  return (
    <Menu title="Привет! Это Ваше меню">
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
              Заполненность <span className="ChangeClr">N%(-n) ↓</span>{" "}
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
          <Button outlineColor={"accent"} highlightColor={"accent"}>
            Карточка сотрудника
          </Button>
        </Grid.Item>
        <Grid.Item columnEnd="span 2">
          <Button outlineColor={"accent"}>Предприятие</Button>
        </Grid.Item>
        <Button outlineColor={"accent"}>Записи</Button>
        <Button outlineColor={"accent"}>Настройки</Button>
        <Button outlineColor={"accent"}>Услуги</Button>
        <Button outlineColor={"accent"}>Сотрудники</Button>
        <Grid.Item columnEnd="span 2">
          <Button outlineColor={"accent"} highlightColor={"accent"}>
            Подписка
          </Button>
        </Grid.Item>
      </Grid>
    </Menu>
  )
}
export default MainMenu
