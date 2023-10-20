import "./EditSpecialistPopup.css"
import Popup from "../../../Popup/Popup/Popup"
import Button from "../../../Primitives/Button/Button"
import PickerCard from "../../../Elements/PickerCard/PickerCard"
import { useTranslation } from "i18nano"
import { useState, useEffect } from "react"
import { useLocalStorage } from "../../../Hooks/useLocalStorage"

const EditSpecialistPopup = ({ onSave, onCancel }) => {
  const t = useTranslation();
  const [selectedValue, setSelectedValue] = useLocalStorage("selectedValue", 0); // Использование вашего хука
  const [selectedName, setSelectedName] = useLocalStorage("selectedName", "Выберите специалиста"); // Добавляем хранение имени
  const [tempValue, setTempValue] = useState(selectedValue); // Добавляем временное хранение значения

  const specialistNames = [
    selectedName, // Используем сохраненное имя
    "Николай К. • Мастер",
    "Демир Г. • Мастер",
    "Николай К. • Мастер",
    "Демир Г. • Мастер",
    "Николай К. • Мастер",
    "Демир Г. • Мастер"
  ];

  const handlePick = (value) => {
    setTempValue(value); // Сохраняем выбранное значение временно
  };

  const handleSave = () => {
    setSelectedValue(tempValue); // Сохраняем значение в localStorage при нажатии "Сохранить"
    setSelectedName(specialistNames[tempValue]); // Сохраняем имя соответствующего специалиста
    onSave(tempValue); // Вызываем onSave с выбранным значением
  };

  return (
    <Popup title={t("popup.specialist_edit.title")}>
      <PickerCard
        items={specialistNames}
        selected={tempValue}
        itemHeight={47}
        maxHeight={47 * 2.5}
        textProps={{
          align: "center"
        }}
        onPick={handlePick}
      />

      <Button
        highlightColor="accent_color"
        onClick={handleSave}
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

export default EditSpecialistPopup;