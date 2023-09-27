import Card from "../../../Primitives/Card/Card"
import Text from "../../../Primitives/Text/Text"
import TextCard from "../../../Primitives/TextCard/TextCard"
import "./ServiceCard.css"

const ServiceCard = ({ margin, type, text }) => {
  let highlightColor = "green",
    availability = "Доступно",
    color = "text_on_accent_color"
  if (type == 2) {
    highlightColor = "red"
    availability = "Недоступно"
    color = "button_text_color"
  }
  if (type == 3) {
    highlightColor = "hint_color"
    availability = "Черновик"
    color = "button_text_color"
  }
  return (
    <Card margin={margin} className="ServiceCard" outlineColor={"neutral"}>
      <Text className="TextInCard" size="16px" weight="600" width={"50%"}>
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
