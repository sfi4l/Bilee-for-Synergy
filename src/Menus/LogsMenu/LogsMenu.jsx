import { useTranslation } from "i18nano"
import SupportedMenu from '../SupportedMenu/SupportedMenu'
import FilterCard from "../../Elements/FilterCard/FilterCard"
import InfoCard from "../../Elements/InfoCard/InfoCard"
import LogCard from "../../Elements/LogCard/LogCard"

const LogsMenu = () => {
  const t = useTranslation()
  return(
    <SupportedMenu title={t("menu.settings.logging")}>
      <FilterCard margin="15px 0px 0px 0px">{t("menu.records.configure_filters")}</FilterCard>
      <LogCard title="Сотрудник КОленька (ID 234) отменил запись №123" margin="15px 0px 0px 0px" subtitle="12.01.2024, 14:00:01"></LogCard>
      <LogCard title="Сотрудник Николай (ID 234) отменил запись №123" margin="15px 0px 0px 0px" subtitle="12.01.2024, 14:00:01"></LogCard>
      <LogCard title="Сотрудник Николай (ID 234) отменил запись №123" margin="15px 0px 0px 0px" subtitle="12.01.2024, 14:00:01"></LogCard>
      <LogCard title="Сотрудник Николай (ID 234) отменил запись №123" margin="15px 0px 0px 0px" subtitle="12.01.2024, 14:00:01"></LogCard>
      <LogCard title="Сотрудник Николай (ID 234) отменил запись №123" margin="15px 0px 0px 0px" subtitle="12.01.2024, 14:00:01"></LogCard>
      <LogCard title="Сотрудник Николай (ID 234) отменил запись №123" margin="15px 0px 0px 0px" subtitle="12.01.2024, 14:00:01"></LogCard>
      <LogCard title="Сотрудник Николай (ID 234) отменил запись №123" margin="15px 0px 0px 0px" subtitle="12.01.2024, 14:00:01"></LogCard>
      <LogCard title="Сотрудник Николай (ID 234) отменил запись №123" margin="15px 0px 0px 0px" subtitle="12.01.2024, 14:00:01"></LogCard>
      <LogCard title="Сотрудник Николай (ID 234) отменил запись №123" margin="15px 0px 0px 0px" subtitle="12.01.2024, 14:00:01"></LogCard>

    </SupportedMenu>
  )
}

export default LogsMenu