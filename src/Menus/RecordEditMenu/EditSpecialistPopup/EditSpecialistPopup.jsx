import "./EditSpecialistPopup.css"
import Popup from "../../../Popup/Popup/Popup"
import Button from "../../../Primitives/Button/Button"
import PickerCard from "../../../Elements/PickerCard/PickerCard"
import { useTranslation } from "i18nano"

const EditSpecialistPopup = ({ onSave, onCancel }) => {
  const t = useTranslation()

  return (
    <Popup title={t("popup.specialist_edit.title")}>
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
        {t("popup.specialist_edit.save")}
      </Button>
      <Button
        outlineColor="accent_color"
        onClick={onCancel}
        margin="8px 0px 0px 0px"
      >
        {t("popup.specialist_edit.cancel")}
      </Button>
    </Popup>
  )
}

export default EditSpecialistPopup
