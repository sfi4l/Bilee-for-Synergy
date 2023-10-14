import { useState } from "react"
import FilterCard from "../../Elements/FilterCard/FilterCard"
import SupportedMenu from "../SupportedMenu/SupportedMenu"
import PickerCard from "../../Elements/PickerCard/PickerCard"
import ServicesInfo from "./ServicesInfo/ServicesInfo"
import "./CompanyMenu.css"
import ClientsInfo from "./ClientsInfo/ClientsInfo"
import FinancesInfo from "./FinancesInfo/FinancesInfo"
import { LayoutGroup } from "framer-motion"
import { useTranslation, useTranslationChange } from "i18nano"

const CompanyMenu = () => {
  const t = useTranslation()
  const language = useTranslationChange().lang
  const [selected, setSelected] = useState(0)

  return (
    <SupportedMenu
      title={t("menu.company.title", {
        today: new Date().toLocaleString(language, {
          day: "numeric",
          month: "long"
        })
      })}
    >
      <PickerCard
        items={[
          t("menu.company.finances.title"),
          t("menu.company.clients.title"),
          t("menu.company.services.title")
        ]}
        onPick={(i) => setSelected(i)}
        margin="35px 0px 0px 0px"
      />
      <FilterCard margin="6px 0px 13px 0px">
        {t("menu.company.configure_filters")}
      </FilterCard>

      <div className="Info">
        <LayoutGroup>
          {selected == 0 && <FinancesInfo />}
          {selected == 1 && <ClientsInfo />}
          {selected == 2 && <ServicesInfo />}
        </LayoutGroup>
      </div>
    </SupportedMenu>
  )
}

export default CompanyMenu
