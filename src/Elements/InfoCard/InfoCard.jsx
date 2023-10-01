import Card from "../../Primitives/Card/Card"
import Text from "../../Primitives/Text/Text"
import "./InfoCard.css"

const InfoCard = ({
  label,
  labelMargin,
  title,
  add,
  insideMargin,
  outlineColor,
  onClick,
  children
}) => {
  return (
    <Card
      outlineColor={outlineColor ?? "neutral"}
      width="calc(100vw - 16px - 16px)"
      onClick={onClick}
    >
      <Text font="Inter" margin={`${labelMargin ?? "9px"} 16px 0px 16px`}>{label}</Text>

      {add && <div className="FloatingContainer">{add}</div>}

      {title && (
        <Text size="24px" margin="7px 0px 14px 16px">
          {title}
        </Text>
      )}

      {children && (
        <div
          style={{
            margin: insideMargin ?? "2px 16px 16px 16px"
          }}
          className="InsideContainer"
        >
          {children}
        </div>
      )}
    </Card>
  )
}

export default InfoCard
