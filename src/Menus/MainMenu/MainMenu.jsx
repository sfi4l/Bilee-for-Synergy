import "./MainMenu.css"
import Button from "../../Primitives/Button/Button"
import Grid from "@react-css/grid"
import Menu from "../Menu/Menu"
import { useNavigate } from "react-router-dom"
import { usePopup } from "../../Hooks/usePopup"
import ConfirmPopup from "../../Popup/ConfirmPopup/ConfirmPopup"
import Text from "../../Primitives/Text/Text"
import Color from "../../Primitives/Color/Color"
import { Translation, useTranslation } from "i18nano"

const MainMenu = () => {
  const t = useTranslation()
  const navigate = useNavigate()
  const [displayPopup, exitPopup] = usePopup()

  console.log()

  return (
    <Menu title={t("menu.main.title")} onBack={false}>
      <div className="MeetNews">
        <Text weight="400" color="hint_color" margin="30px 0px 10px 16px">
          {t("menu.main.news")}
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
            <Text size="24px" align="center" margin="46px 20px 0px 20px">
              {t("menu.main.today_records", {
                amount: "N"
              })}
            </Text>
            <Text weight="400" align="center" margin="8px 20px 0px 20px">
              {t("menu.main.occupancy")} <Color color="red"> N% (-n) ↓</Color>
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
            {t("menu.main.employee_card")}
          </Button>
        </Grid.Item>

        <Grid.Item columnEnd="span 2">
          <Button onClick={() => navigate("/wtf")}>{t("menu.main.company")}</Button>
        </Grid.Item>

        <Button onClick={() => navigate("/records")}>{t("menu.main.records")}</Button>

        <Button onClick={() => navigate("/settings")}>{t("menu.main.settings")}</Button>

        <Button onClick={() => navigate("/notfoundservice")}>{t("menu.main.services")}</Button>

        <Button>{t("menu.main.employees")}</Button>

        <Grid.Item columnEnd="span 2">
          <Button
            highlightColor="accent_color"
            onClick={() =>
              displayPopup(<ConfirmPopup onCancel={() => exitPopup()} />)
            }
          >
            {t("menu.main.subscription")}
          </Button>
        </Grid.Item>
      </Grid>
    </Menu>
  )
}
export default MainMenu
