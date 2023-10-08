import { useContext } from "react"
import Text from "../../../../Primitives/Text/Text"
import "./BarChartCard.css"
import { ThemeContext } from "../../../../Themes"
import InfoCard from "../../../../Elements/InfoCard/InfoCard"
import {
  Bar,
  BarChart,
  Rectangle,
  ResponsiveContainer,
  XAxis,
  YAxis
} from "recharts"
import { useTranslation } from "i18nano"

const LegendItem = ({ color, name, value }) => {
  return (
    <div className="LegendItem">
      <div className="LegendItemName">
        <div
          className="LegendItemCircle"
          style={{
            backgroundColor: color
          }}
        />
        <Text weight="400">{name}</Text>
      </div>
      <Text weight="400">{value}</Text>
    </div>
  )
}

const BarChartCard = () => {
  const t = useTranslation()
  const theme = useContext(ThemeContext)

  const chartData = [
    {
      month: 4,
      new: 48,
      old: 34
    },
    {
      month: 5,
      new: 58,
      old: 58
    },
    {
      month: 6,
      new: 40,
      old: 80
    },
    {
      month: 7,
      new: 45,
      old: 30
    },
    {
      month: 8,
      new: 85,
      old: 80
    },
    {
      month: 9,
      new: 75,
      old: 80
    }
  ].map(data => ({
    ...data,
    month: t(`dates.months_short.${data.month}`)
  }))
  const activeDaysData = [
    {
      day: 1,
      new: 37,
      old: 155
    },
    {
      day: 2,
      new: 18,
      old: 114
    },
    {
      day: 3,
      new: 18,
      old: 218
    },
    {
      day: 4,
      new: 19,
      old: 128
    },
    {
      day: 5,
      new: 81,
      old: 138
    },
    {
      day: 6,
      new: 75,
      old: 103
    },
    {
      day: 7,
      new: 168,
      old: 230
    }
  ].map(data => ({
    ...data,
    day: t(`dates.weekdays_short.${data.day}`)
  }))

  return (
    <InfoCard
      label={t("menu.company.clients.traffic")}
      insideMargin="2px 16px 12px 16px"
    >
      <div className="Legend">
        <LegendItem
          name={t("menu.company.clients.new_users")}
          value="1923"
          color={theme.green}
        />
        <LegendItem
          name={t("menu.company.clients.regular_users")}
          value="2342"
          color={theme.accent_color}
        />
      </div>

      <Text weight="400" size="14px">
        <ResponsiveContainer width="100%" height={170}>
          <BarChart
            data={chartData}
            margin={{ left: 0, right: 0, top: 20, bottom: 20 }}
            barSize={12}
          >
            <XAxis
              dataKey="month"
              tickLine={false}
              tick={true}
              axisLine={false}
              stroke={theme.text_color}
            />
            <Bar dataKey="new" fill={theme.green} />
            <Bar dataKey="old" fill={theme.accent_color} />
          </BarChart>
        </ResponsiveContainer>
      </Text>

      <Text weight="400">{t("menu.company.clients.most_active_days")}</Text>
      <Text color="hint_color" size="12px" weight="400">
        05.09.2023 - 12.09.2023
      </Text>

      <Text weight="400" size="12px" color="text_color">
        <ResponsiveContainer width="100%" height={118}>
          <BarChart
            data={activeDaysData}
            layout="vertical"
            margin={{ left: -32, right: 0, top: 18, bottom: 0 }}
            barSize={3}
            barGap={2}
          >
            <XAxis type="number" hide />
            <YAxis
              dataKey="day"
              type="category"
              tickLine={false}
              tick={true}
              axisLine={false}
              stroke={theme.text_color}
              tickMargin={5}
              interval={0}
            />
            <Bar
              dataKey="new"
              fill={theme.green}
              background={{ fill: theme.chart_background, radius: 100 }}
              radius={100}
            />
            <Bar
              dataKey="old"
              fill={theme.accent_color}
              background={{ fill: theme.chart_background, radius: 100 }}
              radius={100}
            />
          </BarChart>
        </ResponsiveContainer>
      </Text>
    </InfoCard>
  )
}

export default BarChartCard
