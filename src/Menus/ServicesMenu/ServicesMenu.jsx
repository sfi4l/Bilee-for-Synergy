import "./ServicesMenu.css"
import Button from "../../Primitives/Button/Button"
import Text from "../../Primitives/Text/Text"
import SupportedMenu from "../SupportedMenu/SupportedMenu"
import NotFoundIcon from "../../Elements/NotFoundIcon/NotFoundIcon"
import ServiceCard from "./ServiceCard/ServiceCard"
import FilterCard from "../../Elements/FilterCard/FilterCard"
import { useTranslation } from "i18nano"

const ServicesMenu = () => {
  const t = useTranslation()

  const mockedCardData = [
    {
      name: "Маникюр, Комибнированный",
      type: 1
    },
    {
      name: "Маникюр, Женский",
      type: 2
    },
    {
      name: "Маникюр, Мужской",
      type: 3
    },
    {
      name: "Педикюр, Женский",
      type: 1
    },
    {
      name: "Педикюр, Мужской",
      type: 1
    }
  ]

  return (
    <SupportedMenu
      title={t("menu.services.your_services")}
      subtitle={t("menu.services.found", {
        found: `${mockedCardData.length}`
      })}
    >
      

      <div className="ServicesContainer">
        {mockedCardData.map(({ name, type }, i) => (
          <ServiceCard key={i} type={type} text={name} />
        ))}
      </div>

      {mockedCardData.length === 0 && (
        <NotFoundIcon
          title={t("menu.services.nothing_found_with_filters")}
          margin="16px 0px 50px 0px"
        />
      )}

      
    </SupportedMenu>
  )
}

export default ServicesMenu
