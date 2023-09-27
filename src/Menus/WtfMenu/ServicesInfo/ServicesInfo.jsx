import React from "react"
import InfoCard from "../../../Elements/InfoCard/InfoCard"
import Text from "../../../Primitives/Text/Text"
import { motion } from "framer-motion"
import AnimatedInfo from "../AnimatedInfo/AnimatedInfo"

const ServicesInfo = () => {
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
    </AnimatedInfo>
  )
}

export default ServicesInfo
