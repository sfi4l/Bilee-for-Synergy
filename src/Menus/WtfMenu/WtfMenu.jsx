import { useState } from "react"
import FilterCard from "../../Elements/FilterCard/FilterCard"
import SupportedMenu from "../SupportedMenu/SupportedMenu"
import PickerCard from "./PickerCard/PickerCard"
import ServicesInfo from "./ServicesInfo/ServicesInfo"
import "./WtfMenu.css"
import ClientsInfo from "./ClientsInfo/ClientsInfo"
import FilialsInfo from "./FilialsInfo/FilialsInfo"
import { LayoutGroup } from "framer-motion"

const WtfMenu = () => {
  const [selected, setSelected] = useState(0)

  return (
    <SupportedMenu title="Сегодня 27 сентября">
      <PickerCard
        items={["Услуги", "Клиенты", "Финансы"]}
        onPick={i => setSelected(i)}
        margin="35px 0px 0px 0px"
      />
      <FilterCard margin="6px 0px 13px 0px">Настроить фильтры</FilterCard>

      <div className="Info">
        <LayoutGroup>
          {selected == 0 && (
            <ServicesInfo />
          )}
          {selected == 1 && (
            <ClientsInfo />
          )}
          {selected == 2 && (
            <FilialsInfo />
          )}
        </LayoutGroup>
      </div>
    </SupportedMenu>
  )
}

export default WtfMenu
