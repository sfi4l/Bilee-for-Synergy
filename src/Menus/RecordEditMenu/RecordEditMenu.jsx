import "./RecordEditMenu.css"
import Menu from "../Menu/Menu"
import Text from "../../Primitives/Text/Text"
import TextCard from "../../Primitives/TextCard/TextCard"
import { useLoaderData } from "react-router-dom"
import { recordsData } from "../RecordsMenu/RecordsMenu"

export const recordLoader = ({ params }) => {
  return {
    recordId: params.recordId,
    type: recordsData[params.recordId].type
  }
}

const RecordEditMenu = () => {
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
    ></Menu>
  )
}

export default RecordEditMenu
