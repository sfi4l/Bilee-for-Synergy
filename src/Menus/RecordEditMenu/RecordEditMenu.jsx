import "./RecordEditMenu.css"
import Menu from "../Menu/Menu"
import Text from "../../Primitives/Text/Text"
import TextCard from "../../Primitives/TextCard/TextCard"
import { useLoaderData } from "react-router-dom"
import { recordsData } from "../RecordsMenu/RecordsMenu"
import Card from "../../Primitives/Card/Card"
import ThemedIcon from "../../Primitives/ThemedIcon/ThemedIcon"
import edit_icon from "../../Img/edit_icon.png"
import Button from "../../Primitives/Button/Button"
import { usePopup } from "../../Hooks/usePopup"
import EditVisitDayPopup from "./EditVisitDayPopup/EditVisitDayPopup"

export const recordLoader = ({ params }) => {
  return {
    recordId: params.recordId,
    type: recordsData[params.recordId].type
  }
}

const RecordEditMenu = () => {
  const [displayPopup, exitPopup] = usePopup()
  const loaderData = useLoaderData()
  if (!loaderData) return <></>
  const { recordId, type } = loaderData

  return (
    <Menu
      title={`Запись №${recordId}`}
      add={
        <TextCard height="29px" width="auto">
          <Text weight="400">{type == 0 ? "Выполнена" : "Создана"}</Text>
        </TextCard>
      }
      padding="33px 16px 0px 16px"
    >
      <Card outlineColor="neutral">
        <div className="SidedInfoContainer TopHalfContainer">
          <Text font="Inter">Георгиевский пр-кт, 33к5</Text>
        </div>
        <div className="SidedInfoContainer BottomHalfContainer" onClick={() => {
          displayPopup(<EditVisitDayPopup duration="2 часа" onCancel={exitPopup}/>)
        }}>
          <div>
            <Text font="Inter">1 сентября, четверг</Text>
            <Text font="Inter" weight="400" margin="8px 0px 0px 0px">
              16:00-18:00, 2 ч
            </Text>
          </div>
          <ThemedIcon icon={edit_icon} />
        </div>
      </Card>

      <Card margin="12px 0px 0px 0px" outlineColor="neutral">
        <div className="SidedInfoContainer TopHalfContainer">
          <Text font="Inter">Николай К. • Мастер</Text>
          <ThemedIcon icon={edit_icon} />
        </div>
        <div className="SidedInfoContainer BottomHalfContainer">
          <Text font="Inter" weight="400" width="60%">
            Маникюр, комбинированный
          </Text>
          <Text font="Inter" weight="400" width="35%" align="right">
            1999 RUR
          </Text>
        </div>
      </Card>

      <Card
        margin="12px 0px 0px 0px"
        className="SidedInfoContainer SpecialistNameContainer"
        outlineColor="neutral"
        height="48px"
      >
        <Text>Николай</Text>
        <Text weight="400">+7 977 666 11-22</Text>
      </Card>

      <Button highlightColor="accent_color" margin="19px 0px 0px 0px">
        Подтвердить запись
      </Button>
      <Button outlineColor="accent_color" margin="8px 0px 0px 0px">
        Отменить
      </Button>
    </Menu>
  )
}

export default RecordEditMenu
