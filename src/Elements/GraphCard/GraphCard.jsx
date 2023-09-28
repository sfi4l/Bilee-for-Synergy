import { Line, LineChart, ResponsiveContainer } from "recharts"
import Text from "../../Primitives/Text/Text"
import InfoCard from "../InfoCard/InfoCard"
import "./GraphCard.css"
import { useContext } from "react"
import { ThemeContext } from "../../Themes"

const GraphCard = ({ label, text }) => {
  const theme = useContext(ThemeContext)
  const data = [
    {
      x: 0,
      y: 0
    }, {
      x: 1,
      y: 1
    }, {
      x: 1.5,
      y: 0.5
    }, {
      x: 2,
      y: 2
    }, {
      x: 3,
      y: 1
    }, {
      x: 4,
      y: 4
    }, 
  ]

  return (
    <InfoCard
      label={label}
      add={
        <Text size="12px" weight="400" margin="2px 2px 0px 0px">
          {text}
        </Text>
      }
      insideMargin="0px 0px 0px 0px"
    >
      <ResponsiveContainer width="100%" height={130} className="Chart">
        <LineChart data={data} margin={{top: 0, right: 0, bottom: 0, left: 0}}>
          <Line type="monotone" dataKey="y" stroke={theme.accent_color} strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </InfoCard>
  )
}

export default GraphCard
