import "./ContentMenu.css"
import SupportedMenu from "../SupportedMenu/SupportedMenu"
import InfoCard from "../../Elements/InfoCard/InfoCard"
import ThemedIcon from "../../Primitives/ThemedIcon/ThemedIcon"
import edit_icon from "../../Img/edit_icon.png"
import Text from "../../Primitives/Text/Text"
import { useState } from "react"
import { usePopup } from "../../Hooks/usePopup"
import EditCardPopup from "./EditCardPopup/EditCardPopup"
import { useTranslation } from "i18nano"

const ContentMenu = () => {
  const t = useTranslation()
  const [greetingText, setGreetingText] = useState(
    "Добро пожаловать в нашего бота! Здесь вы можете записаться на услуги, выбрать то, это и всё"
  )
  const [helpText, setHelpText] = useState(
    "Добро пожаловать в нашего бота! Здесь вы можете записаться на услуги, выбрать то, это и всё"
  )
  const [nameText, setNameText] = useState("Салон красоты “Ангус”")
  const [displayPopup, exitPopup] = usePopup()

  return (
    <SupportedMenu title={t("menu.content.title")}>
      <div className="ContentCards">
        <InfoCard
          label={t("menu.content.greeting")}
          add={<ThemedIcon icon={edit_icon} />}
          labelMargin="13px"
          insideMargin="3px 16px 14px 16px"
          onClick={() =>
            displayPopup(
              <EditCardPopup
                cardName={t("menu.content.greeting_popup_name")}
                defaultValue={greetingText}
                onSave={(value) => {
                  setGreetingText(value)
                  exitPopup()
                }}
                onCancel={exitPopup}
              />
            )
          }
        >
          <Text
            lineHeight="130%"
            font="Inter"
            weight="400"
            color="hint_color"
            maxLines="2"
          >
            {greetingText}
          </Text>
        </InfoCard>

        <InfoCard
          label={t("menu.content.help")}
          add={<ThemedIcon icon={edit_icon} />}
          labelMargin="13px"
          insideMargin="3px 16px 14px 16px"
          onClick={() =>
            displayPopup(
              <EditCardPopup
                cardName={t("menu.content.help_popup_name")}
                defaultValue={helpText}
                onSave={(value) => {
                  setHelpText(value)
                  exitPopup()
                }}
                onCancel={exitPopup}
              />
            )
          }
        >
          <Text
            lineHeight="130%"
            font="Inter"
            weight="400"
            color="hint_color"
            maxLines="2"
          >
            {helpText}
          </Text>
        </InfoCard>

        <InfoCard
          label={t("menu.content.name")}
          add={<ThemedIcon icon={edit_icon} />}
          labelMargin="13px"
          insideMargin="3px 16px 14px 16px"
          onClick={() =>
            displayPopup(
              <EditCardPopup
                cardName={t("menu.content.name_popup_name")}
                defaultValue={nameText}
                onSave={(value) => {
                  setNameText(value)
                  exitPopup()
                }}
                onCancel={exitPopup}
              />
            )
          }
        >
          <Text
            lineHeight="130%"
            font="Inter"
            weight="400"
            color="hint_color"
            maxLines="2"
          >
            {nameText}
          </Text>
        </InfoCard>
      </div>
    </SupportedMenu>
  )
}

export default ContentMenu
