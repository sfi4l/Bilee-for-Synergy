import GraphCard from "../../../Elements/GraphCard/GraphCard"
import InfoCard from "../../../Elements/InfoCard/InfoCard"
import Color from "../../../Primitives/Color/Color"
import Text from "../../../Primitives/Text/Text"
import AnimatedInfo from "../AnimatedInfo/AnimatedInfo"

const ClientsInfo = () => {
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
      <GraphCard label="Активность"/>
    </AnimatedInfo>
  )
}

export default ClientsInfo
