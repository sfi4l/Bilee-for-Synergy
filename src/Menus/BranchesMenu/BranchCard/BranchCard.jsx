import { useTranslation } from "i18nano"
import Card from "../../../Primitives/Card/Card"
import "./BranchCard.css"
import Text from "../../../Primitives/Text/Text"
import TextCard from "../../../Primitives/TextCard/TextCard"
import { useNavigate } from "react-router-dom"

const BranchCard = ({ id, title, subtitle, type }) => {
  const t = useTranslation()
  const navigate = useNavigate()

  let highlightColor = "green",
    availability = t("menu.branches.card.available"),
    color = "text_on_accent_color"

  if (type == 2) {
    highlightColor = "red"
    availability = t("menu.branches.card.unavailable")
    color = "button_text_color"
  }
  // if (type == 3) {
  //   highlightColor = "hint_background"
  //   availability = t("menu.branches.card.draft")
  //   color = "button_text_color"
  // }

  return (
    <Card
      className="BranchCard"
      outlineColor="neutral"
    >
      <div>
        <Text size="16px" weight="600" maxLines={1}>
          {title}
        </Text>
        <Text
          size="12px"
          weight="400"
          color="hint_color"
          margin="6px 0px 0px 0px"
        >
          {subtitle}
        </Text>
      </div>
      <TextCard
        textColor={color}
        width="76px"
        height="30px"
        highlightColor={highlightColor}
      >
        <Text weight="600" size="12px">
          {availability}
        </Text>
      </TextCard>
    </Card>
  )
}

export default BranchCard
