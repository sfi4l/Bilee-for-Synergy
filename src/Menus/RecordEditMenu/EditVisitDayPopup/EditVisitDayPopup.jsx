import "./EditVisitDayPopup.css";
import Popup from "../../../Popup/Popup/Popup";
import Button from "../../../Primitives/Button/Button";
import Text from "../../../Primitives/Text/Text";
import { useState, useEffect } from "react";
import TextCard from "../../../Primitives/TextCard/TextCard";
import { useTranslation } from "i18nano";

const EditVisitDayPopup = ({
  initialDate,
  initialTime,
  duration,
  onDateChange,
  onTimeChange,
  onCancel,
  onSave,
}) => {
  const t = useTranslation();

  const [date, setDate] = useState(new Date(initialDate));
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const savedDate = localStorage.getItem("savedDate");
    const savedTime = localStorage.getItem("savedTime");
    if (savedDate) {
      setDate(new Date(savedDate));
      if (onDateChange) onDateChange(savedDate);
    }
    if (savedTime) {
      setTime(savedTime);
      if (onTimeChange) onTimeChange(savedTime);
    }
  }, [onDateChange, onTimeChange]);

  const handleSave = () => {
    localStorage.setItem("savedDate", date.toISOString());
    localStorage.setItem("savedTime", time);

    if (onSave) {
      onSave(date.toISOString(), time);
    }

    if (onCancel) {
      onCancel();
    }
  };

  return (
    <Popup title={t("popup.visit_date_edit.title")}>
      <div className="PickersContainer">
        <TextCard height="47px" outlineColor="neutral">
          <Text align="center">
            {date.toLocaleDateString("default", {
              day: "numeric",
              month: "long",
            })}
          </Text>
          <input
            type="date"
            className="DatePicker"
            value={date.toISOString().split("T")[0]}
            onInput={(e) => {
              const newDate = new Date(e.target.value + "T00:00:00.000Z");
              setDate(newDate);
              if (onDateChange) onDateChange(newDate.toISOString());
            }}
          />
        </TextCard>
        <TextCard height="47px" outlineColor="neutral">
          <Text align="center">{time}</Text>
          <input
            type="time"
            className="DatePicker"
            value={time}
            onInput={(e) => {
              const newTime = e.target.value;
              setTime(newTime);
              if (onTimeChange) onTimeChange(newTime);
            }}
          />
        </TextCard>
      </div>
      <Text weight="400" align="center" margin="15px 0px 0px 0px">
        {t("popup.visit_date_edit.duration", {
          duration: `${duration}`,
        })}
      </Text>

      <Button
        highlightColor="accent_color"
        onClick={handleSave}
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
  );
};

export default EditVisitDayPopup;
