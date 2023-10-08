import React from "react"
import InfoCard from "../../../Elements/InfoCard/InfoCard"
import Text from "../../../Primitives/Text/Text"
import { motion } from "framer-motion"
import AnimatedInfo from "../AnimatedInfo/AnimatedInfo"
import Color from "../../../Primitives/Color/Color"
import Table from "../../../Primitives/Table/Table"
import "./ServicesInfo.css"
import { useTranslation } from "i18nano"
import ColoredTranslation from "../../../Primitives/ColoredTranslation/ColoredTranslation"

const ServicesInfo = () => {
  const t = useTranslation()
  const tableHeader = [
    t("menu.company.services.table.name"),
    t("menu.company.services.table.revenue"),
    t("menu.company.services.table.amount"),
    t("menu.company.services.table.rating"),
    t("menu.company.services.table.repeats"),
    t("menu.company.services.table.cancels"),
  ]
  const tableData = [
    ["Маник", "100 000 RUR", "1", "5.0", "23", "1"],
    ["Маник", "200 000 RUR", "2", "5.0", "42", "1"],
    ["Маник", "40 000 RUR", "3", "4.2", "12", "2"],
    ["Маник", "50 000 RUR", "4", "5.0", "43", "5"],
    ["Маник", "120 000 RUR", "5", "3.98", "12", "2"]
  ]

  return (
    <AnimatedInfo>
      <InfoCard label={t("menu.company.services.most_popular.label")} title="Маник">
        <Text weight="400" color="hint_color">
          {t("menu.company.services.most_popular.comment", {
            people: "230",
            records: "2000",
            records_daily: "20"
          })}
        </Text>
      </InfoCard>
      <InfoCard label={t("menu.company.services.least_popular.label")} title="Маник">
        <Text weight="400" color="hint_color">
          {t("menu.company.services.least_popular.comment", {
            amount: "5"
          })}
        </Text>
      </InfoCard>
      <InfoCard label={t("menu.company.services.most_profitable.label")} title="Маник">
        <Text weight="400" color="hint_color">
          {t("menu.company.services.most_profitable.comment", {
            profit: "100 000 RUR",
            daily_profit: "10 000 RUR"
          })}
        </Text>
      </InfoCard>
      <InfoCard label={t("menu.company.services.least_profitable.label")} title="Маник">
        <Text weight="400" color="hint_color">
          {t("menu.company.services.least_profitable.comment", {
            profit: "2 000 RUR"
          })}
        </Text>
      </InfoCard>
      <InfoCard
        label={
          <ColoredTranslation path="menu.company.services.top_revenue"/>
        }
        insideMargin="2px 0px 0px 0px"
      >
        <Table
          columns={6}
          rows={6}
          colWidth="auto"
          rowHeight="37px"
          margin="16px 0px 16px 0px"
          outlineColor={false}
          verticalColor={false}
          horizontalColor="hint_color"
          cellPadding="0px 16px 0px 0px"
          className="ServicesInfoTableContainer"
        >
          {tableHeader.map((text) => (
            <Text color="hint_color" weight="600">{text}</Text>
          ))}
          {tableData.flat().map(text => (
            <Text>{text}</Text>
          ))}
        </Table>
      </InfoCard>
    </AnimatedInfo>
  )
}

export default ServicesInfo
