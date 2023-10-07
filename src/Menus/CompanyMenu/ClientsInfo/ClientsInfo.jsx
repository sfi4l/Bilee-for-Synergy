import GraphCard from "../../../Elements/GraphCard/GraphCard"
import InfoCard from "../../../Elements/InfoCard/InfoCard"
import Color from "../../../Primitives/Color/Color"
import Table from "../../../Primitives/Table/Table"
import Text from "../../../Primitives/Text/Text"
import Button from "../../../Primitives/Button/Button"
import AnimatedInfo from "../AnimatedInfo/AnimatedInfo"
import "./ClientsInfo.css"
import BarChartCard from "./BarChartCard/BarChartCard"
import { useTranslation } from "i18nano"

const UserName = ({ name, subtitle }) => {
  return (
    <div>
      <Text>{name}</Text>
      <Text color="hint_color" size="12px">
        {subtitle}
      </Text>
    </div>
  )
}

const ClientsInfo = () => {
  const t = useTranslation()
  const tableHeader = ["Имя", "Записей", "Доход", "Последняя активность"]
  const tableData = [
    [
      <UserName name="Антон" subtitle="Новый | рег. 11.09.2023" />,
      "0",
      "0 RUR",
      "1 сек. назад"
    ],
    [
      <UserName name="Антон" subtitle="Новый | рег. 11.09.2023" />,
      "0",
      "0 RUR",
      "2 мин. назад"
    ],
    [
      <UserName name="Антон" subtitle="Новый | рег. 11.09.2023" />,
      "0",
      "0 RUR",
      "3 мин. назад"
    ],
    [
      <UserName name="Антон" subtitle="Новый | рег. 11.09.2023" />,
      "0",
      "0 RUR",
      "4 мин. назад"
    ],
    [
      <UserName name="Антон" subtitle="Новый | рег. 11.09.2023" />,
      "0",
      "0 RUR",
      "5 мин. назад"
    ]
  ]

  return (
    <AnimatedInfo>
      <InfoCard
        label="Клиенты"
        title={
          <>
            2394 <Color color="green">(12% ↑)</Color>
          </>
        }
      />
      <InfoCard
        label="Записи"
        title={
          <>
            452 <Color color="green">(12% ↑)</Color>
          </>
        }
      />
      <GraphCard label="Активность" />
      <InfoCard
        label="Пользователи"
        insideMargin="2px 0px 0px 0px"
        add={
          <Button height="39px">
            <Text margin="0px 10px">Добавить</Text>
          </Button>
        }
      >
        <Text size="12px" weight="400" color="hint_color" margin="6px 16px">
          123 456 пользователей всего
        </Text>
        <Table
          columns={4}
          rows={6}
          colWidth="auto"
          rowHeight="50px"
          margin="16px 0px 16px 0px"
          outlineColor={false}
          verticalColor={false}
          horizontalColor="hint_color"
          cellPadding="0px 16px 0px 0px"
          className="ClientsInfoTableContainer"
        >
          {tableHeader.map((text) => (
            <Text color="hint_color" weight="600">
              {text}
            </Text>
          ))}
          {tableData.flat().map((text) => (
            <Text>{text}</Text>
          ))}
        </Table>
      </InfoCard>
      <BarChartCard />
    </AnimatedInfo>
  )
}

export default ClientsInfo
