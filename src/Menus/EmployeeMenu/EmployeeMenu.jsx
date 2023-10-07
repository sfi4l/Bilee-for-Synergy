import "./EmployeeMenu.css"
import SupportedMenu from "../SupportedMenu/SupportedMenu"
import group_icon from "../../Img/group_icon.png"
import clock_icon from "../../Img/clock_icon.png"
import location_icon from "../../Img/location_icon.png"
import avatar from "../../Img/avatar.png"
import Grid from "@react-css/grid"
import Button from "../../Primitives/Button/Button"
import IconButton from "../../Primitives/IconButton/IconButton"
import Text from "../../Primitives/Text/Text"
import TextCard from "../../Primitives/TextCard/TextCard"
import UserInfo from "./UserInfo/UserInfo"
import Table from "../../Primitives/Table/Table"
import UserServices from "./UserServices/UserServices"
import { useTranslation } from "i18nano"

const EmployeeMenu = () => {
  const t = useTranslation()

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
    <SupportedMenu title="Николай, Ваша карточка:">
      <UserInfo avatar={avatar} />

      <Grid
        rows="repeat(2, 1fr)"
        columns="repeat(2, 1fr)"
        gap="12px"
        className="ButtonContainer"
      >
        <Button highlightColor="green" textColor="text_on_accent_color">
          <Text font="Inter" weight="600">
            {t("menu.employee.record_available")}
          </Text>
        </Button>
        <IconButton icon={group_icon}>
          <Text font="Inter" weight="600">
            {t("menu.employee.no_limit")}
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
            return (
              <TextCard className="DayCard" {...colorsForType(type)}>
                <Text font="Inter" weight="400">
                  {text}
                </Text>
              </TextCard>
            )
          }))()}
      </Grid>

      <Text font="Inter" margin="36px 0px 15px 0px">
        {t("menu.employee.statistics")}
      </Text>

      <Table rows={4} columns={2}>
        <Text weight="400" font="Inter" size="12px">
          {t("menu.employee.total_records")}
        </Text>
        <Text weight="400" font="Inter" size="12px">
          10 324
        </Text>
        <Text weight="400" font="Inter" size="12px">
          {t("menu.employee.unique_clients")}
        </Text>
        <Text weight="400" font="Inter" size="12px">
          573
        </Text>
        <Text weight="400" font="Inter" size="12px">
          {t("menu.employee.average_bill")}
        </Text>
        <Text weight="400" font="Inter" size="12px">
          3 194 RUR
        </Text>
        <Text weight="400" font="Inter" size="12px">
          {t("menu.employee.total_revenue")}
        </Text>
        <Text weight="400" font="Inter" size="12px">
          549 124 RUR
        </Text>
      </Table>

      <Text font="Inter" margin="27px 0px 15px 0px">
        {t("menu.employee.your_services")}
      </Text>

      <UserServices
        names={[
          "Стрижка, мужская",
          "Стрижка, женская",
          "Стрижка, детская",
          "Стрижка, машинкой"
        ]}
      />
    </SupportedMenu>
  )
}

export default EmployeeMenu

const colorsForType = (type) => {
  switch (type) {
    case 3:
      return {
        highlightColor: "accent_color"
      }

    case 4:
      return {
        outlineColor: "accent_color"
      }

    case 5:
      return {
        outlineColor: "neutral"
      }

    default:
      return {
        outlineColor: "hint_color",
        textColor: "hint_color"
      }
  }
}
