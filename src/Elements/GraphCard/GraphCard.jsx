import { Line, LineChart } from "recharts"
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
    >
      <LineChart width={310} height={130} data={data}>
        <Line type="monotone" dataKey="y" stroke={theme.accent_color} />
      </LineChart>
    </InfoCard>
  )
}

export default GraphCard
