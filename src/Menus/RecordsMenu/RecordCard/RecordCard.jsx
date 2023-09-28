import "./RecordCard.css"
import InfoCard from "../../../Elements/InfoCard/InfoCard"
import Text from "../../../Primitives/Text/Text"
import Iconify from "../../../Primitives/Iconify/Iconify"
import manager_icon from "../../../Img/manager_icon.png"
import location_icon from "../../../Img/location_icon.png"
import TextCard from "../../../Primitives/TextCard/TextCard"

const RecordCard = ({ name, cost, type, person, address, date }) => {
  return (
    <InfoCard
      label={name}
      labelMargin="15px"
      add={
        <Text
          color={type == 0 ? "green" : "text_color"}
          margin="4px 5px 0px 0px"
        >
          {cost}
        </Text>
      }
      insideMargin="0px 16px 12px 16px"
      outlineColor={type == 0 ? "neutral" : "accent_color"}
    >
      <div className="RecordInfo">
        <Iconify size="15px" icon={manager_icon} color="hint_color" gap="5px">
          <Text size="12px" weight="400" color="hint_color">
            {person}
          </Text>
        </Iconify>
        <Iconify size="15px" icon={location_icon} color="hint_color" gap="5px">
          <Text size="12px" weight="400" color="hint_color">
            {address}
          </Text>
        </Iconify>
      </div>

      <Text size="12px" weight="400">
        {date}
      </Text>

      <TextCard height="27px" width="95px" className="RecordStatus">
        <Text weight="400">
          {type == 0 ? "Выполнено" : "Создано"}
        </Text>
      </TextCard>
    </InfoCard>
  )
}

export default RecordCard
