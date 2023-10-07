import Button from "../../Primitives/Button/Button"
import Text from "../../Primitives/Text/Text"
import SupportedMenu from "../SupportedMenu/SupportedMenu"
import NotFoundIcon from "../../Elements/NotFoundIcon/NotFoundIcon"
import ServiceCard from "./ServiceCard/ServiceCard"
import FilterCard from "../../Elements/FilterCard/FilterCard"
import { useTranslation } from "i18nano"

const ServicesFilterMenu = () => {
  const t = useTranslation()

  const mockedCardData = [
    {
      name: "Маникюр, Комибнированный",
      type: 1
    }, {
      name: "Маникюр, Женский",
      type: 2
    }, {
      name: "Маникюр, Мужской",
      type: 3
    }, {
      name: "Педикюр, Женский",
      type: 1
    }, {
      name: "Педикюр, Мужской",
      type: 1
    }, 
  ]

  return (
    <SupportedMenu>
      <Text size="24px" margin="27px 0px 0px 0px">
      {t("menu.services.your_services")}
      </Text>
      <Text color="hint_color" weight="400">
        {t("menu.services.found", {
          found: `${mockedCardData.length}`
        })}
      </Text>

      <FilterCard margin="16px 0px 13px 0px">
      {t("menu.services.no_filters")}
      </FilterCard>

      {mockedCardData.map(({ name, type }) => (
        <ServiceCard
          margin="0px 0px 6px 0px"
          type={type}
          text={name}
        />
      ))}

      {mockedCardData.length == 0 && (
        <NotFoundIcon
        title={t("menu.services.nothing_found_with_filters")}
          margin="16px 0px 50px 0px"
        />
      )}

      <Button margin="7px 0px 6px 0px">{t("menu.services.load_more")}</Button>
      <Button highlightColor="accent_color">{t("menu.services.add")}</Button>
    </SupportedMenu>
  )
}

export default ServicesFilterMenu
