import { useTranslation } from "i18nano"
import Card from "../../../Primitives/Card/Card"
import Text from "../../../Primitives/Text/Text"
import TextCard from "../../../Primitives/TextCard/TextCard"
import "./ServiceCard.css"

const ServiceCard = ({ type, text }) => {
  const t = useTranslation()

  let highlightColor = "green",
    availability = t("menu.services.card.available"),
    color = "text_on_accent_color"

  if (type == 2) {
    highlightColor = "red"
    availability = t("menu.services.card.unavailable")
    color = "button_text_color"
  }
  if (type == 3) {
    highlightColor = "hint_background"
    availability = t("menu.services.card.draft")
    color = "button_text_color"
  }

  return (
    <Card className="ServiceCard" outlineColor="neutral">
      <Text size="16px" weight="600" width="50%">
        {text}
      </Text>
      <TextCard
        textColor={color}
        width={"76px"}
        height={"30px"}
        highlightColor={highlightColor}
      >
        <Text weight="600" size="12px">
          {availability}
        </Text>
      </TextCard>
    </Card>
  )
}

export default ServiceCard
