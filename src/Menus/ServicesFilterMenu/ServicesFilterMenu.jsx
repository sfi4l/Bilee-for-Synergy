import Button from "../../Primitives/Button/Button"
import Iconify from "../../Primitives/Iconify/Iconify"
import Text from "../../Primitives/Text/Text"
import SupportedMenu from "../SupportedMenu/SupportedMenu"
import tune_icon from "../../Img/tune_icon.svg"
import "./ServicesFilterMenu.css"
import NotFoundIcon from "../../Elements/NotFoundIcon/NotFoundIcon"
import { useNavigate } from "react-router-dom"
import ServiceCard from "./ServiceCard/ServiceCard"

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

      <Button outlineColor="neutral" height="37px" margin="16px 0px 13px 0px">
        <Iconify icon={tune_icon} className="FilterText">
          <Text>Без фильтров</Text>
        </Iconify>
      </Button>

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
