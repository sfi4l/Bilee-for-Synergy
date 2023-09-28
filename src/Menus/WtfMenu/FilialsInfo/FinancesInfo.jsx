import GraphCard from "../../../Elements/GraphCard/GraphCard"
import InfoCard from "../../../Elements/InfoCard/InfoCard"
import Color from "../../../Primitives/Color/Color"
import AnimatedInfo from "../AnimatedInfo/AnimatedInfo"

const FinancesInfo = () => {
  return (
    <AnimatedInfo>
      <GraphCard label="Дневная выручка" text="43 000 RUR" />
      <GraphCard label="Общая выручка" text="549 000 RUR" />
      <GraphCard label="Расходы" text="100 RUR" />
      <GraphCard label="Чистая прибыль" text="548 900 RUR" />
      <InfoCard
        label="Средний чек"
        title={
          <>
            2394 <Color color="green">(12% ↑)</Color>
          </>
        }
      />
    </AnimatedInfo>
  )
}

export default FinancesInfo
