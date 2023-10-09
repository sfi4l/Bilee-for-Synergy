import "./NewsCard.css"
import Text from "../../../Primitives/Text/Text"

const NewsCard = ({ text, color, angle }) => {
  return (
    <div className="NewsCard" style={{
      "--angle": `${angle}deg`,
      "--color": color
    }}>
      <Text margin="0px 15px 0px 5px" height="57px" width="64px" className="NewsCardText">
        {text}
      </Text>
    </div>
  )
}

export default NewsCard