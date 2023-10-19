import "./EmployeesMiniCard.css"
import Card from "../../Primitives/Card/Card"
import Text from "../../Primitives/Text/Text"
import IconLocation from '../../Img/location_icon.png'
import IconClock from "../../Img/clock_icon.png"
import Iconify from "../../Primitives/Iconify/Iconify"

const EmployeesMiniCard = ({ id, title, subtitle, margin, add, type, show }) => {
  let color = "green";
  let availability = "На работе";

  if (type == 1) {
    availability = "На работе"
    color = "green"
  }
  if (type == 2) {
    availability = "Неактивен"
    color = "red"
  }
  if (type == 3) {
    availability = "Выходной"
    color = "hint_color"
  }
  if (type == 4) {
    availability = "Подтвердите"
    color = "accent_color"
  }
  if (show == 0) {

  }

  return (
    <Card
      className="EmployeesContainer"
      outlineColor="neutral"
      margin={margin}
    >
      <div className="EmployeesContainer" >
        <img src={add} className="EmployeesCard" />
        <div className="EmployeesContainerForInfo">
          <div className="EmployeeMenuFirstLayer">
            <Text size="16px" weight="600" margin="11px 10px 0px 11px">
              {title}
            </Text>
            <Text color={color} size="12px" weight="600" margin="15px 0px 0px 0px">
              {availability}
            </Text>
          </div>
          <Text
            size="12px"
            weight="400"
            color="hint_color"
            margin="0px 10px 0px 11px"
          >
            {subtitle}
          </Text>
          {show !== 1 ? (
            <div className="EmployeeMenuSecondLayer">
              <Iconify className="iconify" icon={IconLocation} size={"14px"}><Text margin="0px 0px 0px -13px" size="12px" weight="400">Пушкина, 1</Text></Iconify>
              <Iconify icon={IconClock} size={"14px"}><Text margin="0px 0px 0px -13px" size="12px" weight="400">10:00-18:00</Text></Iconify>
            </div>
          ) :null}
        </div>
      </div>
    </Card>
  )
}

export default EmployeesMiniCard