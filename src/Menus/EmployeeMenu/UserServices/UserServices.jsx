import Text from "../../../Primitives/Text/Text"
import TextCard from "../../../Primitives/TextCard/TextCard"
import "./UserServices.css"

const UserServices = ({ names }) => {
  return (
    <div className="UserServices">
      {names.map(name => (
        <TextCard key={name} highlightColor="accent_color" height="23px" width="auto">
          <Text font="Inter" size="12px" weight="400">
            {name}
          </Text>
        </TextCard>
      ))}
    </div>
  )
}

export default UserServices