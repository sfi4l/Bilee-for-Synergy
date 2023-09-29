import "./EditVisitDayPopup.css"
import Popup from "../../../Popup/Popup/Popup"
import Button from "../../../Primitives/Button/Button"
import Text from "../../../Primitives/Text/Text"

const EditVisitDayPopup = ({
  date,
  time,
  duration,
  onDateChange,
  onTimeChange,
  onSave,
  onCancel
}) => {
  return (
    <Popup title="Изменить дату визита">
      <input type="date"/>
      <input type="time"/>
      <Text weight="400" align="center" margin="15px 0px 0px 0px">
        Длительность услуги: {duration}
      </Text>

      <Button highlightColor="accent_color" onClick={onSave} margin="53px 0px 0px 0px">
        Cохранить
      </Button>
      <Button outlineColor="accent_color" onClick={onCancel} margin="8px 0px 0px 0px">
        Отмена
      </Button>
    </Popup>
  )
}

export default EditVisitDayPopup
