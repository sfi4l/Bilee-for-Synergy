import Button from "../../Primitives/Button/Button"
import Text from "../../Primitives/Text/Text"
import TextInput from "../../Primitives/TextInput/TextInput"
import Popup from "../Popup/Popup"

const ConfirmPopup = ({ onConfirm, onCancel }) => {
  return (
    <Popup title="Это точно та кнопка? Подтвердите действие “Удалить”" titleMargin="40px 0px 0px 0px">
      <TextInput lines={6} margin="47px 0px 16px 0px"/>

      <Button highlightColor="accent_color" onClick={onConfirm}>
        Подтвердить
      </Button>
      <Button outlineColor="accent_color" margin="8px 0px 0px 0px" onClick={onCancel}>
        Отмена
      </Button>
    </Popup>
  )
}

export default ConfirmPopup