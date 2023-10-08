import { useTranslation } from "i18nano"
import GraphCard from "../../../Elements/GraphCard/GraphCard"
import InfoCard from "../../../Elements/InfoCard/InfoCard"
import Color from "../../../Primitives/Color/Color"
import AnimatedInfo from "../AnimatedInfo/AnimatedInfo"

const FinancesInfo = () => {
  const t = useTranslation()
  
  return (
    <AnimatedInfo>
      <GraphCard label={t("menu.company.finances.daily_revenue")} text="43 000 RUR" />
      <GraphCard label={t("menu.company.finances.total_revenue")} text="549 000 RUR" />
      <GraphCard label={t("menu.company.finances.expenses")} text="100 RUR" />
      <GraphCard label={t("menu.company.finances.net_profit")} text="548 900 RUR" />
      <InfoCard
        label={t("menu.company.finances.average_bill")}
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
