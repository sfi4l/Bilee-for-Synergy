import "./ContentMenu.css"
import SupportedMenu from "../SupportedMenu/SupportedMenu"
import InfoCard from "../../Elements/InfoCard/InfoCard"
import ThemedIcon from "../../Primitives/ThemedIcon/ThemedIcon"
import edit_icon from "../../Img/edit_icon.png"
import Text from "../../Primitives/Text/Text"
import { useState } from "react"
import { usePopup } from "../../Hooks/usePopup"
import EditCardPopup from "./EditCardPopup/EditCardPopup"

const ContentMenu = () => {
  const [welcomeText, setWelcomeText] = useState(
    "Добро пожаловать в нашего бота! Здесь вы можете записаться на услуги, выбрать то, это и всё"
  )
  const [helpText, setHelpText] = useState(
    "Добро пожаловать в нашего бота! Здесь вы можете записаться на услуги, выбрать то, это и всё"
  )
  const [nameText, setNameText] = useState("Салон красоты “Ангус”")
  const [displayPopup, exitPopup] = usePopup()

  return (
    <SupportedMenu title="Контент">
      <div className="ContentCards">
        <InfoCard
          label="Приветствие"
          add={<ThemedIcon icon={edit_icon} />}
          labelMargin="13px"
          insideMargin="3px 16px 14px 16px"
          onClick={() =>
            displayPopup(
              <EditCardPopup
                cardName="приветствие"
                defaultValue={welcomeText}
                onSave={(value) => {
                  setWelcomeText(value)
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
            {welcomeText}
          </Text>
        </InfoCard>

        <InfoCard
          label="Раздел “Помощь”"
          add={<ThemedIcon icon={edit_icon} />}
          labelMargin="13px"
          insideMargin="3px 16px 14px 16px"
          onClick={() =>
            displayPopup(
              <EditCardPopup
                cardName="помощь"
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
          label="Название"
          add={<ThemedIcon icon={edit_icon} />}
          labelMargin="13px"
          insideMargin="3px 16px 14px 16px"
          onClick={() =>
            displayPopup(
              <EditCardPopup
                cardName="название"
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
