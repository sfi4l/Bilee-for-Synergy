import { useContext, useRef, useState } from "react"
import Card from "../../Primitives/Card/Card"
import "./PickerCard.css"
import Text from "../../Primitives/Text/Text"
import ThemedIcon from "../../Primitives/ThemedIcon/ThemedIcon"
import expand_icon from "../../Img/expand_icon.png"
import Button from "../../Primitives/Button/Button"
import { ThemeContext } from "../../Themes"
import { motion, AnimatePresence } from "framer-motion"

const PickerCard = ({
  items,
  onPick,
  itemHeight,
  maxHeight,
  textProps,
  margin
}) => {
  const theme = useContext(ThemeContext)
  itemHeight = itemHeight ?? 37
  const cardHeight = (itemHeight + 1) * items.length + 2

  const [expanded, setExpanded] = useState(false)
  const [order, setOrder] = useState(
    items.map((el, i) => ({
      text: el,
      id: i
    }))
  )

  const scrollRef = useRef(null)

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
    <div className="PickerCardContainer" style={{ height: itemHeight, margin }}>
      <div
        className="ExpandIconContainer"
        style={{
          height: `${itemHeight}px`
        }}
      >
        <ThemedIcon
          size="24px"
          square
          icon={expand_icon}
          rotation={expanded ? 180 : 0}
        />
      </div>
      <Card
        outlineColor="neutral"
        height={
          expanded
            ? `${maxHeight ? Math.min(maxHeight, cardHeight) : cardHeight}px`
            : `${itemHeight + 1}px`
        }
        className={"PickerCard" + (expanded ? " PickerCardExpanded" : "")}
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            layoutScroll
            className="PickerItemsContainer"
            style={
              expanded
                ? {
                    overflowY: "auto"
                  }
                : null
            }
          >
            {order.map(({ text, id }, i) => (
              <Button
                key={id}
                outlineColor={false}
                height={itemHeight}
                onClick={i != 0 ? () => pick(id) : () => setExpanded(!expanded)}
                style={
                  i != 0
                    ? {
                        borderTop: `1px solid ${theme.hint_background}`
                      }
                    : null
                }
              >
                <div className="PickerItem">
                  <Text
                    width="100%"
                    margin="0px 0px 0px 9px"
                    {...textProps}
                    motionKey={`item${id}`}
                  >
                    {text}
                  </Text>
                </div>
              </Button>
            ))}
          </motion.div>
        </AnimatePresence>
      </Card>
    </div>
  )
}

export default PickerCard
