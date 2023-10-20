import { useTranslation } from "i18nano"
import { useEffect, useState } from "react"
import GraphCard from "../../../Elements/GraphCard/GraphCard"
import InfoCard from "../../../Elements/InfoCard/InfoCard"
import { useRelativeDateFormat } from "../../../Hooks/useRelativeDateFormat"
import Button from "../../../Primitives/Button/Button"
import Color from "../../../Primitives/Color/Color"
import Table from "../../../Primitives/Table/Table"
import Text from "../../../Primitives/Text/Text"
import AnimatedInfo from "../AnimatedInfo/AnimatedInfo"
import BarChartCard from "./BarChartCard/BarChartCard"
import "./ClientsInfo.css"

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
  const tableHeader = [
    t("menu.company.clients.table.name"),
    t("menu.company.clients.table.records"),
    t("menu.company.clients.table.income"),
    t("menu.company.clients.table.last_active")
  ]
  const format = useRelativeDateFormat()
  const [startTime, _] = useState(new Date())
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const tableData = [
    [
      <UserName name="Антон" subtitle="Новый | рег. 11.09.2023" />,
      "0",
      "0 RUR",
      format(time, startTime - 1000)
    ],
    [
      <UserName name="Антон" subtitle="Новый | рег. 11.09.2023" />,
      "0",
      "0 RUR",
      format(time, startTime - 1000 * 60 * 2)
    ],
    [
      <UserName name="Антон" subtitle="Новый | рег. 11.09.2023" />,
      "0",
      "0 RUR",
      format(time, startTime - 1000 * 60 * 3)
    ],
    [
      <UserName name="Антон" subtitle="Новый | рег. 11.09.2023" />,
      "0",
      "0 RUR",
      format(time, startTime - 1000 * 60 * 4)
    ],
    [
      <UserName name="Антон" subtitle="Новый | рег. 11.09.2023" />,
      "0",
      "0 RUR",
      format(time, startTime - 1000 * 60 * 5)
    ]
  ]

  return (
    <AnimatedInfo>
      <InfoCard
        label={t("menu.company.clients.clients")}
        title={
          <>
            2394 <Color color="green">(12% ↑)</Color>
          </>
        }
      />
      <InfoCard
        label={t("menu.company.clients.records")}
        title={
          <>
            452 <Color color="green">(12% ↑)</Color>
          </>
        }
      />
      <GraphCard label={t("menu.company.clients.activity")} />
      <InfoCard
        label={t("menu.company.clients.users")}
        insideMargin="2px 0px 0px 0px"
       
      >
        <Text size="12px" weight="400" color="hint_color" margin="6px 16px">
          {t("menu.company.clients.users_total", {
            amount: "123 456"
          })}
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
          {tableHeader.map((text, i) => (
            <Text key={`a${i}`} color="hint_color" weight="600">
              {text}
            </Text>
          ))}
          {tableData.flat().map((text, i) => (
            <Text key={`b${i}`}>{text}</Text>
          ))}
        </Table>
      </InfoCard>

      <BarChartCard />
    </AnimatedInfo>
  )
}

export default ClientsInfo
