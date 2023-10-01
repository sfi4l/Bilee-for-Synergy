import "./EditCardPopup.css"
import Popup from "../../../Popup/Popup/Popup"
import TextInput from "../../../Primitives/TextInput/TextInput"
import Button from "../../../Primitives/Button/Button"

const EditCardPopup = ({ cardName, defaultValue, onSave, onCancel }) => {
  let value = defaultValue

  return <Popup title={`Изменить ${cardName}:`} titleMargin="0px 0px 27px 0px">
    <TextInput defaultValue={defaultValue} lines={6} onChange={text => value = text} />
    <Button highlightColor="accent_color" onClick={() => onSave(value)} margin="17px 0px 0px 0px">
      Сохранить
    </Button>
    <Button outlineColor="accent_color" onClick={onCancel} margin="8px 0px 0px 0px">
      Отмена
    </Button>
  </Popup>
}

export default EditCardPopup