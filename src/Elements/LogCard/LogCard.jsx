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
        <Text size="12px" weight="600" margin="19px 17px 0px 17px">
          {title}
        </Text>
        <Text
          size="12px"
          weight="400"
          color="hint_color"
          margin="8px 17px 15px 17px"
        >
          {subtitle}
        </Text>
    </Card>
  )
}

export default LogCard