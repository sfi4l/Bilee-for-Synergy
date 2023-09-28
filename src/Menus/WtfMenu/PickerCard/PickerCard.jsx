import { useContext, useState } from "react"
import Card from "../../../Primitives/Card/Card"
import "./PickerCard.css"
import Text from "../../../Primitives/Text/Text"
import ThemedIcon from "../../../Primitives/ThemedIcon/ThemedIcon"
import expand_icon from "../../../Img/expand_icon.png"
import Button from "../../../Primitives/Button/Button"
import { ThemeContext } from "../../../Themes"

const PickerCard = ({ items, onPick, margin }) => {
  const theme = useContext(ThemeContext)

  const [expanded, setExpanded] = useState(false)
  const [order, setOrder] = useState(
    items.map((el, i) => ({
      text: el,
      id: i
    }))
  )

  const pick = (ni) => {
    setExpanded(false)
    setOrder([
      {
        text: items[ni],
        id: ni
      },
      ...items.slice(0, ni).map((el, i) => ({
        text: el,
        id: i
      })),
      ...items.slice(ni + 1, items.length).map((el, i) => ({
        text: el,
        id: i + ni + 1
      }))
    ])
    onPick(ni)
  }

  return (
    <Card
      margin={margin}
      outlineColor="neutral"
      height={expanded ? `calc(38px * ${items.length} + 1px)` : "37px"}
    >
      <Button
        outlineColor={false}
        height="37px"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="PickerCard">
          <Text>{order[0].text}</Text>
          <ThemedIcon
            size="24px"
            icon={expand_icon}
            rotation={expanded ? 180 : 0}
          />
        </div>
      </Button>
      {expanded &&
        order.slice(1).map(({ text, id }, i) => (
          <Button
            outlineColor={false}
            height="37px"
            onClick={() => pick(id)}
            style={{
              "border-top": `1px solid ${theme.neutral}`
            }}
          >
            <div className="PickerCard">
              <Text>{text}</Text>
            </div>
          </Button>
        ))}
    </Card>
  )
}

export default PickerCard
