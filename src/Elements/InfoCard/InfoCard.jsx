import Card from "../../Primitives/Card/Card"
import Text from "../../Primitives/Text/Text"
import "./InfoCard.css"

const InfoCard = ({ label, title, add, children }) => {
  return (
    <Card outlineColor="neutral">
      <Text margin="9px 0px 0px 16px">{label}</Text>

      {add && (
        <div className="FloatingContainer">
          {add}
        </div>
      )}

      {title && (
        <Text size="24px" margin="7px 0px 14px 16px">
          {title}
        </Text>
      )}

      {children && <div className="InsideInfo">{children}</div>}
    </Card>
  )
}

export default InfoCard
