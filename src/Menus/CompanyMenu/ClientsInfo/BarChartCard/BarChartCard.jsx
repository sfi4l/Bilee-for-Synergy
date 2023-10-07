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
  const theme = useContext(ThemeContext)

  const chartData = [
    {
      month: "Апр.",
      new: 48,
      old: 34
    },
    {
      month: "Май",
      new: 58,
      old: 58
    },
    {
      month: "Июн.",
      new: 40,
      old: 80
    },
    {
      month: "Июл.",
      new: 45,
      old: 30
    },
    {
      month: "Авг.",
      new: 85,
      old: 80
    },
    {
      month: "Сен.",
      new: 75,
      old: 80
    }
  ]
  const activeDaysData = [
    {
      day: "Пн",
      new: 37,
      old: 155
    },
    {
      day: "Вт",
      new: 18,
      old: 114
    },
    {
      day: "Ср",
      new: 18,
      old: 218
    },
    {
      day: "Чт",
      new: 19,
      old: 128
    },
    {
      day: "Пт",
      new: 81,
      old: 138
    },
    {
      day: "Сб",
      new: 75,
      old: 103
    },
    {
      day: "Вс",
      new: 168,
      old: 230
    }
  ]

  return (
    <InfoCard label="Трафик" insideMargin="2px 16px 12px 16px">
      <div className="Legend">
        <LegendItem
          name="Новые пользователи"
          value="1923"
          color={theme.green}
        />
        <LegendItem name="Постоянные" value="2342" color={theme.accent_color} />
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

      <Text weight="400">Наиболее активные дни</Text>
      <Text color="hint_color" size="12px" weight="400">
        05.09.2023 - 12.09.2023
      </Text>

      <Text weight="400" size="12px" color="text_color">
        <ResponsiveContainer width="100%" height={118}>
          <BarChart
            data={activeDaysData}
            layout="vertical"
            margin={{ left: -34, right: 0, top: 18, bottom: 0 }}
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
