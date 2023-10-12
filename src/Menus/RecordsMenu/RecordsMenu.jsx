import "./RecordsMenu.css"
import SupportedMenu from "../SupportedMenu/SupportedMenu"
import FilterCard from "../../Elements/FilterCard/FilterCard"
import RecordCard from "./RecordCard/RecordCard"
import Button from "../../Primitives/Button/Button"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "i18nano"

export const recordsData = {
  12445: {
    name: "Маник, Комбинированный",
    cost: "5 000 RUR",
    type: 1,
    person: "Николай К.",
    address: "Пушкина, 1",
    date: "14 сентября, 12:00"
  },
  12446: {
    name: "Маник, Комбинированный",
    cost: "5 000 RUR",
    type: 0,
    person: "Демир Г.",
    address: "Пушкина, 1",
    date: "11 сентября, 10:00"
  },
  12447: {
    name: "Маник, Комбинированный",
    cost: "5 000 RUR",
    type: 0,
    person: "Демир Г.",
    address: "Пушкина, 1",
    date: "23.01.2022, 10:00"
  },
  12448: {
    name: "Маник, Комбинированный",
    cost: "5 000 RUR",
    type: 0,
    person: "Демир Г.",
    address: "Пушкина, 1",
    date: "11 сентября, 10:00"
  },
  12449: {
    name: "Маник, Комбинированный",
    cost: "5 000 RUR",
    type: 0,
    person: "Демир Г.",
    address: "Пушкина, 1",
    date: "23.01.2022, 10:00"
  }
}

const RecordsMenu = () => {
  const t = useTranslation()
  const navigate = useNavigate()

  return (
    <SupportedMenu title={t("menu.records.title")}>
      <FilterCard margin="19px 0px 13px 0px">
        {t("menu.records.configure_filters")}
      </FilterCard>

      <div className="RecordsContainer">
        {Object.keys(recordsData).map((recordId) => (
          <RecordCard
            key={recordId}
            {...recordsData[recordId]}
            onClick={() => navigate(`/records/${recordId}`)}
          />
        ))}
      </div>

      <Button height="37px" margin="21px 0px 0px 0px">
        {t("menu.records.load_more")}
      </Button>
    </SupportedMenu>
  )
}

export default RecordsMenu
