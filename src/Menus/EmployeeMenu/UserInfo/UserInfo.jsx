import Text from "../../../Primitives/Text/Text"
import TextCard from "../../../Primitives/TextCard/TextCard"
import "./UserInfo.css"

const UserInfo = ({ avatar }) => {
  return (
    <div className="UserInfo">
      <img src={avatar} className="Avatar" />

      <div className="UserText">
        <Text>
          Каламанди Николай
        </Text>
        <Text weight="400" margin="3px 0px 0px 0px">
          Барбер с 23 июня 2023
        </Text>

        <div className="UserReviewInfo">
          <TextCard height="29px" width="auto" highlightColor="accent_color">
            <Text weight="400">
              5.0 ★
            </Text>
          </TextCard>

          <Text weight="400" color="hint_color">
            0 отзывов
          </Text>
        </div>
      </div>
    </div>
  )
}

export default UserInfo