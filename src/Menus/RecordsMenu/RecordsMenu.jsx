import "./RecordsMenu.css";
import SupportedMenu from "../SupportedMenu/SupportedMenu";
import RecordCard from "./RecordCard/RecordCard";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "i18nano";

const formatDateTime = (dateString, timeString) => {
  if (!dateString || !timeString) return "Выберите дату и время";

  const options = { day: "numeric", month: "long" };
  const formattedDate = new Date(dateString).toLocaleDateString(
    "ru-RU",
    options
  );
  return `${formattedDate}, ${timeString}`;
};

const savedDate = localStorage.getItem("savedDate");
const savedTime = localStorage.getItem("savedTime");

const formattedDateTime = formatDateTime(savedDate, savedTime);

export const recordsData = {
  12445: {
    name: "Маник, Комбинированный",
    cost: "5 000 RUR",
    type: 1,
    person: "Мастер",
    address: "Георгиевский пр-кт, 33к5",
    date: formattedDateTime,
  },
};

const RecordsMenu = () => {
  const t = useTranslation();
  const navigate = useNavigate();

  return (
    <SupportedMenu title={t("menu.records.title")}>
      <div className="RecordsContainer">
        {Object.keys(recordsData).map((recordId) => (
          <RecordCard
            key={recordId}
            {...recordsData[recordId]}
            onClick={() => navigate(`/records/${recordId}`)}
          />
        ))}
      </div>
    </SupportedMenu>
  );
};

export default RecordsMenu;
