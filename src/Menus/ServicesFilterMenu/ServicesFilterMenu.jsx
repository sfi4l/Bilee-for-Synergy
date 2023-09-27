import Button from "../../Primitives/Button/Button"
import Text from "../../Primitives/Text/Text"
import SupportedMenu from "../SupportedMenu/SupportedMenu"
import NotFoundIcon from "../../Elements/NotFoundIcon/NotFoundIcon"
import ServiceCard from "./ServiceCard/ServiceCard"
import FilterCard from "../../Elements/FilterCard/FilterCard"

const ServicesFilterMenu = () => {
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
        Ваши услуги:
      </Text>
      <Text color="hint_color" weight="400">
        Найдено: {mockedCardData.length}
      </Text>

      <FilterCard margin="16px 0px 13px 0px">
        Без фильтров
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
          title="По заданным фильтрам ничего не найдено"
          margin="16px 0px 50px 0px"
        />
      )}

      <Button margin="7px 0px 6px 0px">Загрузить ещё</Button>
      <Button highlightColor="accent_color">Добавить</Button>
    </SupportedMenu>
  )
}

export default ServicesFilterMenu
