import "./EditSpecialistPopup.css"
import Popup from "../../../Popup/Popup/Popup"
import Button from "../../../Primitives/Button/Button"
import Text from "../../../Primitives/Text/Text"
import Card from "../../../Primitives/Card/Card"
import TextCard from "../../../Primitives/TextCard/TextCard"
import PickerCard from "../../../Elements/PickerCard/PickerCard"

const EditSpecialistPopup = ({ onSave, onCancel }) => {
  return (
    <Popup title="Изменить специалиста">
      <PickerCard
        items={[
          "Николай К. • Мастер",
          "Демир Г. • Мастер",
          "Николай К. • Мастер",
          "Демир Г. • Мастер",
          "Николай К. • Мастер",
          "Демир Г. • Мастер"
        ]}
        itemHeight={47}
        maxHeight={47 * 2.5}
        textProps={{
          align: "center"
        }}
        onPick={console.log}
      />

      <Button
        highlightColor="accent_color"
        onClick={onSave}
        margin="53px 0px 0px 0px"
      >
        Cохранить
      </Button>
      <Button
        outlineColor="accent_color"
        onClick={onCancel}
        margin="8px 0px 0px 0px"
      >
        Отмена
      </Button>
    </Popup>
  )
}

export default EditSpecialistPopup
