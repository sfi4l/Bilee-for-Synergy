import Card from "../../../Primitives/Card/Card"
import Text from "../../../Primitives/Text/Text"
import TextCard from "../../../Primitives/TextCard/TextCard"
import "./ServiceCard.css"

const ServiceCard = ({ margin, type, mainText }) => {
  let highlightColor, color, text
  if (type == 1) {
    highlightColor = "green"
    text = "Доступно"
    color = "neutral"
  } else if (type == 2) {
    highlightColor = "red"
    text = "Недоступно"
    color = "button_text_color"
  } else if (type == 3) {
    highlightColor = "hint_color"
    text = "Черновик"
    color = "button_text_color"
  }
  return (
    <Card margin={margin} className="ServiceCard" outlineColor={"neutral"}>
      <Text className="TextInCard" size="16px" weight="600" width={"50%"}>
        {mainText}
      </Text>
      <TextCard
        textColor={color}
        width={"76px"}
        height={"30px"}
        highlightColor={highlightColor}
      >
        <Text weight="600" size="12px">
          {text}
        </Text>
      </TextCard>
    </Card>
  )
}

export default ServiceCard
