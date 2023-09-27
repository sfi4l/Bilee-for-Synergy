import Button from "../../Primitives/Button/Button"
import Text from "../../Primitives/Text/Text"
import Popup from "../Popup/Popup"

const ConfirmPopup = ({ onConfirm, onCancel }) => {
  return (
    <Popup>
      <Text size="24px" align="center" margin="40px 0px 47px 0px">
        Это точно та кнопка? Подтвердите действие “Удалить”
      </Text>

      <Button highlightColor="accent_color" onClick={onConfirm}>
        <Text>Подтвердить</Text>
      </Button>
      <Button outlineColor="accent_color" margin="8px 0px 0px 0px" onClick={onCancel}>
        <Text>Отмена</Text>
      </Button>
    </Popup>
  )
}

export default ConfirmPopup