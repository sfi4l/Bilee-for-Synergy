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

const EmployeeMenu = () => {
  return (
    <Menu title="Николай, Ваша карточка:">
      <Grid
        rows="repeat(2, 1fr)"
        columns="repeat(2, 1fr)"
        gap="12px"
        className="ButtonContainer"
      >
        <Button highlightColor="green" textColor="text_color">
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
          ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map(el => (
            <TextCard className="DayCard" outlineColor="neutral">
              <Text font="Inter" weight="400">
                {el}
              </Text>
            </TextCard>
          )))()}
      </Grid>
    </Menu>
  )
}

export default EmployeeMenu
