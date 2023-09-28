import React from "react"
import InfoCard from "../../../Elements/InfoCard/InfoCard"
import Text from "../../../Primitives/Text/Text"
import { motion } from "framer-motion"
import AnimatedInfo from "../AnimatedInfo/AnimatedInfo"
import Color from "../../../Primitives/Color/Color"
import Table from "../../../Primitives/Table/Table"
import "./ServicesInfo.css"

const ServicesInfo = () => {
  const tableHeader = [
    "Название",
    "Выручка",
    "Кол-во записей",
    "Рейтинг",
    "% повторной записи",
    "% отмен"
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
      <InfoCard label="Самая популярная услуга этого года" title="Маник">
        <Text weight="400" color="hint_color">
          За год 230 человек записались на неё 2000 раз. Это 20 записей каждый
          день
        </Text>
      </InfoCard>
      <InfoCard label="Самая непопулярная услуга этого года" title="Маник">
        <Text weight="400" color="hint_color">
          За год на неё записались всего 5 раз
        </Text>
      </InfoCard>
      <InfoCard label="Самая прибыльная услуга этого года" title="Маник">
        <Text weight="400" color="hint_color">
          За год она принесла 100 000 RUR. Это 10 000 RUR в день
        </Text>
      </InfoCard>
      <InfoCard label="Самая неприбыльная услуга этого года" title="Маник">
        <Text weight="400" color="hint_color">
          За год она принесла всего 2 000 RUR.
        </Text>
      </InfoCard>
      <InfoCard
        label={
          <>
            5 <Color color="accent_color">лучших</Color> по{" "}
            <Color color="accent_color">выручке</Color>
          </>
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
