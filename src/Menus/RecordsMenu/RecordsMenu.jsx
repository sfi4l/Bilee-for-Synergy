import "./RecordsMenu.css"
import SupportedMenu from "../SupportedMenu/SupportedMenu"
import FilterCard from "../../Elements/FilterCard/FilterCard" 
import RecordCard from "./RecordCard/RecordCard"
import Button from "../../Primitives/Button/Button"

const RecordsMenu = () => {
  const recordsData = [
    {
      name: "Маник, Комбинированный",
      cost: "5 000 RUR",
      type: 1,
      person: "Николай К.",
      address: "Пушкина, 1",
      date: "14 сентября, 12:00"
    }, {
      name: "Маник, Комбинированный",
      cost: "5 000 RUR",
      type: 0,
      person: "Демир Г.",
      address: "Пушкина, 1",
      date: "11 сентября, 10:00"
    }, {
      name: "Маник, Комбинированный",
      cost: "5 000 RUR",
      type: 0,
      person: "Демир Г.",
      address: "Пушкина, 1",
      date: "23.01.2022, 10:00"
    }, {
      name: "Маник, Комбинированный",
      cost: "5 000 RUR",
      type: 0,
      person: "Демир Г.",
      address: "Пушкина, 1",
      date: "11 сентября, 10:00"
    }, {
      name: "Маник, Комбинированный",
      cost: "5 000 RUR",
      type: 0,
      person: "Демир Г.",
      address: "Пушкина, 1",
      date: "23.01.2022, 10:00"
    },
  ]

  return (
    <SupportedMenu title="Записи">
      <FilterCard margin="19px 0px 13px 0px">Настроить фильтры</FilterCard>

      <div className="RecordsContainer">
        {recordsData.map((props) => (
          <RecordCard {...props} />
        ))}
      </div>

      <Button height="37px" margin="21px 0px 0px 0px">
        Загрузить ещё
      </Button>
    </SupportedMenu>
  )
}

export default RecordsMenu