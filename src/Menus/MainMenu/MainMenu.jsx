import Grid from "@react-css/grid"
import { useTranslation, useTranslationChange } from "i18nano"
import { useState } from "react"
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom"
import { useFetch } from "../../Hooks/useFetch"
import { usePopup } from "../../Hooks/usePopup"
import ConfirmPopup from "../../Popup/ConfirmPopup/ConfirmPopup"
import Button from "../../Primitives/Button/Button"
import Color from "../../Primitives/Color/Color"
import Text from "../../Primitives/Text/Text"
import Menu from "../Menu/Menu"
import "./MainMenu.css"
import NewsCard from "./NewsCard/NewsCard"
import { AnimatePresence } from "framer-motion"

const MainMenu = () => {
  const t = useTranslation()
  const lang = useTranslationChange().lang
  const navigate = useNavigate()
  const [displayPopup, exitPopup] = usePopup()
  const [stories, setStories] = useState(undefined)

  useFetch(
    `/stories/${lang}`,
    async (get) => {
      if (stories) return
      const resp = await get()
      setStories(resp.data)
    },
    setStories
  )

  return (
    <Menu title={t("menu.main.title")} onBack={false}>
      <div className="MeetNews">
        <Text weight="400" color="hint_color" margin="30px 0px 10px 16px">
          {t("menu.main.news")}
        </Text>

        <div className="AllNews">
          <AnimatePresence>
            {stories === null && [0, 1, 2, 3].map(id => (<NewsCard key={id} placeholder />))}
            {stories?.map(({ id, title, url, bg_color, bg_angle }, i) => (
              <NewsCard
                key={i}
                text={title}
                color={bg_color}
                angle={bg_angle}
                url={url}
              />
            ))}
          </AnimatePresence>
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
          <Button onClick={() => navigate("/company")}>
            {t("menu.main.company")}
          </Button>
        </Grid.Item>

        <Button onClick={() => navigate("/records")}>
          {t("menu.main.records")}
        </Button>

        <Button onClick={() => navigate("/settings")}>
          {t("menu.main.settings")}
        </Button>

        <Button onClick={() => navigate("/notfoundservice")}>
          {t("menu.main.services")}
        </Button>

        <Button>{t("menu.main.employees")}</Button>

        <Grid.Item columnEnd="span 2">
          <Button
            highlightColor="accent_color"
            onClick={() =>
              displayPopup(
                <ConfirmPopup action="delete" onCancel={() => exitPopup()} />
              )
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
