import { useTranslation } from "i18nano"
import Card from "../../Primitives/Card/Card"
import Text from "../../Primitives/Text/Text"
import { useNavigate } from "react-router-dom"

const LogCard = ({ id, title, subtitle, margin }) => {
  const t = useTranslation()
  const navigate = useNavigate()

  return (
    <Card
      className="LogCard"
      outlineColor="neutral"
      margin={margin}
    >
        <Text size="12px" weight="600" margin="19px 0px 0px 17px" maxLines={1}>
          {title}
        </Text>
        <Text
          size="12px"
          weight="400"
          color="hint_color"
          margin="8px 0px 10px 17px"
        >
          {subtitle}
        </Text>
    </Card>
  )
}

export default LogCard