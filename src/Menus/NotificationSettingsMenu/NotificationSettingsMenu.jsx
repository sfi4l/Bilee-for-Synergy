import Text from "../../Primitives/Text/Text"
import Button from "../../Primitives/Button/Button"
import SupportedMenu from "../SupportedMenu/SupportedMenu"
import { useState } from "react"
import { useTranslation } from "i18nano"

const NotificationSettingsMenu = () => {
  const t = useTranslation()
  const [buttons, setButtons] = useState([
    {
      active: true,
      translation: "new_records"
    },
    {
      active: false,
      translation: "max_occupancy"
    },
    {
      active: false,
      translation: "limit_reaching"
    },
    {
      active: true,
      translation: "work_day_start"
    },
    {
      active: true,
      translation: "weekdays"
    },
    {
      active: true,
      translation: "breaks"
    },
    {
      active: true,
      translation: "misc"
    }
  ])

  const handle = (index) => {
    const newColors = [...buttons]
    newColors[index].active = !newColors[index].active
    setButtons(newColors)
  }

  return (
    <SupportedMenu title={t("menu.notification_settings.title")}>
      {buttons.map(({ active, translation }, i) => (
        <Button
          key={i}
          outlineColor={active ? undefined : "red"}
          highlightColor={active ? "green" : undefined}
          onClick={() => handle(i)}
          margin="21px 0px 0px 0px"
          height="60px"
        >
          <Text weight="400" size="24px" color={active ? "text_on_accent_color" : "text_color"}>
            {t(`menu.notification_settings.${translation}`)}
          </Text>
        </Button>
      ))}
    </SupportedMenu>
  )
}

export default NotificationSettingsMenu
