import "./EditVisitDayPopup.css"
import Popup from "../../../Popup/Popup/Popup"
import Button from "../../../Primitives/Button/Button"
import Text from "../../../Primitives/Text/Text"
import Card from "../../../Primitives/Card/Card"
import { useState } from "react"
import TextCard from "../../../Primitives/TextCard/TextCard"
import { useTranslation } from "i18nano"

const EditVisitDayPopup = ({
  initialDate,
  initialTime,
  duration,
  onDateChange,
  onTimeChange,
  onSave,
  onCancel
}) => {
  const t = useTranslation()
  const [date, setDate] = useState(initialDate)
  const [time, setTime] = useState(initialTime)

  return (
    <Popup title={t("popup.visit_date_edit.title")}>
      <div className="PickersContainer">
        <TextCard height="47px" outlineColor="neutral">
          <Text align="center">
            {date.toLocaleString("default", { day: "numeric", month: "long" })}
          </Text>
          <input
            type="date"
            className="DatePicker"
            onInput={(e) => {
              setDate(new Date(e.target.value))
              if (onDateChange) onDateChange(date)
            }}
          />
        </TextCard>
        <TextCard height="47px" outlineColor="neutral">
          <Text align="center">{time}</Text>
          <input
            type="time"
            className="DatePicker"
            onInput={(e) => {
              setTime(e.target.value)
              if (onTimeChange) onTimeChange(time)
            }}
          />
        </TextCard>
      </div>
      <Text weight="400" align="center" margin="15px 0px 0px 0px">
        {t("popup.visit_date_edit.duration", {
          duration: `${duration}`
        })}
      </Text>

      <Button
        highlightColor="accent_color"
        onClick={onSave}
        margin="53px 0px 0px 0px"
      >
        {t("popup.visit_date_edit.save")}
      </Button>
      <Button
        outlineColor="accent_color"
        onClick={onCancel}
        margin="8px 0px 0px 0px"
      >
        {t("popup.visit_date_edit.cancel")}
      </Button>
    </Popup>
  )
}

export default EditVisitDayPopup
