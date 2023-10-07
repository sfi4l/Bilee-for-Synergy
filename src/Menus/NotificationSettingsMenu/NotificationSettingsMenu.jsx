import Text from "../../Primitives/Text/Text"
import Button from "../../Primitives/Button/Button"
import SupportedMenu from "../SupportedMenu/SupportedMenu"
import { useState } from "react"
import { useTranslation } from "i18nano"

const NotificationSettingsMenu = () => {
  const t = useTranslation()
  const [buttonColors, setButtonColors] = useState([
    "green",
    "red",
    "red",
    "green",
    "green",
    "green",
    "green"
  ])

  const handle = (index) => {
    const newColors = [...buttonColors]
    newColors[index] = newColors[index] === "red" ? "green" : "red"
    setButtonColors(newColors)
  }

  return (
    <SupportedMenu title={t("menu.notification_settings.title")}>
      <Button
        outlineColor={buttonColors[0]}
        onClick={() => handle(0)}
        margin="21px 0px 0px 0px"
        height="60px"
      >
        <Text weight="400" size="24px">
        {t("menu.notification_settings.new_records")}
        </Text>
      </Button>
      <Button
        outlineColor={buttonColors[1]}
        onClick={() => handle(1)}
        margin="12px 0px 0px 0px"
        height="60px"
      >
        <Text weight="400" size="24px">
        {t("menu.notification_settings.max_occupancy")}
        </Text>
      </Button>
      <Button
        outlineColor={buttonColors[2]}
        onClick={() => handle(2)}
        margin="12px 0px 0px 0px"
        height="60px"
      >
        <Text weight="400" size="24px">
        {t("menu.notification_settings.limit_reaching")}
        </Text>
      </Button>
      <Button
        outlineColor={buttonColors[3]}
        onClick={() => handle(3)}
        margin="12px 0px 0px 0px"
        height="60px"
      >
        <Text weight="400" size="24px">
        {t("menu.notification_settings.work_day_start")}
        </Text>
      </Button>
      <Button
        outlineColor={buttonColors[4]}
        onClick={() => handle(4)}
        margin="12px 0px 0px 0px"
        height="60px"
      >
        <Text weight="400" size="24px">
        {t("menu.notification_settings.weekdays")}
        </Text>
      </Button>
      <Button
        outlineColor={buttonColors[5]}
        onClick={() => handle(5)}
        margin="12px 0px 0px 0px"
        height="60px"
      >
        <Text weight="400" size="24px">
        {t("menu.notification_settings.breaks")}
        </Text>
      </Button>
      <Button
        outlineColor={buttonColors[6]}
        onClick={() => handle(6)}
        margin="12px 0px 0px 0px"
        height="60px"
      >
        <Text weight="400" size="24px">
        {t("menu.notification_settings.misc")}
        </Text>
      </Button>
    </SupportedMenu>
  )
}

export default NotificationSettingsMenu
