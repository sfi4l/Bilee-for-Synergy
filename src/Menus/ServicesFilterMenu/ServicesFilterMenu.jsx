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
  return (
    <SupportedMenu>
      <Text size="24px" margin="27px 0px 0px 0px">
        Ваши услуги:
      </Text>
      <Text color="hint_color" weight="400">
        Найдено: 0
      </Text>

      <Button outlineColor="neutral" height="37px" margin="16px 0px 0px 0px">
        <Iconify icon={tune_icon} className="FilterText">
          <Text>Без фильтров</Text>
        </Iconify>
      </Button>

<ServiceCard margin={"13px 0px 6px 0px"} type={1} mainText={"Маникюр, Комибнированный"}/>
<ServiceCard margin={"0px 0px 6px 0px"} type={2} mainText={"Маникюр, Женский"}/>
<ServiceCard margin={"0px 0px 6px 0px"} type={3} mainText={"Маникюр, Мужской"}/>


{/* 
      <NotFoundIcon
        title="По заданным фильтрам ничего не найдено"
        margin="16px 0px 50px 0px"
      /> */}

      <Button highlightColor="accent_color">
        Добавить
      </Button>
    </SupportedMenu>
  )
}

export default ServicesFilterMenu
