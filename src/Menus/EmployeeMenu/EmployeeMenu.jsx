import Menu from "../Menu/Menu"
import "./EmployeeMenu.css"
import group_icon from "../../Img/group_icon.png"
import clock_icon from "../../Img/clock_icon.png"
import location_icon from "../../Img/location_icon.png"
import avatar from "../../Img/avatar.png"
import Grid from "@react-css/grid"
import Button from "../../Primitives/Button/Button"
import IconButton from "../../Primitives/IconButton/IconButton"
import Text from "../../Primitives/Text/Text"
import TextCard from "../../Primitives/TextCard/TextCard"
import { useNavigate } from "react-router-dom"

const EmployeeMenu = () => {
  const navigate = useNavigate()

  const mockedDayData = [
    {
      text: "",
      type: 1
    },
    {
      text: "",
      type: 1
    },
    {
      text: "1",
      type: 1
    },
    {
      text: "2",
      type: 1
    },
    {
      text: "3",
      type: 3
    },
    {
      text: "4",
      type: 4
    },
    {
      text: "5",
      type: 5
    },
    {
      text: "6",
      type: 5
    },
    {
      text: "7",
      type: 4
    },
    {
      text: "8",
      type: 4
    },
    {
      text: "9",
      type: 5
    },
    {
      text: "10",
      type: 5
    },
    {
      text: "11",
      type: 4
    },
    {
      text: "12",
      type: 4
    }
  ]

  return (
    <Menu title="Николай, Ваша карточка:">
      <Grid
        rows="repeat(2, 1fr)"
        columns="repeat(2, 1fr)"
        gap="12px"
        className="ButtonContainer"
      >
        <Button highlightColor="green" textColor="text_on_accent_color" onClick={() => navigate("/notfound")}>
          <Text font="Inter" weight="600">
            Запись доступна
          </Text>
        </Button>
        <IconButton icon={group_icon}>
          <Text font="Inter" weight="600">
            Без лимита
          </Text>
        </IconButton>
        <IconButton icon={location_icon}>
          <Text font="Inter" weight="600">
            Пушкина, 1
          </Text>
        </IconButton>
        <IconButton icon={clock_icon}>
          <Text font="Inter" weight="600">
            08:00-21:00
          </Text>
        </IconButton>
      </Grid>

      <Grid
        rows="repeat(3, 1fr)"
        columns="repeat(7, 1fr)"
        rowGap="6px"
        columnGap="8px"
        className="DaysContainer"
      >
        {(() =>
          ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((el) => (
            <TextCard className="DayCard" outlineColor="neutral">
              <Text font="Inter" weight="400">
                {el}
              </Text>
            </TextCard>
          )))()}
        {(() =>
          mockedDayData.map(({ text, type }) => {
            let props = {
              outlineColor: "hint_color",
              textColor: "hint_color"
            }

            switch (type) {
              case 3:
                props = {
                  highlightColor: "accent_color"
                }
                break
              
              case 4:
                props = {
                  outlineColor: "accent_color"
                }
                break
              
              case 5:
                props = {
                  outlineColor: "neutral"
                }
                break
            }

            return (
              <TextCard className="DayCard" {...props}>
                <Text font="Inter" weight="400">
                  {text}
                </Text>
              </TextCard>
            )
          }))()}
      </Grid>
    </Menu>
  )
}

export default EmployeeMenu
