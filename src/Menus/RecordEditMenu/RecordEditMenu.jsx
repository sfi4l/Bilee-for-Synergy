import "./RecordEditMenu.css";
import Menu from "../Menu/Menu";
import Text from "../../Primitives/Text/Text";
import TextCard from "../../Primitives/TextCard/TextCard";
import { useLoaderData } from "react-router-dom";
import { recordsData } from "../RecordsMenu/RecordsMenu";
import Card from "../../Primitives/Card/Card";
import ThemedIcon from "../../Primitives/ThemedIcon/ThemedIcon";
import edit_icon from "../../Img/edit_icon.png";
import Button from "../../Primitives/Button/Button";
import { usePopup } from "../../Hooks/usePopup";
import EditVisitDayPopup from "./EditVisitDayPopup/EditVisitDayPopup";
import EditSpecialistPopup from "./EditSpecialistPopup/EditSpecialistPopup";
import { useTranslation } from "i18nano";
import { useEffect, useState } from "react";

export const recordLoader = ({ params }) => {
  return {
    recordId: params.recordId,
    type: recordsData[params.recordId].type,
  };
};

const RecordEditMenu = () => {
  const t = useTranslation();
  const [displayPopup, exitPopup] = usePopup();
  const loaderData = useLoaderData();

  const [selectedName, setSelectedName] = useState(
    localStorage.getItem("selectedName") || "Выберите специалиста"
  );
  const [savedDate, setSavedDate] = useState(
    localStorage.getItem("savedDate") || "Выберите дату"
  );
  const [savedTime, setSavedTime] = useState(
    localStorage.getItem("savedTime") || "Выберите время"
  );

  const recordId = 0;
  const type = 0;

  useEffect(() => {
    if (!loaderData) return;

    const intervalId = setInterval(() => {
      const name = localStorage.getItem("selectedName");
      const date = localStorage.getItem("savedDate");
      const time = localStorage.getItem("savedTime");
      if (name && date && time) {
        setSelectedName(name);
        setSavedDate(date);
        setSavedTime(time);
      }
    }, 1000); // Проверка

    return () => {
      clearInterval(intervalId); // Очищаем при размонтировании
    };
  }, [loaderData]);

  if (!loaderData) return <></>;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: "long", day: "numeric", month: "long" };
    const formattedDate = date.toLocaleDateString("ru-RU", options);
    return formattedDate;
  };

  const openEditVisitDayPopup = () => {
    displayPopup(
      <EditVisitDayPopup
        initialDate={new Date("2023-09-01")}
        initialTime="16:00"
        duration="2 часа"
        onCancel={exitPopup}
        onSave={(value) => {
          console.log(value);
          exitPopup();
        }}
      />
    );
  };

  return (
    <Menu
      title={t("menu.record_edit.title", {
        no: `${recordId}`,
      })}
      add={
        <TextCard height="29px" width="auto">
          <Text weight="400">
            {type == 0
              ? t("menu.record_edit.done")
              : t("menu.record_edit.created")}
          </Text>
        </TextCard>
      }
      padding="33px 16px 0px 16px"
    >
      <Card outlineColor="neutral">
        <div className="SidedInfoContainer TopHalfContainer">
          <Text font="Inter">Георгиевский пр-кт, 33к5</Text>
        </div>
        <div
          className="SidedInfoContainer BottomHalfContainer"
          onClick={openEditVisitDayPopup}
        >
          <div>
            <Text font="Inter">{formatDate(savedDate)}</Text>
            <Text font="Inter" weight="400" margin="8px 0px 0px 0px">
              {savedTime}, 2 ч
            </Text>
          </div>
          <ThemedIcon icon={edit_icon} />
        </div>
      </Card>

      <Card margin="12px 0px 0px 0px" outlineColor="neutral">
        <div
          className="SidedInfoContainer TopHalfContainer"
          onClick={() => {
            displayPopup(
              <EditSpecialistPopup
                onSave={(value) => {
                  console.log(value);
                  exitPopup();
                }}
                onCancel={exitPopup}
              />
            );
          }}
        >
          <Text font="Inter">{selectedName}</Text>
          <ThemedIcon icon={edit_icon} />
        </div>
        <div className="SidedInfoContainer BottomHalfContainer">
          <Text font="Inter" weight="400" width="60%">
            Маникюр, комбинированный
          </Text>
          <Text font="Inter" weight="400" width="35%" align="right">
            1999 RUR
          </Text>
        </div>
      </Card>

      <Card
        margin="12px 0px 0px 0px"
        className="SidedInfoContainer SpecialistNameContainer"
        outlineColor="neutral"
        height="48px"
      >
        <Text>{selectedName}</Text>
        <Text weight="400">+7 977 666 11-22</Text>
      </Card>
    </Menu>
  );
};

export default RecordEditMenu;
