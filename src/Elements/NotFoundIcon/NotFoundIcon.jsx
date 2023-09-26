import Text from "../../Primitives/Text/Text"
import ThemedIcon from "../../Primitives/ThemedIcon/ThemedIcon"
import "./NotFoundIcon.css"
import Magnifier from "../../Img/nothing_found.png"

const NotFoundIcon = ({ title, margin }) => {
  return (
    <div className="NotFoundIcon" style={{
      "--margin": margin
    }}>
      <ThemedIcon icon={Magnifier} className="Magnifier" />

      <Text
        size="24px"
        weight="600"
        align="center"
        width="75%"
        className="MainText"
      >
        {title}
      </Text>
    </div>
  )
}

export default NotFoundIcon