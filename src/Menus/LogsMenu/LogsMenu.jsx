import "./LogsMenu.css"
import { useTranslation } from "i18nano"
import SupportedMenu from "../SupportedMenu/SupportedMenu"
import FilterCard from "../../Elements/FilterCard/FilterCard"
import InfoCard from "../../Elements/InfoCard/InfoCard"
import LogCard from "../../Elements/LogCard/LogCard"

const LogsMenu = () => {
  const t = useTranslation()

  const logEntries = [
    {
      title: "Сотрудник КОленька (ID 234) отменил запись №123",
      subtitle: "12.01.2024, 14:00:01"
    }, {
      title: "Сотрудник Николай (ID 234) отменил запись №123",
      subtitle: "12.01.2024, 14:00:01"
    }, {
      title: "Сотрудник Николай (ID 234) добавил в запись №123 услугу Маникюр, мужской (ID 123)",
      subtitle: "12.01.2024, 14:00:01"
    }, 
  ]

  return (
    <SupportedMenu title={t("menu.settings.logging")}>
      <FilterCard margin="15px 0px 0px 0px">
        {t("menu.records.configure_filters")}
      </FilterCard>
      <div className="LogsContainer">
        {logEntries.map(({ title, subtitle }, i) => (
          <LogCard key={i} title={title} subtitle={subtitle}/>
        ))}
      </div>
    </SupportedMenu>
  )
}

export default LogsMenu
